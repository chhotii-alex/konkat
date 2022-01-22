export async function getProgramData() {
    let server = "http://localhost:3000";
    let url = server + "/program";
    let res = await fetch(url);
    let text = await res.text();
    if (res.ok) {
        return JSON.parse(text);
    }
    else {
        throw new Error(text);
    }
}
