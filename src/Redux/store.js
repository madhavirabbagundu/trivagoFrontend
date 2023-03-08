import { legacy_createStore as createStore, applyMiddleware, compose ,combineReducers } from "redux";
import thunk from "redux-thunk";
import { Alldatareducers }from './allData/Reducer'
import { AllCitiesreducers } from './CarouselData/Reducer'

const rootReducer=combineReducers({
    AllData:Alldatareducers,
    CityandCountry:AllCitiesreducers
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store =createStore(rootReducer,applyMiddleware(thunk))