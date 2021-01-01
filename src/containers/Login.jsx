import React from "react";
import "./Login.css";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      category: null,
      subCategory: null,
      expenseAmount: null,
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state, "login details");
  };
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.mySubmitHandler}>
          <h1 align="center">Expense Form</h1>
          <div className="form-block">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              name="date"
              onChange={this.myChangeHandler}
              className="form-input"
            />
          </div>
          <div className="form-block">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category"
              id=""
              name="category"
              onChange={this.myChangeHandler}
              className="form-input-select"
            >
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="form-block">
            <label htmlFor="subCategory" className="form-label">
              Sub Category
            </label>
            <select
              name="subCategory"
              id=""
              name="subCategory"
              onChange={this.myChangeHandler}
              className="form-input-select"
            >
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="form-block">
            <label htmlFor="expenseAmount" className="form-label">
              Expense Amount
            </label>
            <input
              type="number"
              name="amount"
              onChange={this.myChangeHandler}
              className="form-input"
            />
          </div>
          <div align="center">
            <input type="submit" className="form-button" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default MyForm;
