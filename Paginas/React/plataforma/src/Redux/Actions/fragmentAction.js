import axios from 'axios';
import { GET_FRAGMENT } from '../Types';


export const getFragment = (id) => (dispatch) => {
	axios.get(`${process.env.REACT_APP_URL_API}/clases/${id}`)
	.then(res => {
		return dispatch({
			type: GET_FRAGMENT,
			payload: res.data
		})
	})
}
