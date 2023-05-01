import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import MenuButton from "../MenuButton";
import {useDispatch, useSelector} from 'react-redux';
import { change_page } from "../Window/windowSlice";
import { CalendarIcon, RepeatIcon, PlusSquareIcon, InfoIcon, CheckCircleIcon } from "@chakra-ui/icons";
import DocumentCard from "../Applications/DocumentCard";
import { useState, useEffect } from "react";

export default function Page()
{

    const page = useSelector((state) => state.window.value);
    const dispatch = useDispatch();
    const [cards, setCards] = useState([]);

    useEffect(() => {

    });

    //Basic page setup:
    //Button
    //action, icon ,text, colorScheme = "green"

    //Card
    //name, title, notes
    const pageConfigs = {
        
        home_page: { buttonConfigs: [ {text: "TPM", action: ()=> dispatch(change_page("tpm_page")), icon: InfoIcon, colorScheme: "green"},
        {text: "Quality", action: () => dispatch(change_page("quality_page")), icon: CheckCircleIcon, colorScheme: "purple"} ],},
        
        tpm_page: { buttonConfigs: [ {text: "2S", action: ()=> dispatch(change_page("two_s_page")), icon: CalendarIcon, colorScheme: "blue"}, {text: "Back", action: ()=> dispatch(change_page("home_page")), icon: RepeatIcon, colorScheme: "green" }, ] },
        
        two_s_page: { documentCards: {cardNum: 1, cards:[]},
    }
    //For each page
    //check for the documentCard prop
    //Make documentCard into object containing, cardNum and array for of objects representing the cards
    //Make request to server
    //in for looop
    //Create new card object and store it into array
    function populatePages()
    {
        //get keys
        let pages = Object.keys(pageConfigs);
        pages.forEach((page)=>{
            if(page.documentCards)
            {
                ``
            }
        });
    }

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