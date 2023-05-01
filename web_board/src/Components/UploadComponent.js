import './UploadModal.css';
import React, {useState} from 'react';
import axios from 'axios';
import {Button} from '@chakra-ui/react';

//Pretty much the "Upload" button
//Its in charge of handling the post to the server
export default function UploadComponent()
{
    const [file, setFile] = useState(null);

    const handleImageChange = (e) =>{
        setFile(e.target.files[0]);
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
        }catch (error){
            console.error('error uploading', error)
        }
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
            <Button onClick={handleUpload} colorScheme='blue' mr={3}>
            Save
            </Button>
            
        </>
    )
}