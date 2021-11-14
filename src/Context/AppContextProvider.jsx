import React, { useState, useReducer } from "react";
import { AppContext } from "./App-Context";
import { employeeListReducer } from "../Reducers/employeeListReducer";

const AppContextProvider = (props) => {
  //create state for managing the employeeList
  const [employeeList, dispatchEmployeeList] = useReducer(employeeListReducer, {
    grandTotal: 76.92,
    employees: [
      {
        employeeId: 1,
        firstName: "Pat",
        lastName: "Johnson",
        email: "pjohnson@gmail.com",
        phoneNumber: 5555555555,
        addressLine1: "123 Fourth St",
        addressLine2: "",
        city: "Schaumburg",
        state: "Illinois",
        zip: 60014,
        costPerCheck: 38.46,
        dependents: [
          {
            dependentId: 1,
            dependentType: "Spouse",
            firstName: "Jaimie",
            lastName: "Johnson",
            email: "pjohnson@gmail.com",
            phoneNumber: 6666666666,
            addressLine1: "123 Fourth St",
            addressLine2: "",
            city: "Schaumburg",
            state: "Illinois",
            zip: 60014,
            costPerCheck: 19.23,
          },
          {
            dependentId: 2,
            dependentType: "Child",
            firstName: "Jimmy",
            lastName: "Johnson",
            email: "",
            phoneNumber: 0,
            addressLine1: "123 Fourth St",
            addressLine2: "",
            city: "Schaumburg",
            state: "Illinois",
            zip: 60014,
            costPerCheck: 19.23,
          },
        ],
      },
    ],
  });
  //create state for opening the add employee dialog
  const [showAddEmployeeDialog, setShowAddEmployeeDialog] = useState(false);

  //handler function for adding an item to the employeeList
  const employeeListAddHandler = (item) => {
    //ensure the item is non-empty
    if (item) {
      //dispatch the item to the reducer
      dispatchEmployeeList({ type: "ADD_TO_EMPLOYEE_LIST", payload: item });
    }
  };
  //handler function for showing the add employee dialog
  const addEmployeeDialogHandler = (isOpen) => {
    setShowAddEmployeeDialog(isOpen);
  };
  return (
    <AppContext.Provider
      value={{
        employeeList,
        employeeListAddHandler,
        showAddEmployeeDialog,
        addEmployeeDialogHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
