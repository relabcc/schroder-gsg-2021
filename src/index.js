import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "proxy-polyfill";
import "abortcontroller-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import ThemeProvider from "./components/ThemeProvider";

import MediaProvider from "./contexts/mediaQuery/MediaProvider";
import DataProvider from "./contexts/data/DataProvider";
import App from "./App";

const getContianer = () => {
  const target = document.getElementById("gsg2021-tw-root");
  window.__video = target.querySelector("[data-bynder-widget]");
  // window.__btnBackToTop = target.querySelector('#backToTop')
  // window.__tabButtons = Array.from(target.querySelectorAll('.btn-carousel'))

  target.style.padding = "0";
  return target;
};

setTimeout(() => {
  ReactDOM.render(
    <ThemeProvider>
      <MediaProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </MediaProvider>
    </ThemeProvider>,
    getContianer()
  );
});
