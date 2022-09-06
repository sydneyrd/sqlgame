import { getUserById, updateUserAdmin, deleteUser } from "../../managers/UserManagers";
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
            return "Admin"
        }
        else {
            return "Player"
        }
    }
    let userName = slotUser?.user?.username
    let firstName = slotUser?.user?.first_name
    let lastName = slotUser?.user?.last_name
    let email = slotUser?.user?.email
    let title = slotUser?.title
    let profileType = staff(slotUser?.user)
    const handleUpdate = (id, user) => { 
        const confirmBox = window.confirm("Confirm: Reactivate User")
            if  (confirmBox)
        updateUserAdmin(id, user).then(() => {
            getUserById(userId).then(setSlotUser)
        })
    }
    const handleDelete = (id) => {
        const confirmBox = window.confirm("Are you sure you want to permanently delete this account?")
            if (confirmBox)
            deleteUser(id).then(() => {
            navigate('/users')})
    }
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
                    </div>
                    { slotUser?.user?.is_staff ? <button className="button" onClick={() => {handleUpdate(userId, slotUser )
                        
                    }}>Withdraw Admin Permissions</button> : <button className="button" onClick={() => {handleUpdate(userId, slotUser)}}>Give Admin Permissions</button>}
                </section>
                <button className="button" onClick={() => handleDelete(userId)}>Delete User</button>
            </div>
            <button className="button" onClick={() => { navigate(`/users`)}}>Back to Users</button>
        </>
    )


}


