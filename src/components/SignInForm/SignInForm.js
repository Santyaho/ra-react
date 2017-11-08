import React, { Component } from 'react'
import { Card, CardActions, CardHeader, TextField, CardContent } from 'material-ui'
import Button from 'material-ui/Button'
import withStyles from 'material-ui/styles/withStyles'
import Grid from 'material-ui/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  CardActions: {
    justifyContent: 'flex-end'
  }
})

class SignInForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  handleChange (name) {
    /* we do not want to do bind in render because of every time new function will be created  */
    return function (event) {
      this.setState({
        [name]: event.target.value
      })
    }.bind(this)
  }

  signIn () {
    const { email, password } = this.state

    if (!email || !password) {
      alert('Fill in all the fields')
      return false
    }

    const { signInAPI, push } = this.props

    signInAPI({ email, password })

    this.setState({
      email: '',
      password: ''
    })

    // push('/about')
  }

  render () {
    const { classes } = this.props
    const { email, password } = this.state
    return (
      <form className={classes.container} noValidate autoComplete='off'>
        <Card className={classes.cardStyle}>
          <CardHeader title='Sign In' />
          <CardContent>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <TextField
                  label='Email'
                  className={classes.textField}
                  margin='normal'
                  value={email}
                  fullWidth
                  onChange={this.handleChange('email')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Password'
                  className={classes.textField}
                  margin='normal'
                  value={password}
                  fullWidth
                  onChange={this.handleChange('password')}
                  type='password'
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <Button onClick={this.signIn}>Sign In</Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

export default withStyles(styles)(SignInForm)
