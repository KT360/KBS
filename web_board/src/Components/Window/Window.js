import useState from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { change_page } from './windowSlice';

//Main window that manages each page, as a list and displays them 
export default function Window()
{

    const page = useSelector((state) => {state.window.value});
    
    const page_array = [<PageA></PageA>, <PageB></PageB>]

    return(page_array[page]);
}
