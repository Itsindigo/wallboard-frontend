import { paginate } from '../utils';
import { FETCH_PROJECTS } from '../actions/index';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_PROJECTS:
        let payload = paginate(action.payload.data.filter( repo => repo.builds.length >= 1 ), 8);
        return Object.assign({}, state, payload);
    }
    return state;
}