import {sortAndParsePostsByDate} from './sortAndParsePostsByDate'

import iosPosts from './ios'
import gitPosts from './git'
import securityPosts from './security'
import * as csharpIocContainer from './csharp-ioc-container.md'
import * as azureFuncs from './azure-functions-getting-started.md'

const allPosts = [
  ...iosPosts,
  ...gitPosts,
  ...securityPosts,
  csharpIocContainer,
  azureFuncs,
]

export default sortAndParsePostsByDate(allPosts)
