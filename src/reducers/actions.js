import axios from 'axios';

const GET_SWAPI_HEROES_PENDING = "GET_SWAPI_HEROES_PENDING";
const GET_SWAPI_HEROES_SUCCESS = "GET_SWAPI_HEROES_SUCCESS";
const GET_SWAPI_HEROES_REJECTED = "GET_SWAPI_HEROES_REJECTED";

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

const API_URL = "https://swapi.co/api/people";

function getHeroesSuccess(data) {
    console.log(data)
    return {
        type: GET_SWAPI_HEROES_SUCCESS,
        data
    }
}

function getSwapiHeroes() {
    return function(dispatch) {
        dispatch({ type: GET_SWAPI_HEROES_PENDING });
        // ETO TO KAK RABOTAET AXIOS VNUTRI https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
        // NAPISAT TOJE SAMOE NE ISPOLZUYA BIBLIOTEKI AXIOS
        axios.get(API_URL)
            .then((response)=>{
               dispatch(getHeroesSuccess(response.data.results));
                console.log(response);
            })
            .catch((error) => {
                // handle error
                dispatch({ type: GET_SWAPI_HEROES_REJECTED, data: error});
                console.log(error);
            })
    }
}

export {
    GET_SWAPI_HEROES_PENDING,
    GET_SWAPI_HEROES_REJECTED,
    GET_SWAPI_HEROES_SUCCESS,
    getSwapiHeroes
}
