import {sortAndParsePostsByDate} from './sortAndParsePostsByDate'

import iosPosts from './ios'
import gitPosts from './git'
import securityPosts from './security'
import * as csharpIocContainer from './csharp-ioc-container.md'

const allPosts = [
  ...iosPosts,
  ...gitPosts,
  ...securityPosts,
  csharpIocContainer,
]

export default sortAndParsePostsByDate(allPosts)
