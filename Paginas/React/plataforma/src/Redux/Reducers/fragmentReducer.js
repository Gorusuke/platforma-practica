import { GET_FRAGMENT } from "../Types"


let initialState = {
	fragment: []
}

// eslint-disable-next-line
export default function(state = initialState, action){
	switch (action.type) {
		case GET_FRAGMENT:
			return{
				...state,
				fragment: action.payload
			}
	
		default:
			return state
	}
}
