import React, { Component } from "react";
import { products as data } from "../data/data.js";
import { findSum } from "./helper.js";
export class DisplayCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalSum: 0,
      isClicked: false
    };
  }
  handleClick = () => {
    const total = findSum(data);
    this.setState({ totalSum: total, isClicked: !this.state.isClicked });
  };
  render() {
    return (
      <div>
        <table border={1}>
          <tr>
            <th>Name of Item</th>
            <th>Price of Item</th>
            <th>Quantity </th>
            <th>Total </th>
            <th>Discount Percentage </th>
            <th>Discount Price </th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
                <td>{item.discountPercentage}</td>
                <td>{item.discountedPrice}</td>
              </tr>
            );
          })}
        </table>
        <button onClick={this.handleClick}>FindSum</button>
        {this.state.isClicked && this.state.totalSum}
      </div>
    );
  }
}
export default DisplayCart;
FilterData.js;
import { Component } from "react";
import { products } from "../data/data.js";
class FilterData extends Component {
  render() {
    const filteredData = products.filter((item) => {
      return item.quantity <= 2 ? item : "";
    });
    console.log(filteredData);
    return (
      <div>
        <table border={1}>
          <tr>
            <th>Name of Item</th>
            <th>Price of Item</th>
            <th>Quantity </th>
          </tr>
          {filteredData.map((item) => {
            return (
              <tr>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default FilterData;