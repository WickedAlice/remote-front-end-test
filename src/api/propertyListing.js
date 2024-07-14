export default async (params) => {
    const searchParams = new URLSearchParams(params);

    try {
        const url = new URL(`http://localhost:3000/api/properties?${searchParams}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
    }
};
