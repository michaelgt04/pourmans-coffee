import { combineReducers } from 'redux';
import { EventsReducer } from '../../consumer/reducers/events';
import { AboutReducer } from '../../consumer/reducers/about';
import { ProductsReducer } from '../../consumer/reducers/products'
import { InstaFeedReducer } from '../../consumer/reducers/instaFeed';
import { AnchorReducer } from '../../consumer/reducers/anchors';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  routing,
  events: EventsReducer,
  about: AboutReducer,
  products: ProductsReducer,
  instagram: InstaFeedReducer,
  selectedAnchorId: AnchorReducer,
  form: formReducer
});

export default rootReducer;
