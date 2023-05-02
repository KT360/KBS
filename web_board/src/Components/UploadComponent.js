import './UploadModal.css';
import React, {useState} from 'react';
import axios from 'axios';
import {Button} from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { update_form } from "./modalSlice";
import { useSelector } from 'react-redux';

//Pretty much the "Upload" and the "Save" button paired 
//Its in charge of handling the post to the server

//TODO: recieve data from the UploadModal From
export default function UploadComponent({onClose, index})
{
    const [file, setFile] = useState(null);
    const page = useSelector((state) => state.window.value);

    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal.value);

    const handleImageChange = (e) =>{
        setFile(e.target.files[0]);
        dispatch(update_form({image: "/uploads"+e.target.files[0].filName}))
    };

    const handleUpload = async () =>{
        if(!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Send file
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-type':'multipart-form-data',
                },
            });

            console.log('File uploaded', response.data)

            axios.patch(`/pages/${page}/cards/${index}`, modal).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            });
        }catch (error){
            console.error('error uploading', error)
        }
    };



    const handleClick = async () =>{
        await handleUpload();
        onClose();
    };

    return (
        <>
            <label id="file-input" style={{marginRight: 8, border: "1px solid #ccc",
                            display: "inline-block",
                            padding: "6px 12px",
                            cursor: "pointer",
                            background: "turquoise",
                            borderRadius: "5px"}}>
                <input type="file" accept='image/*' onChange={handleImageChange}/>
                    Upload
            </label>
            <label marginRight={6}>{file ? file.name: null}</label>
            <Button onClick={handleClick} colorScheme='blue' mr={3}>
            Save
            </Button>
            
        </>
    )
}