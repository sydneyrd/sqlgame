import { getUserById, updateUser } from "../../managers/UserManagers";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";



export const UserDetail = () => {
    const [slotUser, setSlotUser] = useState([])
    const { userId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getUserById(userId)
            .then(setSlotUser)
    }, [userId])

    const staff = (selectedUser) => {
        if (selectedUser?.is_staff === true) {
            return "Staff"
        }
        else {
            return "Customer"
        }
    }

    const active = (selectedUser) => {
        if (selectedUser?.active === true) {
            return "Yes"
        }
        else {
            return "No"
        }
    }
    let userName = slotUser?.user?.username
    let firstName = slotUser?.user?.first_name
    let lastName = slotUser?.user?.last_name
    let email = slotUser?.user?.email
    let title = slotUser?.title
    let profileType = staff(slotUser?.user)
    let isActive = active(slotUser?.user)

    return( 
        <>
            <div className="user_container">
                <div className="userTitle">Users</div>
                <section className="userBox" key={slotUser.id}>
                    <div className="user" >
                        <div value={slotUser.id}>Name: {firstName} {lastName}</div>
                        <div value={slotUser.id}>User Name: {userName}</div>
                        <div value={slotUser.id}>Email: {email}</div>
                        <div value={slotUser.id}>Title: {title}</div>
                        <div value={slotUser.id}>Profile Type: {profileType}</div>
                        <div value={slotUser.id}>Is Active? {isActive}</div>
                    </div>
                    { slotUser?.user?.is_staff ? <button className="button" onClick={() => {
                        navigate(`/users`)
                    }}>Back To Users</button> : ""}
                </section>
            </div>
        </>
    )


}


