import { GET_ALL_POSTS, GET_POSTS } from '../Types';


let initialState = {
	posts: [],
	post: []
}

// eslint-disable-next-line
export default function(state = initialState, action){
	switch (action.type) {
		case GET_ALL_POSTS:
			return{
				...state,
				posts: action.payload
			}

		case GET_POSTS:
			return{
				...state,
				post: action.payload
			}
			
		default:
			return state
	}
}
