import {ACTION_TYPES} from '../actions/actions'

const initialState = {
    list : []
}

export const messageReducer = (state = initialState, action) =>{
    switch(action.type){
        case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                list:[... action.payload]
            }
        default:
            return state;
    }
}