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


export default function DocumentCard({name, title, notes, ...props})
{

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Card maxW='md' {...props}>
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
                <UploadModal handleOpen={isOpen} handleClose={onClose}/>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                {notes}
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Chakra UI'
            />
        </Card>
    )
}