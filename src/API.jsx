const baseURL = "https://boolean-uk-api-server.fly.dev/"
const githubUsername = "maaxolofsson/"

async function get(str) {
    const res = await fetch(baseURL + githubUsername + str);
    const data = await res.json();
    return data
}

export default { get }
