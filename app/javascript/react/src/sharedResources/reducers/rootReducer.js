import { combineReducers } from 'redux';
import { EventsReducer } from '../../consumer/reducers/events';
import { AboutReducer } from '../../sharedResources/reducers/about';
import { ProductsReducer } from './products'
import { ProductFormReducer } from './ProductFormReducer';
import { InstaFeedReducer } from '../../consumer/reducers/instaFeed';
import { AnchorReducer } from '../../consumer/reducers/anchors';
import { routerReducer as routing } from 'react-router-redux';
import { EventEditReducer } from '../../admin/reducers/eventEdit';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  routing,
  events: EventsReducer,
  about: AboutReducer,
  products: ProductsReducer,
  instagram: InstaFeedReducer,
  selectedAnchorId: AnchorReducer,
  productForm: ProductFormReducer,
  eventEdit: EventEditReducer,
  form: formReducer
});

export default rootReducer;
