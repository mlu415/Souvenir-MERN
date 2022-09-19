import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// Action creators

//uses redux thunk as dealing with asynch logic

  /**
 * fetches all posts from the server
 * 
 * TO DO IMPLEMENT AUTH/selective fetch
 * 
 * returns the error upon failure
 */
export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  /**
 * Creates a post from information filled in the form
 * 
 * returns the error upon failure
 */
  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

 /*
 * Updates a post given an id and information filled in the form
 * 
 * returns the error upon failure
 */
  export const updatePost = (id, post) => async (dispatch) =>{
    try {
      const {data } = await api.updatePost(id, post);
      dispatch({type: UPDATE,payload:data});
    } catch (error) {
      console.log(error)
    }
  }
  
 /* Deletes a post given an post id
 * 
 * returns the error upon failure
 */
  export const deletePost = (id) => async(dispatch) => {
    try {
      await api.deletePost(id)
      dispatch({ type :DELETE, payload:id})
    } catch (error) {
      
    }
  }

/* Likes a post given an post id
 * 
 * returns the error upon failure
 */
  export const likePost = (id) => async(dispatch) =>{
    try {
      const {data } = await api.likePost(id);
      dispatch({type: UPDATE,payload:data});
      
    } catch (error) {
      console.log(error)
    }
  }
 