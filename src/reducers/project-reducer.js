import { FETCH_PROJECTS } from '../actions/index';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_PROJECTS:
        let payload = action.payload.data.filter( repo => repo.builds.length >= 1 )
        // Wrap builds in packages of 16 for pagination.
        let bundled = payload.reduce((accumulator, _, index) => {
            if (index % 4 === 0) {
                return accumulator.concat([payload.slice(index, index + 4)])
            } else {
                return accumulator
            }
        }, [])
        return Object.assign({}, state, bundled);
    }
    return state;
}