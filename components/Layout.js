import {Header} from './Header'

export const Layout = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
)