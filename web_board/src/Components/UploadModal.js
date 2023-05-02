import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, background } from "@chakra-ui/react";
import './UploadModal.css'
import UploadComponent from "./UploadComponent";
import { useDispatch } from "react-redux";
import { update_form } from "./modalSlice";

//Modal to handle form input, whe the "Upload button is clicked"
//onChange={event => setEmail(event.currentTarget.value)}
export default function UploadModal({handleOpen, handleClose, index})
{
  const dispatch = useDispatch();

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
              <Input onChange={event => dispatch(update_form({first_name:event.currentTarget.value}))} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input onChange={event => dispatch(update_form({last_name:event.currentTarget.value}))}  placeholder='Last name' />
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