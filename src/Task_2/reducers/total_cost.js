const total_cost = (cost=0,action) =>
{
    switch(action.type)
    {
       case 'INCREAMENT_COST':
           return cost+action.data
       case 'DECREAMENT_COST':
           return cost-action.data
       default:
           return cost
    }
}
export default total_cost;