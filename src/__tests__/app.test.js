import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup, waitForElement, wait } from 'react-testing-library'

import mockAllReviews from './all-reviews.json'
import singleReview from './single-review.json'

import { getAllReviews, getSingleReview } from '../services'
import { averageRating } from '../helpers'

import App from '../App'

jest.mock('../services')
jest.mock('../helpers')

const average = '3.2'

const allReviews = mockAllReviews.data.map(x => ({
  ...x,
  body: null
}))

beforeAll(() => {
  getAllReviews.mockReturnValue(Promise.resolve(allReviews))
  getSingleReview.mockReturnValue(Promise.resolve(singleReview.data))
  averageRating.mockReturnValue(average)
})

afterEach(cleanup)

it('should render the average rating card', async () => {
  const { getByText } = render(<App />)

  expect(getByText('Average rating')).toBeTruthy()

  const ratings = allReviews.map(x => x.rating)

  await waitForElement(() => getByText(average))

  expect(averageRating).toHaveBeenCalledWith(ratings)
})

it('should render the ratings graph card', () => {
  const { getByText } = render(<App />)

  expect(getByText('Recent Ratings')).toBeTruthy()
})

it('should render the reviews list card', () => {
  const { getByText } = render(<App />)

  expect(getByText('Reviews')).toBeTruthy()
})

it('should fetch the reviews on render', () => {
  render(<App />)

  expect(getAllReviews).toHaveBeenCalled()
})

it('should render a list of each review', async () => {
  const { getByTestId, getAllByTestId } = render(<App />)

  await waitForElement(() => getByTestId('review'))

  expect(getAllByTestId('review').length).toBe(allReviews.length)
})

it('should render the body of the review after it fetches it', async () => {
  const { queryByTestId, getAllByTestId } = render(<App />)

  await wait(() => {
    expect(queryByTestId('loading-body')).not.toBeInTheDocument()
  })

  expect(getAllByTestId('review-body').length).toBe(allReviews.length)
})
