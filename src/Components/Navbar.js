import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-sm navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">my-data</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className ="nav-item">
            <a className = "nav-link" href="/about">About</a>
          </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
             <input className="form-check-input" onClick={props.toggleMode} type="checkbox"id="defaultCheck1"/>
             <label className="form-check-label" htmlFor="defaultCheck1">Enable Darkmode
  </label>
</div>
      </div>
    </div>
   </nav>  
  )
}

Navbar.propTypes = {title:PropTypes.string.isRequired,
                 aboutText: PropTypes.string.isRequired,
}