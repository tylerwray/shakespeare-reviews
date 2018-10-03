import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import LinearProgress from '@material-ui/core/LinearProgress'

import FiveStars from './FiveStars'

function styles(theme) {
  return {
    itemRoot: {
      margin: theme.spacing.unit,
      padding: theme.spacing.unit
    },
    fiveStars: {
      float: 'right'
    },
    progressBackground: {
      backgroundColor: theme.palette.primary.extraLight
    },
    progressBar: {
      backgroundColor: theme.palette.secondary.light
    }
  }
}

function Reviews({ classes, reviews }) {
  return (
    <Card>
      <CardContent>
        <Typography>Reviews</Typography>
        {reviews.map(review => (
          <Review key={review.id} review={review} classes={classes} />
        ))}
      </CardContent>
    </Card>
  )
}

function Review({ classes, review }) {
  return (
    <div data-testid="review" className={classes.itemRoot}>
      <FiveStars className={classes.fiveStars} rating={review.rating} />
      <Typography variant="caption">{review.publish_date_formatted}</Typography>
      <Typography gutterBottom variant="subheading">
        {review.author}
      </Typography>
      {review.body === null ? (
        <LinearProgress
          data-testid="loading-body"
          classes={{
            colorPrimary: classes.progressBackground,
            barColorPrimary: classes.progressBar
          }}
        />
      ) : (
        <Typography data-testid="review-body" variant="body2">
          {review.body}
        </Typography>
      )}

      <Divider />
    </div>
  )
}

export default withStyles(styles)(Reviews)
