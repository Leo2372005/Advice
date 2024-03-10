import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import React from "react";
const Update = () => {
  const [data, setData] = useState({
    Name: "Rajasingam",
    Age: 18,
    Gender:"Male",
    MarriedStatus:false,
    Country: "India",
    Course: "Full-Stack",
  });
  function allData(e)
  {
    const Name=e.target.name
    const value =e.target.type==="checkbox"?e.target.checked:e.target.value
    setData({...data,[Name]:value})
  }
  return (
    <>
      <div id="container">
        <h1 id="head">Details</h1>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{data.Name}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{data.Age}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{data.Gender}</td>
            </tr>
            <tr>
              <td>MarriedStatus</td>
              <td>{data.MarriedStatus?"Married":"Not-Married"}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{data.Country}</td>
            </tr>
            <tr>
              <td>Course</td>
              <td>{data.Course}</td>
            </tr>
          </tbody>
        </table>

        <form>
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Enter Your Name"
            onChange={allData}
          />
          <input
            type="number"
            name="Age"
            id="Age"
            placeholder="Enter your Age"
            onChange={allData}
          />

          <div id="r_but">
            <label htmlFor="Male">
              <input type="radio" name="Gender" onChange={allData} id="Male" checked={data.Gender==="Male"} value="Male" />
              &nbsp;&nbsp;Male
            </label>
            <label htmlFor="Female">
              <input type="radio" name="Gender" onChange={allData} id="Female" checked={data.Gender==="Female"}  value="Female"/>
              &nbsp;&nbsp;Female
            </label>
          </div>

          <div id="c_box">
            <label htmlFor="Married">
              <input type="checkbox" onChange={allData} name="MarriedStatus" id="Married" />
              &nbsp;&nbsp;Married
            </label>
          </div>
          <input list="Select-country" onChange={allData} name="Country" id="Country-input" placeholder="" />
          <datalist id="Select-country">
            <option value="India"></option>
            <option value="USA"></option>
            <option value="UK"></option>
            <option value="Australia"></option>
          </datalist>
        </form>
        <textarea name="Course" id="" onChange={allData}></textarea>
      </div>
    </>
  );
};

export default Update;
