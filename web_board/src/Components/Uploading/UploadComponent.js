import './UploadModal.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { update_form } from "./modalSlice";
import { set_updated_page } from '../Pages/pageSlice';
import io from 'socket.io-client';

let socket;

//Pretty much the "Upload" and the "Save" button paired 
//Its in charge of handling the post to the server
export default function UploadComponent({ onClose, index, type }) {
    const [file, setFile] = useState(null);
    const page = useSelector((state) => state.window.value);

    const dispatch = useDispatch();
    const modal = useSelector((state) => state.modal.value);

    const [isReadyToSend, setIsReadyToSend] = useState(false);

    useEffect(() => {

        socket = io();
        socket.on('card updated', (response) => {
            console.log(response);
            dispatch(set_updated_page(true));
        });

        return () => {
            socket.disconnect();
        }
    }, []);

    useEffect(() => {
        if (isReadyToSend) {
            socket.emit('update', {pageID:page, cardID:index, mod_data:modal});
        }
    }, [isReadyToSend]);

    const handleImageChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            // Send file
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                },
            });

            console.log('File uploaded', response.data)

            let filePath = response.data.filePath.toLowerCase();

            console.log(typeof filePath);

            dispatch(update_form({ imagePath: filePath }));

            await new Promise((resolve) => setTimeout(resolve, 1));

            console.log("Current Modal" + modal.imagePath);

            setIsReadyToSend(true);

        } catch (error) {
            console.error('error uploading', error)
        }
    };

    const handleClick = async () => {
        await handleUpload();
        onClose();
    };

    return (
        <>
            <label id="file-input" style={{ marginRight: 8, border: "1px solid #ccc", display: "inline-block", padding: "6px 12px", cursor: "pointer", background: "turquoise", borderRadius: "5px" }}>
                <input type="file" accept='image/*' onChange={handleImageChange} />
                    Upload
            </label>
            <label marginRight={6}>{file ? file.name: null}</label>
            <Button onClick={handleClick} colorScheme='blue' mr={3}>
                Save
            </Button>

        </>
    )
}