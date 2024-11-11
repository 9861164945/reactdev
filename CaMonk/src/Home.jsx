import React from "react";
import "./assets/Home.css";
export default function Home(){
    return(
        <div>
            <section className='Home' >
                <p className='text-white text-center d-inline' >LIVE Interview Preparation Workshop Starting 15th July</p><span>
                    <button className="btn btn-primary shadow-none" >Enroll Now <i className="ri-arrow-right-line"></i></button></span>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light" >
                    <br />
                    <div className="container-fluid">
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">CAMONK</span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Interview Prep
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                         <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li> 
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        MasterclassName
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        UpSkill
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Tool
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hire From Us</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <span classNameName='me-4 fs-4'><i className="ri-shopping-cart-fill"></i></span>

                                <button className="btn btn-primary shadow-none" >Login</button>
                            </form>
                        </div>
                    </div>
                </nav>

                {/* Home page */}
                <div classNameName='container mt-5' >
                    <div classNameName='row d-flex'>
                        <div classNameName='col-md-6 col-sm-6 d-flex align-items-center '>
                            
                        </div>
                        <div classNameName='col-md-6'>
                            <div classNameName='rigth'>
                               
                                                           </div>
                            <div>
                                                               <div classNameName='left text-white'>
                                <h1>Skyrocket Your <br /> Finance Career</h1>
                                <p classNameName='mt-4 lh-1.5'>Learn industry-relevent skills from top mentors.<br /> Network with aspirational peer group</p>
                                <button type='button' classNameName='btn text-white shadow-none mt-3' >View courses</button>
                            </div> <div>
                                                      </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br />
        </div>
    )
}
