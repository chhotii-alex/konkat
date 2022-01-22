import { collectByValue, sortDataByKeys } from './datamanip.js';
import {dayOfWeekName, ampmTimeString} from './datetime.js';

function extractTagInfo(session) {
    const tagPattern = /([a-z]+):(.+)/;
    if (session.tags.length > 2) {
        console.error("This session has more than 2 tags:", session);
    }
    session.track = null;
    session.type = null;
    for (let tag of session.tags) {
        if (!tagPattern.test(tag)) {
            console.error("Mal-formed tag: ", tag, session);
        }
        let [_, tagType, tagValue] = tagPattern.exec(tag);
        if (['track', 'type'].includes(tagType)) {
            session[tagType] = tagValue;
        }
        else {
            console.log(tagType);
            console.error("Unkown tag type: ", tag, session);
        }
    }
}

function organizedByDay(sessions) {
    const datePattern = /(\d{4})-(\d{2})-(\d{2})/;
    const timePattern = /(\d{2}):(\d{2})/;

    for (let session of sessions) {
        session.isMarked = false;
        session.isHidden = false;
        extractTagInfo(session);
    }

    // Find the distinct days in the sessions.
    // Assign each session to its day.
    let daysLookup = collectByValue(sessions, 'date');
    let days = sortDataByKeys(daysLookup, 'date', 'sessions');
    for (const day of days) {
        let [_, yearNum, monthNum, dayNum] = datePattern.exec(day.date);
        let date = new Date(yearNum, monthNum-1, dayNum);
        day.dayOfWeek = dayOfWeekName(date);

        let timesLookup = collectByValue(day.sessions, 'time');
        day.times = sortDataByKeys(timesLookup, 'time', 'sessions');
        delete day.sessions;

        for (const time of day.times) {
            let [_, hour, minute] = timePattern.exec(time.time);
            let dateTime = new Date(yearNum, monthNum-1, dayNum, hour, minute, 0);
            time.time = dateTime;
            time.timeString = ampmTimeString(dateTime);
        }
    }
    return days;
}

export async function getProgramData() {
    let server = "http://localhost:3000";
    let url = server + "/program";
    let res = await fetch(url);
    let text = await res.text();
    if (res.ok) {
        let rawData = JSON.parse(text);
        return organizedByDay(rawData);
    }
    else {
        throw new Error(text);
    }
}
