function dayOfWeekName(date) {
    const index = date.getDay();
    return ["Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"][index];
}

function ampmTimeString(date) {
    return date.toLocaleTimeString('en-US',  {
        hour: 'numeric', minute: '2-digit', hour12: true
    });
}
