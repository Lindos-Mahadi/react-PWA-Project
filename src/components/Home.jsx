import React, { useState } from 'react';
const Home = () =>{

    const [toggle, setToggle] = useState();

    const toggler = () =>{
        toggle ? setToggle() : setToggle(true);
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto home">
                        <h1>I am from Home</h1>
                        <button className="btn btn-info btn-sm" onClick={toggler}>
                            {toggle? <span>hide</span>:<span>show</span>}
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;