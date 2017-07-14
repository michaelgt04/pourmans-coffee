import { combineReducers } from 'redux';
import { GifsReducer } from './gifs';
import { EventsReducer } from './events';
import { AboutReducer } from './about';
import { ProductsReducer } from './products'
import { InstaFeedReducer } from './instaFeed';
import { AnchorReducer } from './anchors';
import { routerReducer as routing } from 'react-router-redux';


const rootReducer = combineReducers({
  routing,
  puppies: GifsReducer,
  events: EventsReducer,
  about: AboutReducer,
  products: ProductsReducer,
  instagram: InstaFeedReducer,
  selectedAnchorId: AnchorReducer
});

export default rootReducer;
