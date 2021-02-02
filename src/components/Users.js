import React, { useEffect, useState } from 'react';

const Users = () =>{

    const [data, setData] = useState([])
    useEffect(()=>{
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response)=>{
            response.json().then((result) =>{
                console.warn("result", result);
                setData(result);
            })
        })
    },[])
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(json => console.log(json))

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <h1>I am from Users</h1>
                    </div>
                </div>
                <table className="table striped bordered hover">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, i) =>(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.street}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}
export default Users;