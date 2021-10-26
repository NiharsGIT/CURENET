import total_cost from "./total_cost";
import total_item from "./total_item";
import total_list from "./api_items";
import { combineReducers } from "redux";
const Reducers = combineReducers({
    total_cost,
    total_item,
    total_list,
})
export default Reducers;