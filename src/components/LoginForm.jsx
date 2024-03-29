import React from "react";
import { Link, Navigate } from "react-router-dom";

import Header from "./Header.jsx";
import '../styles/SearchAndLoginForm.css';
import '../styles/OverallStyles.css';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {
        login: '',
        password: ''
      },
      errors: {},
      formValid: false,
      authResult: {
        token: '',
        expire: '',
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.validate();
    this.setState({
        input
    })
  }

  // async пишем, чтобы использовать await fetch внутри handleSubmit
  async handleSubmit(e) {
    e.preventDefault();
    const formValidated = this.validate()
    if (formValidated) {
        console.log(this.state);
        let input = {};
        input['login'] = '';
        input['password'] = '';
        this.setState({input:input});

        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());

        let response = await fetch("https://gateway.scan-interfax.ru/api/v1/account/login",
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                     'Accept': 'application/json'},
            body: `{ "login": "${this.state.input.login}", "password": "${this.state.input.password}" }`
          });

          if (response.ok) {
            let json = await response.json();
            console.log("json after await fetch = ", json);
            
            let result = {};
            result['token'] = json.accessToken;
            result['expire'] = json.expire;
            this.setState({authResult:result});
          
            localStorage.setItem('expire', json.expire);
            localStorage.setItem('token', json.accessToken);
            localStorage.setItem('user', formJson.login);

          } else {
            alert('Ошибка HTTP: ' + response.status);
          }
          
    } else {
        console.log('form validate = ', formValidated)
    }
  }

validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    let isValidLogin = true;
    let isValidPassword = true;

    if (!input['login']) {
        isValidLogin = false;
        errors['login'] = 'Введите логин';
    }

    if (!input['password']) {
        isValidPassword = false;
        errors['password'] = 'Введите пароль';
    }
    
    isValid = isValidLogin && isValidPassword;

    this.setState({
        errors: errors,
        formValid: isValid
    });

    return isValid;

  }

  render() {
    return (
        <React.Fragment>
        <nav>
          <Header />
        </nav>
          <div className="container">
            <header>
              <h2>Авторизация в системе</h2>
              <h3>при успешной авторизации вы перейдете на главную страницу</h3>
            </header>
            <div>
              <form method='post' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='login'>Логин</label>
                    <input
                      type='text'
                      name='login'
                      value={this.state.input.login}
                      onChange={this.handleChange}
                      className='form-control'
                      id='login'
                      required
                    />
                  <div className='text-danger'>{this.state.errors.login}</div>
                </div>
              
                <div className='form-group'>
                  <label htmlFor='password'>Пароль</label>
                  <input
                      type='password'
                      name='password'
                      value={this.state.input.password}
                      onChange={this.handleChange}
                      className='form-control'
                      id='password'
                      required
                    />
                  <div className='text-danger'>{this.state.errors.password}</div>
                </div>
                <input type='submit' disabled={!this.state.formValid} value='Войти' className='btn btn-success' />
              </form>
            </div>
            {!!this.state.authResult.token && (<Navigate to='/' replace={true} />)}
            <Link to="/">Вернуться на главную страницу</Link>
          </div>
        </React.Fragment>
    );
  }
}

export default LoginForm;
