import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, background } from "@chakra-ui/react";
import './UploadModal.css'
import UploadComponent from "./UploadComponent";

//Modal to handle form input, whe the "Upload button is clicked"
export default function UploadModal({handleOpen, handleClose, handleSave})
{
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
              <Input placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>

            <FormControl mt={6}>
              <FormLabel>Notes</FormLabel>
              <Input />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <UploadComponent></UploadComponent>
            <Button onClick={handleClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
    )
}