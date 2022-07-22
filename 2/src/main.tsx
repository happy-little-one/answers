import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from '@emotion/styled'
import App from './app'

const Theme = styled.main`
  /* dark theme  */
  --primary: #297dd7;
  --text: #fff;
  --border: rgb(255 255 255 / 65%);
  --holder: rgb(255 255 255 / 45%);
  --disabled: rgb(255 255 255 / 45%);

  --space-unit: 5px;

  --font-size: 1em;
  --font-family: 'Lato';
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
)
