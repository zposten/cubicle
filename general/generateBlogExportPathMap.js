const fs = require('fs-extra')
const path = require('path')

module.exports = function generateBlogExportPathMap() {
  const codePostIds = getMdFilenamesWithExt('../content/posts')
  const codePostMaps = generatePathMaps(
    codePostIds,
    '/blog/code',
    '/blog/code/[pid]',
  )

  const foodMap = ['breakfast', 'dinner', 'sides'].reduce((accum, mealName) => {
    const ids = getMdFilenamesWithExt(`../content/recipes/${mealName}`)
    const mapToEachMealRecipe = generatePathMaps(
      ids,
      `/blog/food/${mealName}`,
      '/blog/food/[meal]/[recipe]',
    )

    const mapToListingPage = {
      [`/blog/food/${mealName}`]: {
        page: '/blog/food/[meal]',
        query: {meal: mealName},
      },
    }

    return {
      ...accum,
      ...mapToEachMealRecipe,
      ...mapToListingPage,
    }
  }, {})

  return {
    ...codePostMaps,
    ...foodMap,
  }
}

/**
 * Get the filenames (without extension) of every markdown file
 * in a particular directory
 * @param {string} relativePath The path from this file to
 * the directory to be read
 * @returns {string[]} An array of filenames (w/o extension)
 */
function getMdFilenamesWithExt(relativePath) {
  const pathToDir = path.join(__dirname, relativePath)
  return fs
    .readdirSync(pathToDir)
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.split('.')[0])
}

/**
 * Given an array of blog post ids, generate a single object that
 * acts as a Next path map for each of the ids.
 * @param {*} postIds The blog ids to create path maps for
 * @param {*} browserPath The URL in the browser of the parent of
 * this page
 * @param {*} pagePath The path within pages/ to the component
 * that will render this page
 */
function generatePathMaps(postIds, browserPath, pagePath) {
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
