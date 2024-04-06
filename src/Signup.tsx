import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
interface Props  {}

const About = (props: Props) => {
  return (
    <div>
            <div id='bck'>
                <div className="container">
                    <div id='bang' className="row">
                        <div id='header' className="col mt-2 mb-4">
                            <h2 >Company Name</h2>
                            <h3>Create Account</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 mt-2">
                            {/* <img src={Image} alt="pogo" /> */}
                            <div className="input-icons ">
                                <i className="fa fa-user icon"></i>
                                <input className="form-control input-field me-2 ps-4" type="search" placeholder=" First Name" aria-label="Search" />
                            </div>
                            <div className="input-icons ">
                                <i className="fa fa-key icon"></i>
                                <input className="form-control input-field me-2 mt-2 ps-4" type="search" placeholder=" Password" aria-label="Search" />
                            </div>
                            <div className="input-icons mt-2">
                                <i className="fa fa-envelope icon"></i>
                                <input className="form-control input-field me-2 ps-4" type="search" placeholder=" Email" aria-label="Search" />
                            </div>
                            {/* <div className="input-icons">
                                <i className="fa fa-key icon"></i>
                                <input className="form-control input-field me-2 mt-2 ps-4" type="search" placeholder=" Password" aria-label="Search" />
                            </div> */}
                        </div>
                        <div className="col-6 text-center mt-2">
                            <div className="input-icons ">
                                <i className="fa fa-user icon"></i>
                                <input className="form-control input-field me-2 ps-4" type="search" placeholder=" Last Name" aria-label="Search" />
                            </div>
                            <div className="input-icons ">
                                <i className="fa fa-key icon"></i>
                                <input className="form-control input-field me-2 mt-2 ps-4" type="search" placeholder=" Confirm Password" aria-label="Search" />
                            </div>
                            <div className="input-icons mt-2">
                                <i className="fa fa-envelope icon"></i>
                                <input className="form-control input-field me-2 ps-4" type="search" placeholder=" Re-enter Email" aria-label="Search" />
                            </div>
                            {/* <div className="input-icons mt-2">
                                <i className="fa fa-envelope icon"></i>
                                <input className="form-control input-field me-2 ps-4" type="search" placeholder=" Email" aria-label="Search" />
                            </div> */}

                        </div>
                    </div>
                    <div id="comimg_b" className='row mt-4'>
                        <div className='col-6 mt-4'>
                            <button className="btn mt-3 btn-block " type="submit">SUBMIT</button>
                        </div>
                        <div className='col-6 mt-4'>
                        <button className="btn mt-3 btn-block " type="submit"><Link to="/">SIGN IN</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About