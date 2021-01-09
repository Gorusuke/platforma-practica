import { GET_ALL_COURSES, GET_COURSE } from "../Types"


let initialState = {
	courses: [],
	course: []
}

// eslint-disable-next-line
export default function(state = initialState, action){
	switch (action.type) {
		case GET_ALL_COURSES:
			return{
				...state,
				courses: action.payload
			}

		case GET_COURSE:
			return{
				...state,
				course: action.payload
			}
	
		default:
			return state
	}
}
