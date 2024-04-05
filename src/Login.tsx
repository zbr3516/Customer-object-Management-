// import React from 'react'
import Image from './images/com.gif'
interface Props {}

const Home = (props: Props) => {
  return (
    <div id='bck'>
      <div className="container">
        <div id='bang' className="row">
          <div id='header' className="col mt-2 mb-2">
            <h2>Company Name</h2>
          </div>
        </div>

        <div className="row">
          <div id='comimg' className="col-6">
            <img src={Image} alt="pogo" />
          </div>
          <div className="col-6 text-center mt-2">
            <h2>Welcome</h2>
            <p>Login here</p>
            <div className="input-icons ">
              <i className="fa fa-envelope icon"></i>
              <input className="form-control input-field me-2 ps-4" type="search" placeholder=" Email" aria-label="Search" />
              </div>
              <div className="input-icons ">
              <i className="fa fa-key icon"></i>
              <input className="form-control input-field me-2 mt-2 ps-4" type="search" placeholder=" Password" aria-label="Search" />
            </div>
            <div>
            <button className="btn mt-2 btn-block" type="submit">Login</button>
            <button className="btn btn-outline-success mt-2 btnn1" type="submit">Sign Up</button>
            <button className="btn btn-outline-success mt-2 btnn1" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home