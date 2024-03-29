import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .VictoryContainer {
    user-select: auto !important;
    pointer-events: auto !important;
    touch-action: auto !important;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
`;
