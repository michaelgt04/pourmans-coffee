import { combineReducers } from 'redux';
import { GifsReducer } from './gifs';
import { EventsReducer } from './events';
import { AboutReducer } from './about';
import { ProductsReducer } from './products'
import { InstaFeedReducer } from './instaFeed';
import { routerReducer as routing } from 'react-router-redux';


const rootReducer = combineReducers({
  routing,
  puppies: GifsReducer,
  events: EventsReducer,
  about: AboutReducer,
  products: ProductsReducer,
  instagram: InstaFeedReducer
});

export default rootReducer;
