import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'proxy-polyfill'
import 'abortcontroller-polyfill'
import smoothscroll from 'smoothscroll-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import find from 'lodash/find'

import ThemeProvider from './components/ThemeProvider'

import MediaProvider from './contexts/mediaQuery/MediaProvider'
import DataProvider from './contexts/data/DataProvider'
import App from './App';

// import './modernizr-custom'
import './gaTracks'

smoothscroll.polyfill();

window.injectCSS = cssLink => {
  const tag = document.createElement('link')
  tag.href = cssLink
  tag.rel = 'stylesheet'
  document.head.appendChild(tag)
}

const getContianer = () => {
  const target = document.getElementById('gci2020-tw-root');
  const found = find(document.querySelectorAll('.jumbotron'), (ele) => ele.contains(target));
  if (found.classList.contains('panel-white')) {
    found.classList.remove('panel-white')
  }
  const container = found || target;
  container.style.padding = '0';
  return container;
};

setTimeout(() => {
  ReactDOM.render(
    <ThemeProvider>
      <MediaProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </MediaProvider>
    </ThemeProvider>
  , getContianer());
})