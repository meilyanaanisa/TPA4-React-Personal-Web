import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPage.css'


function ErrorPage() {
  return (
    <div className='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <Link to='/'>
      <button> Back To Home </button>
      </Link>
    </div>
  );
}

export default ErrorPage