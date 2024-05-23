import React from 'react';
import { useState } from 'react';
import ReactDOM from "react-dom";


function Checklist() { 

  
    // State with list of all checked item
    const [checked, setChecked] = useState([]);
    const checkList = ["Are you a citizen","Are you over 21"];
  
    // Add/Remove checked item from list
    const handleCheck = (event) => {
      var updatedList = [...checked];
      if (event.target.checked) {
        updatedList = [...checked, event.target.value];
      } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
    };
  
    // Generate string of checked items
    const checkedItems = checked.length
      ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  return (
    <div className="container app mt-5">
      <div className="checkList">
        <div className="title fw-bold mb-2 fs-2">Your CheckList:</div>
        <div className="list-container">
          {checkList.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleCheck}/>
              <span className={isChecked(item)}>{item}</span>
            </div>
          ))}
           </div>
      </div>

      <div className='fw-bold fs-4'>
        {`Items checked are: ${checkedItems}`}
      </div>
    </div>
  );
}

export default Checklist;
