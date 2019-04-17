import {createGlobalStyle} from 'styled-components'

export const CodeStyles = createGlobalStyle`
  .markdown {
    & code {
      background-color: var(--dark);
      padding: 4px;
      margin: 2px;
    }

    & pre {
      background-color: var(--dark);
      margin: 10px;
      padding: 10px;
      overflow: auto;
      max-height: 500px;

      &::-webkit-scrollbar-track {
        background-color: var(--light);
      }
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #151515;
        opacity: 0.6;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-corner {
        background-color: var(--light);
      }

      & code[class] {
        &:after {
          content: attr(class);
          display: block;
          text-align: right;
          font-size: smaller;
          padding-top: 5px;
        }
      }
    }
  }
`
