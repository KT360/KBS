import React from 'react'
import {useDispatch} from 'react-redux';
import { change_page } from './Window/windowSlice';

export default function Selector()
{

    const dispatch = useDispatch();

    return(
        <div style={{color: "Green"}}>
            <button onClick={() => dispatch(change_page(1))}>Page 1</button>
            <button> onClick={() => dispatch(change_page(2))}Page 2</button>
        </div>
    );
}