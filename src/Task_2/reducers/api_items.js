const initial_state={
    products:[]
}
const total_list = (items=initial_state,{type,data}) =>
{
    switch(type)
    {
       case 'ADD_ITEM':
        return {...items,products:items.products.concat(data)};
       default:
           return items
    }
}
export default total_list; 