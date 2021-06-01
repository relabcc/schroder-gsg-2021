const KEY = 'TW_2020_GCI_Scrolles'
window.gaScolledIn = (label) => {
  if (window.gtag) {
    window[KEY] = window[KEY]  || {}
    if (!window[KEY][label]) {
      window['TW_2020_GCI_Scrolles'][label] = true
      window.gtag('event', 'click', {
        'event_category': 'button',
        'event_label': 'TW_2020_GCI_Scrolled_' + label
      });
    }
  }
}

window.gaTrackClick = (label) => {
  if (window.gtag) {
    window.gtag('event', 'click', {
      'event_category': 'button',
      'event_label': 'TW_2020_GCI_' + label
    });
  }
}
