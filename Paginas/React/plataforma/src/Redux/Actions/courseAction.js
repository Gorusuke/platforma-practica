import axios from 'axios';
import { GET_ALL_COURSES, GET_COURSE } from '../Types';


export const getAllCourses = () => (dispatch) => {
	axios.get(`https://raw.githubusercontent.com/betoquiroga/api-react-desde-cero/master/db.json`)
	.then(res => {
		return dispatch({
			type: GET_ALL_COURSES,
			payload: res.data.cursos
		})
	})
}


export const getCourse = () => (dispatch) => {
	axios.get(`https://raw.githubusercontent.com/betoquiroga/api-react-desde-cero/master/db.json`)
	.then(res => {
		return dispatch({
			type: GET_COURSE,
			payload: res.data.curso
		})
	})
}
