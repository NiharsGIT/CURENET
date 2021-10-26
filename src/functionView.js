import React from "react";
import { useDispatch } from "react-redux";
import { add_item, remove_item, TotalCost, TotalItems } from "./store/itemsDux";
export default function FunctionView() {
  const dispatch = useDispatch();
  return (
    <div>
      items = {TotalItems()}
      <br />
      Cost ={TotalCost()}
      <br />
      <button
        onClick={() => {
          dispatch(add_item(50));
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch(remove_item(50));
        }}
      >
        REMOVE
      </button>
      BURGER : 50RS
      <br />
      <button
        onClick={() => {
          dispatch(add_item(100));
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch(remove_item(100));
        }}
      >
        REMOVE
      </button>
      PIZZA : 100RS
      <br />
      <button
        onClick={() => {
          dispatch(add_item(150));
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch(remove_item(150));
        }}
      >
        REMOVE
      </button>
      CHICKEN FRY : 150RS
      <br />
    </div>
  );
}
