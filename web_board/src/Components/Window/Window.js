import useState from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { HStack, IconButton, Link, Flex, Heading, Center } from '@chakra-ui/react';
import {useDisclosure, Box, Alert} from "@chakra-ui/react"
import {HamburgerIcon, WarningIcon} from '@chakra-ui/icons'
import Selector from '../Selector';
import Page from '../Pages/Page';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from '@chakra-ui/react';



//Main window
//A container for all the main UI components like the drawer
//NavButtons
//and the page
export default function Window()
{
    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
        <>
            <Box bg={"green"}
            px={4}
            position={"sticky"}
            top={0}
            boxShadow={"md"}
            zIndex={2}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack alignItems={"center"} spacing={4}>
                        <IconButton
                        size={"sm"}
                        variant={"ghost"}
                        icon={
                            <HamburgerIcon/>
                        }
                        display={{md:"none"}}
                        aria-label={"Open Menu"}
                        onClick={isOpen ? onClose : onOpen}
                        ></IconButton>
                        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px'>Quick Menu</DrawerHeader>
                            <DrawerBody>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </DrawerBody>
                            </DrawerContent>
                    </Drawer>

                        <Heading as={Link} to={"/"} fontWeight={"normal"} size={"md"}>
                            KBS Board
                        </Heading>
                    </HStack>

                    <Selector key={'selID'}></Selector>
                </Flex>

            </Box>
            <Alert status='info' alignContent={"center"}>
                <WarningIcon marginRight={5}/>
                Alpha version: 0.0.1 (server)
            </Alert>           
            <Box>
                <Page></Page>
            </Box>
        </>
    );
}
