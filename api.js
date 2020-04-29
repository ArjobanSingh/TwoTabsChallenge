const api_url = `https://randomuser.me/api/?results=20&nat=us,gb`;

const convert = (results, type) => {
    let finalData = null
    if (type === 'data') {
    finalData = results.map(item => {
        return {
            id: item.login.uuid,
            name: item.name.first + " " + item.name.last,
            username: item.login.username,
            uri: item.picture.medium
        }
    });
    }
    else if (type === 'images') {
        finalData = results.map(item => {
            return {
                id : item.id,
                uri: item.webformatURL
            }
        })
    }
    return finalData
}


async function fetchFakeData() {
    const response = await fetch(api_url);
    if (response.status >= 400 && response.status < 600)
    {
        return {error: true}
    }
    const jsonResponse = await response.json();
    return {error: false, data: convert(jsonResponse.results, 'data')}
} 


async function fetchFakeImages() {
    const response = await fetch('https://pixabay.com/api/?key=16291449-b3c3314937d28289e879d5cea&q=yellow+flowers&image_type=photo&pretty=true')
    
    if (response.status >= 400 && response.status < 600)
    {
        return {error: true}
    }
    const jsonResponse = await response.json();
    return {error: false, data: convert(jsonResponse.hits, 'images')}
}


export  {fetchFakeData, fetchFakeImages};