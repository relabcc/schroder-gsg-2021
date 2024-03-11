import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// import "proxy-polyfill";
// import "abortcontroller-polyfill";

import React from "react";
import ReactDOM from "react-dom";

import ThemeProvider from "./components/ThemeProvider";

import MediaProvider from "./contexts/mediaQuery/MediaProvider";
import DataProvider from "./contexts/data/DataProvider";
import HomePage from "./containers/HomePage";

const key = "gsg2021-tw-root";

let mount;

const attachObserver = (element) => {
  if (element.parentElement && element.parentElement !== document.body) {
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        // console.log(mutation);
        if (mutation.type === "childList") {
          const found = Array.from(mutation.addedNodes).find((node) =>
            node.innerHTML.includes(key)
          );
          if (found) {
            // console.log("container added");
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

mount = (init) => {
  const render = (el, index) => {
    ReactDOM.render(
      <ThemeProvider>
        <MediaProvider>
          <DataProvider>
            <HomePage section={1 + index} />
          </DataProvider>
        </MediaProvider>
      </ThemeProvider>,
      el,
      () => {
        if (index === 0 && init) {
          attachObserver(el, render);
        }
      }
    );
  };
  setTimeout(() => {
    document.querySelectorAll(`.${key}`).forEach((el, index) => {
      if (index >= 3) return;
      render(el, index);
    });
  });
};

if (process.env.NODE_ENV === "development") {
  setTimeout(() => {
    mount(true);
  }, 1000);
} else {
  mount(true);
}
