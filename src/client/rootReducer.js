import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Home from './containers/Home/reducer';
//import Contacts from './containers/Contacts/reducer';

const rootReducer = combineReducers({
    Home,
    //Contacts,
    form: formReducer
});
export default rootReducer;