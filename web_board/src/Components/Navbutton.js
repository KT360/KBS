import React from 'react'
import {useDispatch} from 'react-redux';
import { change_page } from './Window/windowSlice';
import { Button} from '@chakra-ui/react'
import {PlusSquareIcon} from '@chakra-ui/react';

//Button to quickly change to a specific page
export default function Navbutton(props)
{

    const dispatch = useDispatch();

    return(
        <div style={{color: "Green"}}>
            <Button width={'100%'} leftIcon={props.Icon} onClick={() => dispatch(change_page(props.page_name))} {...props}>{props.text}</Button>
        </div>
    );
}