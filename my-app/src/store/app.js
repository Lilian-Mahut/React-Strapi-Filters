import { combineReducers } from "redux"

const initialState = {
	isAppInitialized: false
}

const state = {
    isAppInitialized: (state = initialState.isAppInitialized, action) => {
        switch (action.type) {
            case "SET_APP_INITIALIZED":
                return action.payload
            case "CLEAR_APP_INITIALIZED":
                return false
            default:
                return state
        }
    }
}

const appReducer = combineReducers(state)

export default appReducer
