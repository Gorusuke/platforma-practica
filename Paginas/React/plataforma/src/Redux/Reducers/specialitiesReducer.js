import { GET_ALL_SPECIALITIES, GET_SPECIALITY } from "../Types"


let initialState = {
	specialities: [],
	speciality: []
}

// eslint-disable-next-line
export default function(state = initialState, action){
	switch (action.type) {
		case GET_ALL_SPECIALITIES:
			return{
				...state,
				specialities: action.payload
			}

		case GET_SPECIALITY:
			return{
				...state,
				speciality: action.payload
			}
			
		default:
			return state
	}
}
