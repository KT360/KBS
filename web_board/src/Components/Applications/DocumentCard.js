//TODO:
//Add card component with image
//Add expandable/transitioning image
//Add context menu to card -> Pop up -> Upload image
import React from "react"
import { Card, CardHeader, CardBody ,Flex, Avatar, Box, Heading, Text, IconButton, Image } from "@chakra-ui/react"
import {HamburgerIcon, AddIcon, ExternalLinkIcon, EditIcon} from '@chakra-ui/icons'
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import UploadModal from "../UploadModal"
import {useDisclosure} from "@chakra-ui/react"
import { SingleSource } from "./CustomImage"


//Card to display data fetched from the server
export default function DocumentCard({name, title, notes, image, index ,...props})
{

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Card maxW='md' {...props} margin={5} backgroundColor={'#d0e7f7'}>
            <CardHeader>
                <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name={name} />

                    <Box>
                    <Heading size='sm'>{name}</Heading>
                    <Text>{title}</Text>
                    </Box>
                </Flex>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <MenuItem icon={<AddIcon />} >
                        New Note
                        </MenuItem>
                        <MenuItem onClick={onOpen} icon={<ExternalLinkIcon />}>
                        Upload Image
                        </MenuItem>
                        <MenuItem icon={<EditIcon />}>
                        Open File...
                        </MenuItem>
                    </MenuList>
                </Menu>
                <UploadModal index={index} handleOpen={isOpen} handleClose={onClose}/>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                {notes}
                </Text>
            </CardBody>
            <SingleSource objectFit='cover'
                src={image}
                alt='Chakra UI'/>
        </Card>
    )
}