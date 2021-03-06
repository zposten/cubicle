import {createGlobalStyle} from 'styled-components'
import {secondaryDark} from '@/general/theme'

export const OtherMarkdownStyles = createGlobalStyle`
  .markdown {
    * {
      box-sizing: border-box;
    }

    > *:first-child {
      margin-top: 0 !important;
    }

    > *:last-child {
      margin-bottom: 0 !important;
    }

    a:active,
    a:hover {
      outline: 0;
    }
    a:hover,
    a:focus,
    a:active {
      text-decoration: underline;
    }

    b,
    strong {
      font-weight: bold;
    }

    mark {
      background: #ff0;
      color: var(--text);
      font-style: italic;
      font-weight: bold;
    }

    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sup {
      top: -0.5em;
    }
    sub {
      bottom: -0.25em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 25px;
      margin-bottom: 0;
      position: relative;
      font-weight: bold;

      &:first-child {
        margin-top: 0;
      }
    }
    h1 {
      font-weight: 900;
      padding-top: 15px;
      padding-bottom: 10px;
      line-height: 1.2;
      margin-bottom: 20px;
    }
    h2 {
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      line-height: 1.225;
      padding-top: 10px;
      padding-bottom: 5px;

      &:not(:first-child) {
        margin-top: 30px;
      }
    }
    h3 {
      line-height: 1;
      color: ${secondaryDark};


    }
    h1,
    h1 + h3 {
      text-align: center;
      margin-top: -20px;
      margin-bottom: 30px;
    }

    blockquote {
      margin: 0;
      padding: 0 15px;
      color: #7da4d8;
      border-left: 4px solid #7da4d8;
      font-size: 0.8em;
      font-style: italic;
      margin-bottom: 16px;

      > :first-child {
        margin-top: 0;
      }
      > :last-child {
        margin-bottom: 0;
      }
    }

    p {
      margin: 16px 0;
    }
  }
`
