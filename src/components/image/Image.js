import { useState } from "react";
import { createImage } from "../../managers/ImageMangers";

export const Image = () => {
const [image, setImage] = useState({})

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }
    


    const createImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            let copy = {...image }
            copy[event.target.name] = base64ImageString
            setImage(copy)
            // Update a component state variable to the value of base64ImageString
        });
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        let copy = {...image }
        createImage(copy)
    }
    const handleChange = (event) => {
        let ap = {...image }
        ap[event.target.name] = event.target.value
        setImage(ap)
    }

    
    return <>An image form here

    <input type="file" id="action_pic" name="action_pic" onChange={createImageString} />
    <input type="text" name="label" onChange={handleChange} value={image?.label} />
    <button onClick={(event) => handleSubmit(event)}>Upload</button></>
}