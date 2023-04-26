import React from 'react'
import {useDispatch} from 'react-redux';
import { change_page } from './Window/windowSlice';
import { Button} from '@chakra-ui/react'

export default function Selector()
{

    const dispatch = useDispatch();

    return(
        <div style={{color: "Green"}}>
            <Button onClick={() => dispatch(change_page(0))}>Page 1</Button>
            <Button onClick={() => dispatch(change_page(1))}> Page 2</Button>
        </div>
    );
}