import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import MenuButton from "../MenuButton";
import {useDispatch, useSelector} from 'react-redux';
import { change_page } from "../Window/windowSlice";
import { CalendarIcon, RepeatIcon, PlusSquareIcon, InfoIcon, CheckCircleIcon } from "@chakra-ui/icons";
import DocumentCard from "../Applications/DocumentCard";
import { useEffect, useState } from "react";
import axios from "axios";

//Dynamic component that renders the current page from a list of pages(pageConfigs)
//Takes those elements, and renders them
export default function Page()
{

    const page = useSelector((state) => state.window.value);
    const dispatch = useDispatch();
    const [cards, setCards] = useState([]);

    //Every time the page is changed make a request to the server to get
    //the cards for this page
    useEffect(() => {
        const populatePages = async ()=>
        {

            try{
                const response = await axios.get(`/cards/${page}`);
                const data = await response.data;

                setCards(data);
            } catch (error)
            {
                console.error('error fetching cards', error);
            }
        };

        populatePages();
    }, [page]);




        
    //Object that stores pages as other objects
    const pageConfigs = {
        
        home_page: { buttonConfigs: [ {text: "TPM", action: ()=> dispatch(change_page("tpm_page")), icon: InfoIcon, colorScheme: "green"},
        {text: "Quality", action: () => dispatch(change_page("quality_page")), icon: CheckCircleIcon, colorScheme: "purple"} ],},
        
        tpm_page: { buttonConfigs: [ {text: "2S", action: ()=> dispatch(change_page("two_s_page")), icon: CalendarIcon, colorScheme: "blue"}, {text: "Back", action: ()=> dispatch(change_page("home_page")), icon: RepeatIcon, colorScheme: "green" }, ] },
        
        two_s_page: { documentCards: true, }}


    
    //render the specific elements for that page if it has them
    return(
        <>
            {pageConfigs[page].buttonConfigs?.map((config, index) => 
            <MenuButton key={index} {...config}></MenuButton> //Pass configs to component (ex: text, action)
            )}
            
            {pageConfigs[page].documentCards? cards.map((config, index) => 
            <DocumentCard key={index} {...config}></DocumentCard>
            ): null} 
        </>
    )
}