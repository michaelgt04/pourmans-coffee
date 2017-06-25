import Root from 'Root';
import { configureStore } from 'store/configureStore';
import { browserHistory } from 'react-router';
// import { syncHistoryWithStore, push } from 'react-router-redux';

let mountReactAppAt = (url, callback = function(){}) => {
  let rootDiv = document.createElement('div');
  rootDiv.id = 'react-app';
  callback(rootDiv);
  document.body.appendChild(rootDiv);

  let store = configureStore()
  store.dispatch(push(url));

  let history = syncHistoryWithStore(browserHistory, store)


  return mount(
    <Root store={store}
      history={history}
    />
  )
}

export default mountReactAppAt;
