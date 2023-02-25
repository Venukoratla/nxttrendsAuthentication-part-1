// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isWrong: false, msg: ''}

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({isWrong: true, msg: data.error_msg})
    }
  }

  render() {
    const {isWrong, msg} = this.state
    return (
      <div className="container">
        <div className="login-form">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="image"
            />
          </div>
          <form className="login" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
            <label htmlFor="user">USERNAME</label>
            <input
              id="user"
              type="text"
              placeholder="Username"
              onChange={this.changeUsername}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.changePassword}
            />
            <button type="submit">Login</button>
            {isWrong && <p>*{msg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
