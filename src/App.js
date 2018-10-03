import React from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'

import AverageRating from './components/AverageRating'
import RatingsOverTime from './components/RatingsOverTime'
import Reviews from './components/Reviews'

import { getAllReviews, getSingleReview } from './services'
import { averageRating } from './helpers'
import theme from './theme'
import Layout from './components/Layout'

class App extends React.Component {
  state = {
    reviews: []
  }

  async componentDidMount() {
    const bodyNull = await getAllReviews()

    this.setState({
      reviews: bodyNull
    })

    const reviews = Promise.all(
      bodyNull.map(async review => {
        const { body } = await getSingleReview(review.id)

        return {
          ...review,
          body
        }
      })
    )

    this.setState({
      reviews: await reviews
    })
  }

  render() {
    const { reviews } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <Layout>
          <AverageRating
            average={
              reviews.length && averageRating(reviews.map(x => x.rating))
            }
          />
          <RatingsOverTime reviews={reviews} />
          <Reviews reviews={reviews} />
        </Layout>
      </MuiThemeProvider>
    )
  }
}

export default App
