import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateUser, getUserById } from "../../managers/UserManagers"

export const Profile = () => {
    const [slotUser, setSlotUser] = useState({})
    const [payload, setPayload] = useState({
        first_name: slotUser?.user?.first_name,
        last_name: slotUser?.user?.last_name,
        email: slotUser?.user?.email,
    })
    const userId = localStorage.getItem('user_id')
    let navigate = useNavigate()
    useEffect(() => {
        getUserById(userId).then(data => {
            setSlotUser(data)
        })
    }, [])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const send = { ...payload }

        updateUser(userId, send).then((user) => {
            navigate(`/home`)
        })
    }
    const newObj = {
        first_name: slotUser?.user?.first_name,
        last_name: slotUser?.user?.last_name,
        email: slotUser?.user?.email,
    }


    const handleChange = (event) => {
        const userCopy = { ...payload }
        userCopy[event?.target?.name] = event?.target?.value
        setPayload(userCopy)
    }


    return (
        <section className="section">
            <article className="panel is-info">
                <h2 className="panel-heading">Update Profile</h2>
                <div className="field">
                    <label htmlFor="content" className="label">First Name: </label>
                    <div className="control">
                        <div className="control">
                            <input type="text"
                                name="first_name"
                                defaultValue={slotUser?.user?.first_name}
                                onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="content" className="label">Last Name: </label>
                    <div className="control">
                        <div className="control">
                            <input type="text"
                                name="last_name"
                                defaultValue={slotUser?.user?.last_name}
                                onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="content" className="label">Email: </label>
                    <div className="control">
                        <div className="control">
                            <input type="email"
                                name="email"
                                defaultValue={slotUser?.user?.email}
                                onChange={handleChange}/>
                        </div>
                    </div>
                </div>


                <div className="field">
                    <div className="control">
                        <button type="submit"
                            onClick={handleSubmit}
                            className="button is-success">
                            Save
                        </button>
                    </div>
                    
                </div> 
                
        </article>
        <article></article>
        </section>
)
}
