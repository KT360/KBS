import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import MenuButton from "../MenuButton";
import {useDispatch, useSelector} from 'react-redux';
import { change_page } from "../Window/windowSlice";
import { CalendarIcon, RepeatIcon, PlusSquareIcon, ExternalLinkIcon } from "@chakra-ui/icons";


export default function Page()
{

    const page = useSelector((state) => state.window.value);
    const dispatch = useDispatch();
    //Basic page setup
    //action, icon ,text, colorScheme = "green"
    const pageConfigs = [
        { buttonConfigs: [ {text: "2S", action: ()=> dispatch(change_page(1)), icon: CalendarIcon, colorScheme: "blue"} ] },

        { buttonConfigs: [ {text: "Back", action: ()=> dispatch(change_page(0)), icon: RepeatIcon, colorScheme: "green" }, 
        {text: "application", action: ()=> dispatch(change_page(2)), icon: PlusSquareIcon, colorScheme: "pink"} ] },

        { buttonConfigs: [{text: "APP", action: ()=> console.log("Hooray"), icon: ExternalLinkIcon, colorScheme: "red"}] }
    ]


    return(
        <>
            {pageConfigs[page].buttonConfigs.map((config, index) => 
            <MenuButton key={index} {...config}></MenuButton>
            )}
        </>
    )
}