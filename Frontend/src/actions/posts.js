import * as api from "../api";

// Action creators

//uses redux thunk as dealing with asynch logic
export const getPosts = () => async(dispatch)=>{
    try {
        const{data } = await api.fetchPosts();
        dispatch({type: "FETCH_ALL", payload:data}); 
        
    } catch (error) {
        console.log(error.message)
        
    }



    const action = {type: "FETCH_ALL", payload:[]}

}