import axios from 'axios';
import { GET_ALL_COURSES, GET_COURSE } from '../Types';


export const getAllCourses = () => (dispatch) => {
	axios.get(`${process.env.REACT_APP_URL_API}/cursos`)
	.then(res => {
		return dispatch({
			type: GET_ALL_COURSES,
			payload: res.data
		})
	})
}


export const getCourse = (id) => (dispatch) => {
	axios.get(`${process.env.REACT_APP_URL_API}/cursos/${id}`)
	.then(res => {
		return dispatch({
			type: GET_COURSE,
			payload: res.data
		})
	})
}
