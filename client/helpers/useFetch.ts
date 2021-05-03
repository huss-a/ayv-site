export default async function useFetch(url:string) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        return console.error(`An error occured!\n ${error.message}`)
    }
}