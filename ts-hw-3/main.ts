async function foobar<T>(url: URL | string): Promise<T> {
    const response: Response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json() as T;
}
