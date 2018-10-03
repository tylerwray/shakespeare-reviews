import axios from 'axios'

import allReviews from './all-reviews.json'
import singleReview from './single-review.json'

import { getAllReviews, getSingleReview } from '../services'

jest.mock('axios')

describe('#getAllReviews', () => {
  let reviews

  beforeAll(async () => {
    axios.get.mockReturnValue(
      Promise.resolve({
        data: allReviews
      })
    )

    reviews = await getAllReviews()
  })

  it('should make the request to the proper endpoint with the auth token', () => {
    const endpoint = 'http://shakespeare.podium.co/api/reviews'
    const config = {
      headers: {
        Authorization: 'koOheljmQX'
      }
    }

    expect(axios.get).toHaveBeenCalledWith(endpoint, config)
  })

  it('should return the reviews', () => {
    expect(reviews.length).toEqual(allReviews.data.length)
  })

  it('should format each date', () => {
    reviews.forEach(r => {
      expect(r.publish_date_formatted).not.toBe(undefined)
    })
  })

  it('should initialize each body', () => {
    reviews.forEach(r => {
      expect(r.body).toBe(null)
    })
  })
})

describe('#getSingleReview', () => {
  const id = '9793364045824'
  let review

  beforeAll(async () => {
    axios.get.mockReturnValue(
      Promise.resolve({
        data: singleReview
      })
    )

    review = await getSingleReview(id)
  })

  it('should make the request to the proper endpoint with the auth token', () => {
    const endpoint = `http://shakespeare.podium.co/api/reviews/${id}`
    const config = {
      headers: {
        Authorization: 'koOheljmQX'
      }
    }

    expect(axios.get).toHaveBeenCalledWith(endpoint, config)
  })

  it('should return the review', () => {
    expect(review.rating).toEqual(singleReview.data.rating)
    expect(review.publish_date).toEqual(singleReview.data.publish_date)
    expect(review.id).toEqual(singleReview.data.id)
    expect(review.body).toEqual(singleReview.data.body)
    expect(review.author).toEqual(singleReview.data.author)
  })

  it('should format the date', () => {
    expect(review.publish_date_formatted).not.toBe(undefined)
  })
})
