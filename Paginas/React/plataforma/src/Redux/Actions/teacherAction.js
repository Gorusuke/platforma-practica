import axios from 'axios';
import { GET_ALL_TEACHERS } from '../Types';


export const getAllTeachers = () => (dispatch) => {
	axios.get("https://raw.githubusercontent.com/betoquiroga/api-react-desde-cero/master/db.json")
	.then(res => {
		return dispatch({
			type: GET_ALL_TEACHERS,
			payload: res.data.profesores
		})
	})
}
