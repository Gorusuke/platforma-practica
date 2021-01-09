import {combineReducers} from 'redux';
import postReducer from './postReducer';
import courseReducer from './courseReducer';
import specialitiesReducer from './specialitiesReducer';
import teacherReducer from './teacherReducer';
import fragmentReducer from './fragmentReducer';

export default combineReducers({
	post: postReducer,
	course: courseReducer,
	speciality: specialitiesReducer,
	teacher: teacherReducer,
	fragment: fragmentReducer
})
