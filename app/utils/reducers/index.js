import { combineReducers } from 'redux';
import contact from './contact';
import lightbox from './lightbox';
import mainMenu from './mainMenu';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

const app = combineReducers({
  contact,
  lightbox,
  mainMenu,
  form,
  routing
});

export default app;
