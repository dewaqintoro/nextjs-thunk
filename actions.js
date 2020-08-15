import * as types from './types'
import axios from 'axios'  
// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  })


export const getCovidsList = () => {
  return (dispatch) => {
    // axios.get('http://localhost:3004/covids') 
    axios.get(`https://api.kawalcorona.com/indonesia/provinsi/`) 


      .then(function (response) {
        console.log("action prov",response.data);
        dispatch({
          type: types.GET_COVIDS_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: types.GET_COVIDS_LIST,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
} 

export const getCovidIndo = () => {
  return (dispatch) => {
    axios.get('https://api.kawalcorona.com/indonesia/') 

      .then(function (response) {
        // console.log("action indo",response);
        dispatch({
          type: types.GET_COVID_INDO,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: types.GET_COVID_INDO,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const getCovidPositif = () => {
  return (dispatch) => {
    axios.get('https://api.kawalcorona.com/positif') 

      .then(function (response) {
        console.log("action positif",response);
        dispatch({
          type: types.GET_COVID_POSITIF,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: types.GET_COVID_POSITIF,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}


export const getCovidSembuh = () => {
  return (dispatch) => {
    axios.get('https://api.kawalcorona.com/sembuh') 

      .then(function (response) {
        // console.log("action positif",response);
        dispatch({
          type: types.GET_COVID_SEMBUH,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: types.GET_COVID_SEMBUH,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
  }, 1000)

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })
