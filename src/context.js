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
            case 'FETCHING_CITY': {
                return {
                    ...state,
                    description: action.description,
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
        title: '',
        location: '',
        fulltime: '',
        loading: true,
    })

    function fetchingFulltimesJobsData() {
        axios
          .get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json")
          .then(respose => {
            dispatch({ type: 'FETCHING_DATA', playload: respose.data } )    
          })
          .catch(error => {
            dispatch({type : "FETCH_FAILED" })
          })
    }
    useEffect(() => {
    fetchingFulltimesJobsData()
    }, [])

    function handleHeaderSearch() {
        let API = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?"
        axios
          .get(API + `title=${location}`)
          .then(response => {
            dispatch({ type: 'FETCHING_CITY', playloads: response.data, location: location})
          })
          .catch(error => {
            dispatch({type : "FETCH_FAILED" })
          })
    }

    useEffect(() => {
        handleHeaderSearch();
    }, [state.description])

    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}


// useReducer(function, initialState)


export {GlobalContext ,ContextProvider}