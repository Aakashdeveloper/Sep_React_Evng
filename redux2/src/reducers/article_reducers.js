export default function(state={},action){
    switch(action.type){
        case 'GET_LATEST':
            return{...state, latestNews:action.payload}
        case 'GET_ARTICLE':
            return{...state, articlesNews:action.payload}
        default:
            return state
    }
}