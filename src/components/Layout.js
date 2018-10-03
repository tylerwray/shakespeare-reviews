import React from 'react'

import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function styles(theme) {
  return {
    title: {
      color: theme.palette.common.white
    }
  }
}

function Layout({ classes, children }) {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography className={classes.title} variant="headline">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </React.Fragment>
  )
}

export default withStyles(styles)(Layout)
