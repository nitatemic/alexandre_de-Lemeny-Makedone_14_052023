export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export function addEmployee(employee) {
  return { type: ADD_EMPLOYEE, employee };
}
