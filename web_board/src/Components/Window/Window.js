import useState from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Page from '../Pages/Page'
import { HStack, IconButton, Link, Flex, Heading } from '@chakra-ui/react';
import {useDisclosure} from "@chakra-ui/react"
import { Box } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import Selector from '../Selector';


//Main window that manages each page, as a list and displays them 
export default function Window()
{
    const {isOpen, onOpen, onClose} = useDisclosure();

    const page = useSelector((state) => state.window.value);
    const page_array = [<Page></Page>]

    //page_array[page]
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
                        <Heading as={Link} to={"/"} fontWeight={"normal"} size={"md"}>
                            KBS Board
                        </Heading>
                    </HStack>

                    <Selector key={'selID'}></Selector>
                </Flex>
                        
            </Box>
        </>
    );
}
