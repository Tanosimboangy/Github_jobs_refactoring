import React, { useEffect, useReducer } from 'react'
const GlobalContext = React.createContext();
import axios from "axios";


function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'FETCHING_DATA': {
                return {
                    ...state,
                    loading: false,
                    data: action.playload,
                }
            }
            case 'FETCHING_DESCRIPTION': {
                return {
                    ...state,
                    data: action.playloads,
                }
            }
            case 'FETCHING_FULLTIMEJOBS': {
                return {
                    ...state,
                    data: action.fulltimejobs,
                }
            }
            case 'FETCHING_JOBS_BY_LOCATION': {
                return {
                    ...state,
                    data: action.jobLocation,
                }
            }
            case 'FETCHING_JOBS_BY_SPECIFIC_LOCATION': {
                return {
                    ...state,
                    data: action.specifiPlace,
                }
            }
            case 'FETCH_FAILED' : return {
                ...state, 
                error : "You can try again your fetch!",
              }
            default: {
                console.error('No actions defined', action.type);
                break;
            }
        }
        return state;
    },  {
        data: [ ],
        loading: true,
        description: '',
        location: '',
        full_time: '',
        specificlocation: ''
    })

    function fetchingData() {
        axios
          .get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json")
          .then(res => {
            dispatch({ type: 'FETCHING_DATA', playload: res.data } )    
          })
          .catch(error => {
            dispatch({type : "FETCH_FAILED" })
          })
    }
    useEffect(() => {
        fetchingData()
    }, [])

    function handleSearchHeader(details) {
        const API_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${details}`;
        axios
            .get(API_URL)
            .then(response => {
                dispatch({ type: 'FETCHING_DESCRIPTION', playloads: response.data, description: details})
            })
            .catch(error => {
                dispatch({type : "FETCH_FAILED" })
            })
    }
    useEffect(() => {
        handleSearchHeader();
    }, [ state.details])

    function handlefulltimejobs(fullTimeJobs) {
        const API_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?full_time=true`;
        axios
            .get(API_URL)
            .then(response => {
                dispatch({ type: 'FETCHING_FULLTIMEJOBS', fulltimejobs: response.data, full_time: fullTimeJobs})
            })
            .catch(error => {
                dispatch({type : "FETCH_FAILED" })
            })
    }
    useEffect(() => {
        handlefulltimejobs();
    }, [ state.fullTimeJobs])

    function handleLocation(locationjob) {
        const API_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${locationjob}`;
        axios
            .get(API_URL)
            .then(res => {
                dispatch({ type: 'FETCHING_JOBS_BY_LOCATION', jobLocation: res.data, location: locationjob})
            })
            .catch(error => {
                dispatch({type : "FETCH_FAILED" })
            })
    }
    useEffect(() => {
        handleLocation();
    }, [state.locationjob])

    function handleSpecificLocation(specificLocation) {
        const API_URL_LOCATION = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?location=${specificLocation}`;
        axios
            .get(API_URL_LOCATION)
            .then(res => {
                dispatch({ type: 'FETCHING_JOBS_BY_SPECIFIC_LOCATION', specifiPlace: res.data, specificlocation: specificLocation})
            })
            .catch(error => {
                dispatch({type : "FETCH_FAILED" })
            })
    }
    useEffect(() => {
        handleSpecificLocation();
    }, [state.specificLocation])
        
        return (
            <GlobalContext.Provider 
            value={{
                state, 
                dispatch, 
                handleSearchHeader,
                handlefulltimejobs,
                handleLocation,
                handleSpecificLocation,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext ,ContextProvider }
