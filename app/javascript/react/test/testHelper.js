import { mount, shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import mountReactAppAt from './support/mountReactAppAt';
import createResponseFromFixture from './support/createResponseFromFixture';
import { push, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import $ from 'jquery'
import 'jasmine-ajax';


let store, page, wrapper

Object.assign(global, {
  mount,
  shallow,
  jasmineEnzyme,
  React,
  browserHistory,
  syncHistoryWithStore,
  store,
  page,
  push,
  createResponseFromFixture,
  mountReactAppAt,
  wrapper,
  $
});

beforeEach(() => {
  jasmineEnzyme();
  let ajax = jasmine.createSpy('ajax spy')
  $.fn.ajax = ajax
});

afterEach(() => {
  if(global.page) {
    global.page.unmount();
  }
  if(global.store) {
    global.store.dispatch(push('/'));
  }
});

// function to require all modules for a given context
let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

// require all js files except testHelper.js in the test folder
requireAll(require.context('./', true, /^((?!testHelper).)*\.jsx?$/));

// require all js files except main.js in the src folder
requireAll(require.context('../src/', true, /^((?!main).)*\.jsx?$/));

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
