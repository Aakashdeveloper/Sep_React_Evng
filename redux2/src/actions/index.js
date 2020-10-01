const base_url = "http://localhost:8900"

export function latestNews(){
    const output = fetch(`${base_url}/articles?_end=3`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${base_url}/articles?_start=3&_end=10`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_ARTICLE',
        payload:output
    }
}

export function galleryNews(){
    const output = fetch(`${base_url}/galleries?_limit=2`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'GET_GALLERY',
        payload:output
    }
}

export function selectedNews(id){
    const output = fetch(`${base_url}/articles?id=${id}`,{method:'GET'})
    .then((data) => data.json())

    return{
        type:'SELECTED_NEWS',
        payload:output
    }
}

export function claerSelectedNews(id){
 
    return{
        type:'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}


export function handleLikes(array,id){
    const output = fetch(`${base_url}/articles/${id}`,{
        method:'PATCH',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({likes:array})
    })
    .then((data) => data.json())

    return{
        type:'HANDLE_LIKES',
        payload:output
    }
}
