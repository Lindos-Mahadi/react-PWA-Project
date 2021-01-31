import React from 'react';

const Footer = () =>{
    const year = new Date().getFullYear();
  return(
    <React.Fragment>
      <footer id="footer-section" className="text-center text-light bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <p> {year} @ lindos. All Rights Reserved | Terms and Conditions.</p>
                </div>
            </div>
        </div>
    </footer>
    </React.Fragment>
  );
};

export default Footer;