import reducer from '../reducers';

describe('Reducert testing',() => {
    it('Should return intial state',() => {
        expect(JSON.stringify(reducer(undefined,{}))).toEqual(JSON.stringify({
            article:{},
            gallery:{}        
        }))
    })

    it('Reducer with action',() => {
        let state={
            article:[],
            gallery:[]  
        }

        state= reducer(state,{action:'GET_LATEST'})

        expect(state).toEqual({
            article:[],
            gallery:[] 
        })
    })


})
