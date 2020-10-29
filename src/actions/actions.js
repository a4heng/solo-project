import api from './api.js'
export const ACTION_TYPES = {
   CREATE: 'CREATE',
   DELETE : 'DELETE',
   UPDATE : 'UPDATE',
   FETCH_ALL : 'FETCH_ALL',
}

export const fetchAll = () => dispatch => {
    api.post().fetchAll()
    .then( res =>{
        // console.log(res);
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: res.data
        })
    })
}