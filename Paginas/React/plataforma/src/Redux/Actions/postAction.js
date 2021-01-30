import axios from 'axios';
import { GET_ALL_POSTS, GET_POSTS } from '../Types';


export const getAllPost = () => (dispatch) => {
	axios.get(`https://raw.githubusercontent.com/betoquiroga/api-react-desde-cero/master/db.json`)
	.then(res => {
		return dispatch({
			type: GET_ALL_POSTS,
			payload: res.data.posts
		})
	})
}


export const getPost = (id) => (dispatch) => {
	axios.get(`${process.env.REACT_APP_URL_API}/posts/${id}`)
	.then(res => {
		return dispatch({
			type: GET_POSTS,
			payload: res.data
		})
	})
}
