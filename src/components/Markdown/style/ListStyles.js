import {createGlobalStyle} from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

import {primary, secondary} from '../../../general/theme'

export const ListStyles = createGlobalStyle`
  .markdown {
    ul {
      margin-left: 32px;
    }

    ul,
    ol {
      margin-top: 0;
      margin-bottom: 16px;
      padding-inline-start: 0;

      ${breakpoint('sm')`
        padding: 0 0 0 1em;
      `}
    }

    ul {
      li {
        list-style-type: disc;
        margin-bottom: 20px;
      }

      ul li {
        list-style-type: circle;
      }
    }

    /* This entire block is to style the ordered list numbers */
    ol {
      list-style: none;
      counter-reset: item;

      > li {
        counter-increment: item;
        margin-bottom: 5px;
        width: 100%;
        margin-top: 15px;
        position: relative;
        padding-left: 2em;

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
          position: absolute;
          top: 0;
          left: 0;
        }

        > p {
          width: 100%;
          flex-grow: 1;
          grid-area: primary;
          margin-top: 0;
        }

        /* Lists nested inside of ordered lists */
        ul,
        ol {
          grid-area: secondary;
          margin-left: 30px;
          margin-top: 20px;

          ${breakpoint('sm')`
            margin-left: 10px;
          `}
        }
      }
    }

    /* Doubly nested ordered lists style */
    ol ol,
    ul ol {
      list-style-type: lower-roman;
    }

    /* Thrice nested ordered lists style */
    ul ol ol,
    ul ul ol,
    ol ul ol,
    ol ol ol {
      list-style-type: lower-alpha;
    }

    /* Lists nested inside of unordered lists */
    ul ul,
    ul ol {
      margin-top: 0;
      margin-bottom: 0;
      padding-inline-start: 40px;
    }

    li > p {
      margin-top: 16px;
      margin-bottom: 0;
    }

    p,
    blockquote,
    table {
      margin-top: 0;
      margin-bottom: 16px;
    }
  }
`
