import {createGlobalStyle} from 'styled-components'
import {lighten} from 'polished'
import {primary, primaryDark, neutral} from '../../../general/theme'

export const CodeStyles = createGlobalStyle`
  .markdown {
    pre {
      background-color: ${primaryDark};
      margin: 30px 10px;
      padding: 10px;
      overflow: auto;
      max-height: 500px;
      padding-bottom: 0;

      &::-webkit-scrollbar-track {
        background-color: ${primary};
      }
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${lighten(0.2, primaryDark)};
        opacity: 0.6;
        border-radius: 5px;
      }

      &::-webkit-scrollbar-corner {
        background-color: ${primary};
      }

      code {
        /* Prevent the first line from being offset */
        margin-left: 0;
        padding-left: 0;
        border-left: 0;
        
        /* Inject text specifying the current language being highlighted */
        /* This text is based on the name of the class applied to the ::after element */
        &::after {
          content: attr(class);
          display: block;
          text-align: right;
          font-size: smaller;
          margin-top: 30px;
        }
      }
    }

    code {
      background-color: ${primaryDark};
      padding: 4px;
      margin: 2px;
      font-size: 0.7em;

      & {
        line-height: 0.7em;
      }
    }
  }
`
