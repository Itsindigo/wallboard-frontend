import { combineReducers } from 'redux';
import ProjectsReducer from './project-reducer';

const rootReducer = combineReducers({
  projects: ProjectsReducer
});

export default rootReducer;
