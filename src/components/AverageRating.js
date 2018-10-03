import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import FiveStars from './FiveStars'

function styles(theme) {
  return {
    root: {
      margin: theme.spacing.unit * 2
    },
    stars: {
      float: 'right',
      paddingTop: 10
    }
  }
}

function AverageRating({ classes, average }) {
  return (
    <Card className={classes.root}>
      <CardContent>
        <FiveStars rating={average} className={classes.stars} />
        <Typography className={classes.title} color="textSecondary">
          Average rating
        </Typography>
        <Typography variant="title">{average}</Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(AverageRating)
