import {breakfast, dinner, sides} from './recipes'
import code from './posts'

export default {
  default: [
    {
      imageFilename: 'code.png',
      title: 'Programming',
      id: 'code',
      description: "Things I've learned while coding away",
    },
    {
      imageFilename: 'ingredients.jpg',
      title: 'Recipes',
      id: 'food',
      description: 'Delicious concoctions that I hav personally vetted',
    },
  ],
  code,
  food: {
    default: [
      {
        imageFilename: 'breakfast.jpg',
        title: 'Breakfast',
        id: 'breakfast',
        description: 'The most important meal of the day',
      },
      {
        imageFilename: 'dinner.jpg',
        title: 'Not Breakfast',
        id: 'dinner',
        description: "The meal that you just can't wait to get home for",
      },
      {
        imageFilename: 'sides2.jpg',
        title: 'Sides',
        id: 'sides',
        description:
          "The meal that's not a meal...unless you really want it to be",
      },
    ],
    breakfast,
    dinner,
    sides,
  },
}
