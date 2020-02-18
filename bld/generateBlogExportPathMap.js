const fs = require('fs-extra')
const path = require('path')

const rootProjPath = path.join(__dirname, '..')

/**
 * Generate a Next JS export path map.
 *
 * See: https://github.com/zeit/next.js/#static-html-export
 *
 * This map tells Next which static HTML pages it should
 * generate for the dynamically routed pages which I have
 * defined.
 *
 * e.g. One of the dynamic routes that I have defined
 * in the pages directory is `pages/blog/code/[pid].js`
 * But that alone doesn't tell next (at build time) which
 * values are valid for `[pid]`.  So this function generates
 * a map with all possible values of PID.  That takes the form:
 *
 * ```
 * {
 *   '/blog/code/my-article': {
 *     page: '/glob/code/[pid]',
 *     query: {pid: 'my-article'}
 *   }
 * }
 * ```
 *
 * This tells Next:
 *   - The path in the browser of this page
 *   - The JS component file in the `/pages` directory that should
 *     be used to generate it
 *   - The query object that should be passed to the component
 *     to allow it to generate the correct page
 */
module.exports = function generateBlogExportPathMap() {
  const codePostMaps = generatePathMaps({
    postIds: [
      ...getMdFilenamesWithExt('content/posts'),
      ...getMdFilenamesWithExt('content/posts/git'),
      ...getMdFilenamesWithExt('content/posts/ios'),
      ...getMdFilenamesWithExt('content/posts/security'),
    ],
    browserPath: '/blog/code',
    pagePath: '/blog/code/[pid]',
  })

  const recipeMap = generateRecipePathMaps()

  return {
    ...codePostMaps,
    ...recipeMap,
  }
}

/**
 * Given an array of blog post ids, generate a single object that
 * acts as a Next path map for each of the ids.
 * @param {string[]} postIds The blog ids to create path maps for
 * @param {string} browserPath The URL in the browser of the parent of
 * this page
 * @param {string} pagePath The path within pages/ to the component
 * that will render this page
 */
function generatePathMaps({postIds, browserPath, pagePath}) {
  return postIds
    .map(id => ({
      [`${browserPath}/${id}`]: {
        page: pagePath,
        query: {pid: id},
      },
    }))
    .reduce((accum, mapEntry) => {
      return {...accum, ...mapEntry}
    }, {})
}

/**
 * Get the filenames (without extension) of every markdown file
 * in a particular directory
 * @param {string} relativePath The path from the project root to
 * the directory to be read
 * @returns {string[]} An array of filenames (w/o extension)
 */
function getMdFilenamesWithExt(relativePath) {
  const pathToDir = path.join(rootProjPath, relativePath)
  return fs
    .readdirSync(pathToDir)
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.split('.')[0])
}

function generateRecipePathMaps() {
  const meals = ['breakfast', 'dinner', 'sides']

  // For each meal, create mappings for:
  //   The listing page for this meal e.g. /blog/food/breakfast
  //   Each recipe page for this meal e.g. /blog/food/breakfast/french-toast
  return meals.reduce((accum, mealName) => {
    const mapToListingPage = {
      [`/blog/food/${mealName}`]: {
        page: '/blog/food/[meal]',
        query: {meal: mealName},
      },
    }

    // Note that because I'm using the filenames to get the IDs here,
    // each file name must match the id field within the file.  The id field
    // is used to generate the links, whereas the filename is used here
    // to generate the proper static HTML pages
    const recipePostIds = getMdFilenamesWithExt(
      `content/recipes/${mealName}`,
    ).map(mapRecipeFilleNameToId)

    const mapToEachMealRecipe = generatePathMaps({
      postIds: recipePostIds,
      browserPath: `/blog/food/${mealName}`,
      pagePath: '/blog/food/[meal]/[recipe]',
    })

    return {
      ...accum,
      ...mapToListingPage,
      ...mapToEachMealRecipe,
    }
  }, {})

  /**
   * The recipe files are all names 'recipe-french-toast' and the like.
   * This function will remove the word 'recipe' and just make it
   * 'french-toast'
   */
  function mapRecipeFilleNameToId(recipeId) {
    let parts = recipeId.split('-')
    parts.shift() // Remove first item from array
    return parts.join('-')
  }
}
