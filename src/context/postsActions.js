import { api } from "@/services/api";

export const fetchPosts = async (dispatch) => {
    try {
        dispatch({type:"FETCH_POSTS_START"});
        const reponse = await api.get("/posts") ;

        dispatch({
            type:'FETCH_POSTS_SUCCESS',
            payload:reponse.data
        })


    }catch(error) {
        dispatch({type:"FETCH_POSTS_ERROR", payload:error.message});
    }
}