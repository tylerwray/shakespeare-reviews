import allReviews from './all-reviews.json'

import { averageRating } from '../helpers'

describe('#averageRating', () => {
  it('should return the average rating of all the reviews', () => {
    const allRatings = allReviews.data.map(x => x.rating)
    expect(averageRating(allRatings)).toBe(2.75)
  })

  it('should return the average number of any array of numbers', () => {
    expect(averageRating([1, 2, 3])).toEqual(2)
    expect(averageRating([1, 2, 3, 4])).toEqual(2.5)
    expect(averageRating([1, 2, 3, 4, 5])).toEqual(3)
    expect(averageRating([1, 2, 3, 4, 5, 6])).toEqual(3.5)
    expect(averageRating([1, 2, 3, 4, 5, 6, 7])).toEqual(4)
  })
})
