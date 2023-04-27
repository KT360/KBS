import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import MenuButton from "../MenuButton";
import {useDispatch} from 'react-redux';
import { change_page } from "./Window/windowSlice";


export default function Page()
{
    //action, icon ,text, colorScheme = "green"
    const buttonConfigs = [
        {text: "2S", action }
    ];

    return(
        <>
            {buttonConfigs.map((config, index) => 
            <MenuButton key={index} {...config}></MenuButton>
            )}
        </>
    )
}