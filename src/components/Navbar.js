import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  const [mode, setMode] = useState('light');

  const setPrimary = () => {
    if (mode === 'light' || mode === 'danger' || mode === 'warning'){
      setMode('primary')
      document.body.style.backgroundColor = 'blue';
      document.body.style.color = 'white';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  const setDanger = () => {
    if (mode === 'light' || mode === 'primary' || mode === 'warning') {
      setMode('danger');
      document.body.style.backgroundColor = 'red';
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  const setWarning = () => {
    if (mode === 'light' || mode === 'primary' || mode === 'danger') {
      setMode('warning');
      document.body.style.backgroundColor = 'yellow';
      document.body.style.color = 'black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light'?'dark':'dark'} bg-${props.mode === 'light'?'dark':'dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/form1">Form1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
          </ul>
          <div className="theme">
            <div className="btn btn-primary mx-2" onClick={setPrimary}>Primary</div>
            <div className="btn btn-danger mx-2" onClick={setDanger}>Danger</div>
            <div className="btn btn-warning mx-2" onClick={setWarning}>Warning</div>
          </div>
          <div className={`form-check form-switch mx-3 text-${props.mode === 'dark' ? 'light' : 'light'}`}>
            <input className="form-check-input" onClick={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )


  //CHECK THIS CHANGE VALUE OF title AND ABOUTUS IN APP.JS AS NUMBER
  // Navbar.propTypes = {
  //   title: PropTypes.string.isRequired,
  //   aboutUs: PropTypes.string
  // }

  // Navbar.defaultProps = {
  //   title: "it is default title",
  //   aboutUs: "It is default about us"
  // }

}