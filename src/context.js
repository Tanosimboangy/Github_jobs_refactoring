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
        
        return (
            <GlobalContext.Provider 
            value={{
                state, 
                dispatch, 
                handleSearchHeader
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext ,ContextProvider }



// const API_URL = `https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${fulltime}`;