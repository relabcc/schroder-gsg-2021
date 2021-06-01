import React from 'react'
import { Provider } from 'use-http';

const BASE_URL = 'https://us-central1-re-drive-75970.cloudfunctions.net/app/schrodersGCI'

// prices/:name
// dividends/:name
// allocation

export default ({ children, options }) => (
  <Provider url={BASE_URL} options={options}>
    {children}
  </Provider>
)
