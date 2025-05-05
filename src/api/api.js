import axios from "axios";

const API_KEY = '8LUoXBv9MmNR18UNgJwMn29FRapTZ6KhbL6MkUfVhwI'

const api = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${API_KEY}`
    },
    params: {
        orientation: 'landscape',
        per_page: 9
    }
});

const getData = async (query, page) =>{
    const {data} = await api.get('search/photos', {params: {query, page}})
    console.log(data)
    return data
}

 export default getData