import axios from 'axios';

export default {
    post(url='http://localhost:3000/messages/'){
        return{
            fetchAll : () => axios.get(url),
            fetchById : id => axios.get(url + id),
            create : newMessage => axios.post(url,newMessage),
            update : (id, updatedMessage) => axios.put(url + id, updatedMessage),
            delete: id => axios.delete(url + id) 
        }
    }
}