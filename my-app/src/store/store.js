import { createStore, applyMiddleware } from "redux"

import rootReducer from "./root"

export default () => {
	return createStore(rootReducer, applyMiddleware(loggerMiddleware))
}
