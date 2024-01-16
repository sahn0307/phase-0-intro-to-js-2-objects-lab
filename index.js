// Write your solution in this file!
let employee = {
    name: "John",
    streetAddress: "123 Sesame Street"
  };
  
  // 1) Update employee Object with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // 2) Destructively update employee Object with a new key-value pair (mutating)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // 3) Delete a key-value pair from employee Object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4) Destructively delete a key-value pair from employee Object (mutating)
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  