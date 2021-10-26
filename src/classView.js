import React from "react";
import { add_item, remove_item } from "./store/itemsDux";
import { connect } from "react-redux";
class ClassView extends React.Component {
  render() {
    return (
      <div>
        items = {this.props.TotalItems}
        <br />
        Cost ={this.props.TotalCost}
        <br />
        <button
          onClick={() => {
            this.props.add_item(50);
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            this.props.remove_item(50);
          }}
        >
          REMOVE
        </button>
        BURGER : 50RS
        <br />
        <button
          onClick={() => {
            this.props.add_item(100);
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            this.props.remove_item(100);
          }}
        >
          REMOVE
        </button>
        PIZZA : 100RS
        <br />
        <button
          onClick={() => {
            this.props.add_item(150);
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            this.props.remove_item(150);
          }}
        >
          REMOVE
        </button>
        CHICKEN FRY : 150RS
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    TotalCost: state.entities.items.total_cost,
    TotalItems: state.entities.items.total_item,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add_item: (cost) => dispatch(add_item(cost)),
    remove_item: (cost) => dispatch(remove_item(cost)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassView);
