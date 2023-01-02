import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AiOutlineUserAdd} from 'react-icons/ai'
import {RiDeleteBin5Line} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import './index.css'
import Header from '../Header'
import Sidebar from '../Sidebar'



function Home() {
    const [data, setData] = useState([{"id":1, "user":"Suresh K", "signIn":"Within 1 hour", "role":"Owner", "delete":"" },
    {"id":2, "user":"Vikram", "signIn":"2 Days ago", "role":"Admin", "delete":"" },
    {"id":3, "user":"", "signIn":"", "role":"Sales", "delete":"" },
    {"id":4, "user":"", "signIn":"", "role":"Sales", "delete":"" } ])

    const [newData, setNewData] = useState('')

    const addData=()=>{

        if(newData){
            let num = data.length+1;
            let newEntry = {id: num, user:newData, signIn:"", role:"", delete:""};
            setData([...data, newEntry]);
            setNewData('');
        }

    }

    const deleteData=(id)=>{
        let newTask = data.filter((info)=>info.id !==id)
        setData(newTask)

    }

        return (
            <>
            <Header />
            <Sidebar />
            <div className="table-container" >
                <Popup trigger={<button className="btn btn-success add-user-button">Add User</button>}>
                <div className="d-flex flex-row popup-container shadow">
                <div className="popup-sub-container d-flex flex-column justify-content-center">
                <AiOutlineUserAdd className="fa-user" />
                    <p className="user-fa-description">Loren Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has bessn the industry's  standard dummy text sever since the 1500s,
                        when an unknown printer took a gallery of type and scrambled it to make a type
                        specimen book.
                    </p>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <form className="d-flex flex-column form-container">
                        <h1 className="user-text-add">User Information</h1>
                        <label>Email Id of User</label>
                        <input value={newData} onChange={e=> setNewData(e.target.value)}/>
                        <label>Role</label>
                        <select>
                            <option>Admin</option>
                            <option>Sales</option>
                            <option>Owner</option>
                        </select>
                        <div className="d-flex flex-row justify-content-center">
                            <button className="btn btn-warning popup-button">Cancel</button>
                            <button className="btn btn-success popup-button" onClick={addData}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
                </Popup>
                <div className="table-main-container">
                <table>
                    <thead>
                        <tr>
                        <th className="text-center text1">#</th>
                    <th className="text1 text3">User</th>
                    <th className="text-center text1">Last Signed In</th>
                    <th className="text-center text1">Role</th>
                    <th className="text-center text1">Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(
                            (info, index)=>{
                                return(
                                <tr key={index}>
                                <td className="text text-center">{info.id}</td>
                                <td className="text text3">{info.user}</td>
                                <td className="text text-center">{info.signIn}</td>
                                <td className="text text-center">{info.role}</td>
                                <td className="text-center"><div className="delete-container" onClick={()=>deleteData(info.id)}>
                                    <RiDeleteBin5Line className="delete-icon"/>
                                    </div></td>
                        </tr>
                                )
                            }
                        )}
                        
                    </tbody>
                </table>

                </div>
                <div className="d-flex flex-row justify-content-end previous-container">
                    <p className="text-center">Previous</p>
                    <button className="btn btn-success previous-button">1</button>
                    <button className="btn btn-outline previous-button">2</button>
                    <p className="previous-button">Next</p>
                </div>
                
            </div> 
            
            </>
            
        )
    
}
export default Home