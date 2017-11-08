import React, { Component } from 'react'
import {Card, CardActions, CardHeader, TextField} from 'material-ui'
import Button from 'material-ui/Button'
import withStyles from 'material-ui/styles/withStyles'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  menu: {
    width: 200
  },
  cardStyle: {
    height: 192
  }
})

class SignInForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.signIn = this.signIn.bind(this)
  };

  handleChange (name) {
    /* we do not want to do bind in render because of every time new function will be created  */
    return function (event) {
      this.setState({
        [name]: event.target.value
      })
    }.bind(this)
  }

  signIn () {
    const {username, password} = this.state

    if (!username || !password) {
      alert('Fill in all the fields')
      return false
    }

    const {signInAPI, push} = this.props

    signInAPI({username, password})

    this.setState({
      username: '',
      password: ''
    })

    push('/about')
  };

  render () {
    const { classes } = this.props
    const {username, password} = this.state
    return (
      <form className={classes.container} noValidate autoComplete='off'>
        <Card className={classes.cardStyle}>
          <CardHeader
            title='Sign In'
          />
          <TextField
            label='Login'
            className={classes.textField}
            margin='normal'
            value={username}
            onChange={this.handleChange('username')}
          />
          <TextField
            label='Password'
            className={classes.textField}
            margin='normal'
            value={password}
            onChange={this.handleChange('password')}
            type='password'
          />
          <CardActions>
            <Button onClick={this.signIn}>Sign In</Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

export default withStyles(styles)(SignInForm)
