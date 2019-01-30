import {Header} from './Header'

export const Layout = (props: {children: any}) => (
  <div>
    <Header />
    {props.children}
  </div>
)