import React from 'react'
import {useDispatch} from 'react-redux';
import { change_page } from './Window/windowSlice';
import { Button} from '@chakra-ui/react'
import {PlusSquareIcon} from '@chakra-ui/react';

export default function Navbutton(props)
{

    const dispatch = useDispatch();

    return(
        <div style={{color: "Green"}}>
            <Button leftIcon={props.Icon} onClick={() => dispatch(change_page(props.page_number))}>{props.text}</Button>
        </div>
    );
}