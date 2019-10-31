// import axios from 'axios';

const GET_SWAPI_HEROES_PENDING = "GET_SWAPI_HEROES_PENDING";
const GET_SWAPI_HEROES_SUCCESS = "GET_SWAPI_HEROES_SUCCESS";
const GET_SWAPI_HEROES_REJECTED = "GET_SWAPI_HEROES_REJECTED";


const API_URL = `https://swapi.co/api/people/`;

function getHeroesSuccess(data) {
    return {
        type: GET_SWAPI_HEROES_SUCCESS,
        data
    }
}

function caseRequest(dispatch, value) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", API_URL);
        xhr.onload = () => xhr.status === 200 ? res(xhr.response) : console.log('ERROR');
        xhr.onerror = () => rej(new Error('Bad Request'))
        xhr.send();
    })

    // dispatch({ type: GET_SWAPI_HEROES_PENDING });
    //
    // axios.get(API_URL)
    //     .then((response) => {
    //         response = response.data.results;
    //         response.length = value;
    //         dispatch(getHeroesSuccess(response));
    //     })
    //     .catch((error) => {
    //         dispatch({ type: GET_SWAPI_HEROES_REJECTED, data: error});
    //         console.log(error);
    //     });
}

function getSwapiHeroes(e) {

    return function(dispatch) {
        const value = +e.target.innerText;

        switch (value) {
            case 1:
                caseRequest(dispatch, value)
                    .then((response) => {
                        response = JSON.parse(response).results;
                        response.length = value;
                        dispatch(getHeroesSuccess(response));
                    })
                    .catch((error) => {
                        dispatch({ type: GET_SWAPI_HEROES_REJECTED, data: error});
                        console.log(error);
                    });
                break;
            case 2:
                caseRequest(dispatch, value)
                    .then((response) => {
                        response = JSON.parse(response).results;
                        response.length = value;
                        dispatch(getHeroesSuccess(response));
                    })
                    .catch((error) => {
                        dispatch({ type: GET_SWAPI_HEROES_REJECTED, data: error});
                        console.log(error);
                    });
                break;
            case 3:
                caseRequest(dispatch, value)
                    .then((response) => {
                        response = JSON.parse(response).results;
                        response.length = value;
                        dispatch(getHeroesSuccess(response));
                    })
                    .catch((error) => {
                        dispatch({ type: GET_SWAPI_HEROES_REJECTED, data: error});
                        console.log(error);
                    });
                break;
            case 4:
                caseRequest(dispatch, value)
                    .then((response) => {
                        response = JSON.parse(response).results;
                        response.length = value;
                        dispatch(getHeroesSuccess(response));
                    })
                    .catch((error) => {
                        dispatch({ type: GET_SWAPI_HEROES_REJECTED, data: error});
                        console.log(error);
                    });
                break;
            case 5:
                caseRequest(dispatch, value)
                    .then((response) => {
                        response = JSON.parse(response).results;
                        response.length = value;
                        dispatch(getHeroesSuccess(response));
                    })
                    .catch((error) => {
                        dispatch({ type: GET_SWAPI_HEROES_REJECTED, data: error});
                        console.log(error);
                    });
                break;
            default:
                console.log('error')
        }

    }
}

export {
    GET_SWAPI_HEROES_PENDING,
    GET_SWAPI_HEROES_REJECTED,
    GET_SWAPI_HEROES_SUCCESS,
    getSwapiHeroes
}
