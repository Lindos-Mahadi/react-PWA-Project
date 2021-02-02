import React, { useEffect, useState } from 'react';

const Users = () =>{

    const [data, setData] = useState([])
    const [mode, setMode] = useState([])
    useEffect(()=>{
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response)=>{
            response.json().then((result) =>{
                console.warn("result", result);
                setData(result);
                localStorage.setItem("users", JSON.stringify(result))
            })
        }).catch(err =>{
            let collection = localStorage.getItem("users");
            setData(JSON.parse(collection))
            setMode("offline")
            // alert("catch block");
        })
    },[])

    return (
        <React.Fragment>
            <div className="container">
                {
                    mode === 'offline'?
                    <div class="alert alert-warning" role="alert">
                        <p className="text-center">Your are in offline mode or some issue with internet connection !!!</p>
                    </div>
                    : null
                }
                <table className="table striped bordered hover">
                    <thead >
                        <tr className="thead-dark">
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
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