import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, background } from "@chakra-ui/react";
import './UploadModal.css'
import UploadComponent from "./UploadComponent";
import { useDispatch } from "react-redux";
import { update_form } from "./modalSlice";
import { useState } from "react";
//Modal to handle form input, whe the "Upload button is clicked"
//onChange={event => setEmail(event.currentTarget.value)}
export default function UploadModal({handleOpen, handleClose, index})
{
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function updateName()
  {
    let newName = firstName+" "+lastName;

    dispatch(update_form({name: newName}))
  }

    return(
    <>
      <Modal
        isOpen={handleOpen}
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload a File</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input onChange={event => {setFirstName(event.currentTarget.value); updateName()}} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input onChange={event => {setLastName(event.currentTarget.value); updateName()}}  placeholder='Last name' />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Notes</FormLabel>
              <Input onChange={event => dispatch(update_form({notes:event.currentTarget.value}))}  />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <UploadComponent index={index} onClose={handleClose}></UploadComponent>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}