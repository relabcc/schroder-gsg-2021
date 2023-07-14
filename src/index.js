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

const mount = () => {
  setTimeout(() => {
    document.querySelectorAll(".gsg2021-tw-root").forEach((el, index) => {
      if (index > 2) return;
      ReactDOM.render(
        <ThemeProvider>
          <MediaProvider>
            <DataProvider>
              <HomePage section={1 + index} />
            </DataProvider>
          </MediaProvider>
        </ThemeProvider>,
        el
      );
    });
  });
};

if (process.env.NODE_ENV === "development") {
  setTimeout(() => {
    mount();
  }, 1000);

  // const attachObserver = (element) => {
  //   if (element.parentElement && element.parentElement !== document.body) {
  //     const callback = (mutationList, observer) => {
  //       for (const mutation of mutationList) {
  //         console.log(mutation);
  //         if (mutation.type === "childList") {
  //           if (
  //             Array.from(mutation.addedNodes).some((node) =>
  //               node.innerHTML.includes("gsg2021-tw-root")
  //             )
  //           ) {
  //             console.log("container added");
  //             mount();
  //           }
  //         }
  //       }
  //     };
  //     // Create an observer instance linked to the callback function
  //     const observer = new MutationObserver(callback);
  //     const config = { childList: true };

  //     // Start observing the target node for configured mutations
  //     observer.observe(element.parentElement, config);
  //     attachObserver(element.parentElement);
  //   }
  // };
  // attachObserver(container);
} else {
  mount();
}
