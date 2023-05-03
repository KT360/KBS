import useState from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { HStack, IconButton, Link, Flex, Heading, Center } from '@chakra-ui/react';
import {useDisclosure, Box, Alert} from "@chakra-ui/react"
import {HamburgerIcon, WarningIcon} from '@chakra-ui/icons'
import Selector from '../Navigation/Selector';
import Page from '../Pages/Page';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from '@chakra-ui/react';
import Navbutton from '../Navigation/Navbutton';
import {FcTreeStructure} from 'react-icons/fc'
import { Icon } from '@chakra-ui/react';

//Main window
//A container for all the main UI components like the drawer
//NavButtons
//and the page
export default function Window()
{
    const {isOpen, onOpen, onClose} = useDisclosure();

    const version_string = "alpha version: 0.0.3";

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
                        aria-label={"Open Menu"}
                        onClick={isOpen ? onClose : onOpen}
                        ></IconButton>
                        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader borderBottomWidth='1px'>
                                    <Box display={'flex'} alignContent={'center'}>
                                        <Icon as={FcTreeStructure} boxSize={35} marginRight={5}></Icon>
                                        Quick Menu
                                    </Box>
                                </DrawerHeader>
                                <DrawerBody>
                                    <Navbutton bgColor='#9cf7c7' variant='outline' text={"Toyota"} page_name={"toyota_main"}/>
                                    <Navbutton bgColor='#9cf7c7' variant='outline' text={"Lexus"} page_name={"lexus_main"}/>
                                    <Navbutton bgColor='#9cf7c7' variant='outline' text={"Ford"} page_name={"ford_main"}/>
                                </DrawerBody>
                                <DrawerFooter fontSize={12} justifyContent={'left'}>{version_string}</DrawerFooter>
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
                Alpha version: 0.0.3 (Base Layout)
            </Alert>           
            <Box>
                <Page></Page>
            </Box>
        </>
    );
}
