import { GET_ALL_TEACHERS } from "../Types"


let initialState = {
	teachers: []
}

// eslint-disable-next-line
export default function(state = initialState, action){
	switch (action.type) {
		case GET_ALL_TEACHERS:
			return{
				...state,
				teachers: action.payload
			}
	
		default:
			return state
	}
}
