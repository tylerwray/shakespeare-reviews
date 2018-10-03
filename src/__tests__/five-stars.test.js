import React from 'react'

import { render, cleanup } from 'react-testing-library'

import FiveStars from '../components/FiveStars'

afterEach(cleanup)

test('it should render 5 stars', () => {
  const { getAllByTestId } = render(<FiveStars rating={0} />)

  const stars = getAllByTestId('star')

  expect(stars.length).toBe(5)
})

test('it should render the correct number of filled stars', () => {
  const table = [
    {
      rating: 3,
      filledStars: 3
    },
    {
      rating: 3.99,
      filledStars: 3
    },
    {
      rating: 1.09,
      filledStars: 1
    },
    {
      rating: 2.09,
      filledStars: 2
    },
    {
      rating: 5,
      filledStars: 5
    }
  ]

  table.forEach(test => {
    const { getAllByTestId } = render(<FiveStars rating={test.rating} />)

    const filledStars = getAllByTestId('filled-star')

    expect(filledStars.length).toBe(test.filledStars)

    cleanup()
  })
})

test('it should fill all the half stars properly', () => {
  const table = [
    {
      rating: 3.5,
      halfStarIndex: 3
    },
    {
      rating: 3.99,
      halfStarIndex: 3
    },
    {
      rating: 1.89,
      halfStarIndex: 1
    },
    {
      rating: 2.49,
      halfStarIndex: 2
    },
    {
      rating: 0.49,
      halfStarIndex: 0
    }
  ]

  table.forEach(test => {
    const { getAllByTestId } = render(<FiveStars rating={test.rating} />)

    const halfStars = getAllByTestId('half-star')

    expect(halfStars.length).toBe(1)

    cleanup()
  })
})

test('it should show no half stars for a 0 rating', () => {
  const rating = 0
  const { getAllByTestId } = render(<FiveStars rating={rating} />)

  const stars = getAllByTestId('star')

  expect(stars.length).toBe(5)
})

test('it should show all filled stars for a 5 rating', () => {
  const rating = 5
  const { getAllByTestId } = render(<FiveStars rating={rating} />)

  const filledStars = getAllByTestId('filled-star')

  expect(filledStars.length).toBe(5)
})
