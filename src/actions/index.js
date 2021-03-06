import axios from 'axios';

const FARM_API_URL = `https://utilities.gi4nt.com/builds/api/tv/`;

export const FETCH_PROJECTS = 'FETCH_PROJECTS';

export async function fetchProjects(city) {
    let request = await axios.get(FARM_API_URL, {
        headers: { 
            'Content-Type': 'application/json'
        }
    });

    return {
        type: FETCH_PROJECTS,
        payload: request
    }
}