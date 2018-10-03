import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts'

function styles(theme) {
  return {
    root: {
      margin: theme.spacing.unit * 2
    }
  }
}

function RatingsOverTime({ classes, reviews }) {
  const displayReviews = reviews.slice(0, 10).reverse()

  const data = displayReviews.map(r => {
    const publishDate = new Date(r.publish_date)

    return {
      date: `${publishDate.getMonth() + 1}/${publishDate.getDate()}`,
      rating: r.rating
    }
  })

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary">Recent Ratings</Typography>
        <AreaChart width={500} height={250} data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="rating"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(RatingsOverTime)
