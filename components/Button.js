import styled, {css} from 'styled-components'
import {rgba} from 'polished'

export const Button = styled.input`
  min-height: 50px;
  background: transparent;
  border: 2px solid ${p => p.theme.colors[p.zach || 'secondary']};
  color: white;
  transition: transform 0.25s ease;
  font-size: 1em;
  outline: none;
  cursor: pointer;

  ${p => ripple(p.theme.colors[p.zach || 'secondary'])}
`
Button.defaultProps = {
  type: 'button',
}

function ripple(rippleColor, rippleOpacity = 0.2) {
  let color = rgba(rippleColor, rippleOpacity)

  return css`
    /* 
     * Taken from: https://codepen.io/zposten/pen/dEGLPJ?editors=1100
     *
     * The ripple is created when we go from an active state
     * back to a hover state
     *
     * (0) hover -> (1) active -> (2) hover
     *                             ^
     *                    Ripple is created here
     *
     * This happens because on the initial hover we create a
     * really small dot of color, but scale that dot (instantly)
     * to be very large.
     *
     * Then when we get into the active state that dot instantly
     * becomes small again (transition set to 0s).  But once the
     * active state is exited and we go back to hover, the dot
     * is animated from very small to very large, creating the ripple!
     */

    background-position: center;
    transition: background 0.7s;

    &:hover {
      /* 
       * Create a really small circular dot of $color inside of a
       * transparent canvas
       */
      background-image: radial-gradient(circle, ${color} 1%, transparent 1%);

      /* 
       * Then make that little dot really big!
       *
       * This appears as a color change on the first hover because it
       * happens instantly, but it appears as a ripple on the second
       * hover because it is animated.  This animation is caused by
       * the "transition: background 0.6s" above.
       */
      background-size: 15000%;
    }

    &:active {
      /* 
       * Make the dot really small again
       *
       * Because the dot is very small, if the button has a hover
       * background color set (outside this mixin), it will only
       * show while the button is active, because when it's not
       * active it is covered with the dot (keeping in mind that
       * the dot is usually translucent).
       */
      background-size: 100%;

      /* Make sure it becomes small instantly, looking like a color change */
      transition: background 0s;
    }

    &:focus:not(:active):not(:hover) {
      background-image: radial-gradient(circle, ${color} 25%, transparent 30%);
      background-repeat: no-repeat;
      animation: ripple-float-start 1s ease-in-out,
        ripple-float 1.5s ease-in-out 1s infinite alternate;

      @keyframes ripple-float-start {
        from {
          background-size: 500%;
        }
        to {
          background-size: 100%;
        }
      }

      @keyframes ripple-float {
        from {
          background-size: 100%;
        }
        to {
          background-size: 150%;
        }
      }
    }

    &[disabled],
    &.disabled {
      background-image: none !important;
    }
  `
}
