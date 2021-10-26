const total_item = (item=0,action) =>
{
    switch(action.type)
    {
       case 'INCREAMENT_ITEM':
           return item+1
       case 'DECREAMENT_ITEM':
           return item-1
       default:
           return item
    }
}
export default total_item;