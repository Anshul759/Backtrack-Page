import React from "react";
import "../Footer/footer.css"
import logo from "../../resource/logo.jfif"
export default function Footer() {
    return (
        <>
        <footer className="text-center text-lg-start foot">
                <div className="row my-4" style={{ width: "100%"}}>
                    <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                        <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: "12vw" , height: "14vh" }}>
                            <img src={logo} height="70" alt="" loading="lazy" style={{borderRadius:"100%"}} />
                        </div>
                        <p style={{textAlign:"center"}}>Factoring number of requirements into an VE</p>

                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="mb-4 text-center heads">Algos</h5>
                        <ul className="list-unstyled text-center">
                            <li className="mb-2 link"><a href="#!">Path Finding</a></li>
                            <li className="mb-2 link"><a href="#!">Backtracking</a></li>
                            <li className="mb-2 link"><a href="#!">Huffmann Coding</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="mb-4 text-center heads">More</h5>
                        <ul className="list-unstyled text-center">
                            <li className="mb-2 link"><a href="#!">General information</a></li>
                            <li className="mb-2 link"><a href="#!">About the website</a></li>
                            <li className="mb-2 link"><a href="#!">Statistic data</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="mb-4 text-center heads">Contact</h5>
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


