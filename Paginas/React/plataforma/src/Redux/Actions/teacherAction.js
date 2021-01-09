import axios from 'axios';
import { GET_ALL_TEACHERS } from '../Types';


export const getAllTeachers = () => (dispatch) => {
	axios.get(`${process.env.REACT_APP_URL_API}/profesores`)
	.then(res => {
		return dispatch({
			type: GET_ALL_TEACHERS,
			payload: res.data
		})
	})
}
