import axios from 'axios';
import { GET_ALL_SPECIALITIES, GET_SPECIALITY } from '../Types';


export const getAllSpecialities = () => {
	return async (dispatch) => {
		const respuesta = await axios.get(`${process.env.REACT_APP_URL_API}/especialidades`);
		const resultado = await respuesta.data
		return dispatch({
			type: GET_ALL_SPECIALITIES,
			payload: resultado
		})
	}
}


export const getSpeciality = (id) => (dispatch) => {
	axios.get(`${process.env.REACT_APP_URL_API}/especialidades/${id}`)
	.then(res => {
		return dispatch({
			type: GET_SPECIALITY,
			payload: res.data
		})
	})
}