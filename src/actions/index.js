import axios from 'axios';

const FARM_API_URL = `https://utilities.gi4nt.com/builds/api/tv/`;

export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export function fetchProjects(city) {
    // get API data
    let request = axios.get(FARM_API_URL, { headers: { 
        'Content-Type': 'application/json'
     } });

    return {
        type: FETCH_PROJECTS,
        payload: request
    }
}