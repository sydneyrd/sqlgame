import { getAllUsers } from "../../managers/UserManagers";
import { useState } from "react"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Users = () => {
    const [slotUsers, setSlotUsers] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        getAllUsers().then(usersData => setSlotUsers(usersData))
    }, [])

    //determine if user is staff
    const staff= (selectedUser) => {
        if (selectedUser.is_staff === true) {
            return "Staff"
        }
        else {
            return "Customer"
        }
    }

    const active= (selectedUser) => {
        if (selectedUser.is_active === true) {
            return "Active"
        }
        else {
            return "Inactive"
        }
    }

    return (
        <>
            
            <div className="user_container">
                <div className="userTitle">Users</div>
                {slotUsers.map((slotUser) => {
                    let userName = slotUser.user.username
                    let firstName = slotUser.user.first_name
                    let lastName = slotUser.user.last_name
                    let profileType = staff(slotUser.user)
                    let activationStatus = active(slotUser?.user)

                    return <section className="userBox" key={slotUser.id}>
                        <div className="user" >

                        <div value={slotUser.id}>Name: {firstName} {lastName}</div>
                        <div value={slotUser.id}>Display Name: {userName}</div>
                        <div value={slotUser.id}>Profile Type: {profileType}</div>
                        <div value={slotUser.id}>Activation Status: {activationStatus}</div>

                        </div>
                        <Link to={`/users/${slotUser.id}`}>
                            <div value={slotUser.id}>See Details</div>
                        </Link>
                        <Link to={`/users/${slotUser.id}/edit`}>
                            <div value={slotUser.id}>Edit User</div>
                        </Link>
                        
                    </section>
                })}
                
            </div>
        </>
    )

}
