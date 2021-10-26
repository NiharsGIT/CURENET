import React,{useEffect} from 'react';
import axios from 'axios'
import { useDispatch} from 'react-redux';
import { add_item } from './action/actions';
export default function Add_data()
{
    const dispatch = useDispatch()
    const fetchdata = async () =>
    {
       const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                      .catch((err) => {
                          console.log(err)
                      })
        dispatch(add_item(res.data))
    }
    useEffect(()=>{fetchdata()},[])
    dispatch(add_item({
        userId:101,
        id:101,
        title:'Hello',
        body:'World'
    }))
    return(<div></div>)
}
