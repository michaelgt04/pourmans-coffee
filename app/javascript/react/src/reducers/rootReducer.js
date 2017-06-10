import { combineReducers } from 'redux';
import { GifsReducer } from './gifs';
import { EventsReducer } from './events';
import { routerReducer as routing } from 'react-router-redux';


const rootReducer = combineReducers({
  routing,
  puppies: GifsReducer,
  events: EventsReducer
});

export default rootReducer;
