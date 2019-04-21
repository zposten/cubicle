import {createGlobalStyle} from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {primary, secondary} from '../../../general/theme'

export const ListStyles = createGlobalStyle`
  .markdown {
    & ul,
    & ol {
      margin-top: 0;
      margin-bottom: 0;
      padding-inline-start: 0;

      ${breakpoint('sm')`
        padding: 0 0 0 2em;
      `}
    }

    & ul {
      & li {
        list-style-type: disc;
        margin-bottom: 20px;
      }

      & ul li {
        list-style-type: circle;
      }
    }

    /* This entire block is to style the ordered list numbers */
    & ol {
      list-style: none;
      counter-reset: item;

      & > li {
        counter-increment: item;
        margin-bottom: 5px;
        width: 100%;
        display: grid;
        grid-template-columns: 40px 1fr;
        grid-template-areas:
          'number primary'
          'secondary secondary';
        align-items: start;
        margin-top: 20px;

        &::before {
          grid-area: number;
          margin-right: 10px;
          content: counter(item);
          background: ${secondary};
          color: ${primary};
          border-radius: 50%;
          width: 1.3em;
          text-align: center;
          display: inline-block;
        }

        & > p {
          width: 100%;
          flex-grow: 1;
          grid-area: primary;
          margin-top: 0;
        }

        ul,
        ol {
          grid-area: secondary;
          margin-left: 30px;
          margin-top: 20px;
        }
      }
    }

    & ol ol,
    & ul ol {
      list-style-type: lower-roman;
    }
    & ul ol ol,
    & ul ul ol,
    & ol ul ol,
    & ol ol ol {
      list-style-type: lower-alpha;
    }

    & ul ul,
    & ul ol,
    & ol ol,
    & ol ul {
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 2em;
      padding-inline-start: 40px;
    }

    & li > p {
      margin-top: 16px;
      margin-bottom: 0;
    }

    & p,
    & blockquote,
    & ul,
    & ol,
    & dl,
    & table {
      margin-top: 0;
      margin-bottom: 16px;
    }
  }
`
