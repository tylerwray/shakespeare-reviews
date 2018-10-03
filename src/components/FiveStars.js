import React from 'react'

import { withStyles } from '@material-ui/core'
import ToolTip from '@material-ui/core/Tooltip'
import Star from '@material-ui/icons/Star'
import StarHalf from '@material-ui/icons/StarHalf'
import StarBorder from '@material-ui/icons/StarBorder'

function styles(theme) {
  return {
    star: {
      fill: theme.palette.secondary.main
    }
  }
}

function FiveStars({ classes, rating, ...rest }) {
  return (
    <ToolTip title={rating} placement="top">
      <span {...rest}>
        {[1, 2, 3, 4, 5].map(number => {
          const isFilledStar = Math.floor(rating) >= number
          const isHalfStar = rating < number && rating > number - 1

          let Component = StarBorder
          let testid = 'star'

          if (isFilledStar) {
            Component = Star
            testid = 'filled-star'
          } else if (isHalfStar) {
            Component = StarHalf
            testid = 'half-star'
          }

          return (
            <Component
              data-testid={testid}
              className={classes.star}
              key={number}
            />
          )
        })}
      </span>
    </ToolTip>
  )
}

export default withStyles(styles)(FiveStars)
