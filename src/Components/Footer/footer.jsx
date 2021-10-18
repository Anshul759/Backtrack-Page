import React from "react";
import "../Footer/footer.css"
export default function Footer() {
    return (
        <>
        <footer className="text-center text-lg-start foot">
                <div className="row my-4" style={{ width: "100%"}}>
                    <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "12vw" , height: "14vh" }}>
                            <img src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png" height="70" alt="" loading="lazy" />
                        </div>
                        <p>Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 text-center heads">Animals</h5>
                        <ul className="list-unstyled text-center">
                            <li className="mb-2 link"><a href="#!">When your pet is missing</a></li>
                            <li className="mb-2 link"><a href="#!">Recently found</a></li>
                            <li className="mb-2 link"><a href="#!">How to adopt?</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 text-center heads">Animals</h5>
                        <ul className="list-unstyled text-center">
                            <li className="mb-2 link"><a href="#!">General information</a></li>
                            <li className="mb-2 link"><a href="#!">About the shelter</a></li>
                            <li className="mb-2 link"><a href="#!">Statistic data</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 text-center heads">Contact</h5>
                        <ul className="list-unstyled text-center">
                            <li><p>Warsaw, 57 Street, Poland</p></li>
                            <li><p>+ 01 234 567 89</p></li>
                            <li><p>contact@example.com</p></li>
                        </ul>
                    </div>
                </div>
        </footer>
        </>
    )
}


