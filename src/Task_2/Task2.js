import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import Add_data from './Add_data';
import { item_decreament,item_increament,cost_increament,cost_decreament } from './action/actions';
export default function Task2()
{
    const Items =useSelector(state => state.total_item)
    const Cost =useSelector(state => state.total_cost)
    let Data =useSelector(state => state.total_item.products)
    const dispatch = useDispatch()
    return(
        <div>
         items = {Items}
         <br/>
         Cost ={Cost}
         <br/>
         <button onClick={()=>{dispatch(cost_increament(50));dispatch(item_increament())}}>ADD</button>
         <button onClick={()=>{dispatch(cost_decreament(50));dispatch(item_decreament())}}>REMOVE</button>
         BURGER : 50RS  
         <br/>
         <button onClick={()=>{dispatch(cost_increament(100));dispatch(item_increament())}}>ADD</button>
         <button onClick={()=>{dispatch(cost_decreament(100));dispatch(item_decreament())}}>REMOVE</button>
         PIZZA  : 100RS
         <br/>
         <button onClick={()=>{dispatch(cost_increament(150));dispatch(item_increament())}}>ADD</button>
         <button onClick={()=>{dispatch(cost_decreament(150));dispatch(item_decreament())}}>REMOVE</button>
         CHICKEN FRY : 150RS
         <br/>
         <div>
             <Add_data/>
             {Data}
         </div>
        </div>
    )
}