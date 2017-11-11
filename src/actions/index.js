const FARM_API_URL = ``;

export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export function fetchProjects(city) {
    // get API data
    let request = [{name: 'dummy project'}];

    return {
        type: FETCH_PROJECTS,
        payload: request
    }
}