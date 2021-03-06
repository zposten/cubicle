import {createGlobalStyle} from 'styled-components'

export const InputStyles = createGlobalStyle`
  .markdown {
    & input {
      font: 13px Helvetica, arial, freesans, clean, sans-serif, 'Segoe UI Emoji',
        'Segoe UI Symbol';
      line-height: normal;
      color: inherit;
      margin: 0;
    }

    & input[type='checkbox'] {
      box-sizing: border-box;
      padding: 0;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 5px;
      border: 2px solid #555;
      margin-right: 5px;
    }
    & input[type='checkbox']:checked {
      background: #abd;
    }
    & input[disabled] {
      cursor: default;
    }
  }
`
