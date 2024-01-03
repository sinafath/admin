

function appendParams(url: string, params: {
    [key in string]: any
}) {
    if (Object.keys(params).length === 0) {
        return url; // Return the original URL if params is empty
    }
    const searchParams = new URLSearchParams();
    for (const [key, values] of Object.entries(params)) {
        if (typeof values === "object") {
        }
        searchParams.set(key, values.toString());
    }
    return url + '?' + searchParams.toString();
}

export default appendParams