import {createGlobalStyle} from 'styled-components'
import {lighten, darken} from 'polished'

import {primary, neutral} from '../../../general/theme'

export const TableStyles = createGlobalStyle`
  .markdown {
    & table {
      display: block;
      width: 100%;
      overflow: auto;
      word-break: keep-all;
      border-collapse: collapse;

      & hr {
        box-sizing: content-box;
        overflow: hidden;
        background: transparent;
        border: 0;
        border-bottom: 1px solid ${neutral};

        height: 4px;
        padding: 0;
        margin: 16px 0;

        &:before,
        &:after {
          display: table;
          content: ' ';
        }

        &:after {
          clear: both;
        }
      }

      & hr {
        box-sizing: content-box;
        height: 0;
      }

      & th,
      & td {
        padding: 6px 13px;
        border: 1px solid ${lighten(0.1, primary)};
      }

      & th {
        font-weight: bold;
        text-align: center;
        background-color: ${darken(0.02, primary)};
      }

      & tr {
        background-color: ${primary};

        &:nth-child(2n) {
          background-color: ${darken(0.02, primary)};
        }
      }
    }
  }
`
