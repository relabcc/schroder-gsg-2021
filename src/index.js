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

const mount = () => {
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
};

if (process.env.NODE_ENV === "development") {
  const container = document.getElementById("gsg2021-tw-root");

  const attachObserver = (element) => {
    if (element.parentElement && element.parentElement !== document.body) {
      const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
          // console.log(mutation);
          if (mutation.type === "childList") {
            if (
              Array.from(mutation.addedNodes).some((node) =>
                node.innerHTML.includes("gsg2021-tw-root")
              )
            ) {
              console.log("container added");
              mount();
            }
          }
        }
      };
      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);
      const config = { childList: true };

      // Start observing the target node for configured mutations
      observer.observe(element.parentElement, config);
      attachObserver(element.parentElement);
    }
  };
  attachObserver(container);
} else {
  mount();
}
