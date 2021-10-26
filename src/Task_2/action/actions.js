export const item_increament = () =>
{
    return{
        type:'INCREAMENT_ITEM'
    }
}
export const item_decreament = () =>
{
    return{
        type:'DECREAMENT_ITEM'
    }
}
export const cost_increament = (num) =>
{
    return{
        type:'INCREAMENT_COST',
        data:num
    }
}
export const cost_decreament = (num) =>
{
    return{
        type:'DECREAMENT_COST',
        data:num
    }
}
export const add_item = (num) =>
{
    return{
        type:'ADD_ITEM',
        data: num
    }
}