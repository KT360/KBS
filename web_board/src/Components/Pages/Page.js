import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import MenuButton from "../MenuButton";
import {useDispatch, useSelector} from 'react-redux';
import { change_page } from "../Window/windowSlice";
import { CalendarIcon, RepeatIcon, PlusSquareIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import DocumentCard from "../Applications/DocumentCard";


export default function Page()
{

    const page = useSelector((state) => state.window.value);
    const dispatch = useDispatch();
    //Basic page setup:
    //Button
    //action, icon ,text, colorScheme = "green"

    //Card
    //name, title, notes
    const pageConfigs = [
        { buttonConfigs: [ {text: "2S", action: ()=> dispatch(change_page(1)), icon: CalendarIcon, colorScheme: "blue"} ] },

        { buttonConfigs: [ {text: "Back", action: ()=> dispatch(change_page(0)), icon: RepeatIcon, colorScheme: "green" }, 
        {text: "application", action: ()=> dispatch(change_page(2)), icon: PlusSquareIcon, colorScheme: "pink"} ] },

        { documentCards: [{name: "Astrid Kamto", title: "Intern, Kautex(Textron)", notes: "This is the notes section, any relevant information can be added here"}] }
    ]


    return(
        <>
            {pageConfigs[page].buttonConfigs?.map((config, index) => 
            <MenuButton key={index} {...config}></MenuButton>
            )}
            
            {pageConfigs[page].documentCards?.map((config, index) => 
            <DocumentCard key={index} {...config}></DocumentCard>
            )} 
        </>
    )
}