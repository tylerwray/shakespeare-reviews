import React from 'react'

import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Logo from './Logo'

function styles(theme) {
  return {
    title: {
      color: theme.palette.common.white
    },
    logo: {
      marginRight: theme.spacing.unit
    }
  }
}

function Layout({ classes, children }) {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Logo className={classes.logo} />
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
