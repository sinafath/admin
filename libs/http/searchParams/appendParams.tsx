

function appendParams(url: string, params: {
    [key in string]: number | string
}) {
    if (Object.keys(params).length === 0) {
        return url; // Return the original URL if params is empty
    }
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
        searchParams.set(key, value.toString());
    }
    return url + '?' + searchParams.toString();
}

export default appendParams