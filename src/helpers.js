/**
 * Averages all the ratings in the array
 *
 * @param {Array<Number>} ratings
 */
export function averageRating(ratings) {
  const sum = ratings.reduce((sum, rating) => (sum += rating), 0)
  const average = sum / ratings.length

  return Math.round(average * 100) / 100
}
