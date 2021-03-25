"use strict";

var _employee = require("./employee.js");

function getEmployeeInformation(inputSalary) {
  _employee.Employee.salary = inputSalary;
  console.log("Cadre: " + (0, _employee.getCadre)());
  console.log("Tax: " + (0, _employee.calculateTax)());
  console.log("Benefits: " + (0, _employee.getBenefits)());
  console.log("Bonus: " + (0, _employee.calculateBonus)());
  console.log("Reimbursement Eligibility: " + (0, _employee.reimbursementEligibility)() + "\n");
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);