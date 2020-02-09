'use strict';

const countTotalSalary = function(employees) {
  let total = 0;
  const salaryValues = Object.values(employees);
  for (const value of salaryValues) {
    total += value;
  }
  return total;
};

countTotalSalary({
  mango: 100,
  poly: 150,
  alfred: 80,
});
