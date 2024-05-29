import { ADD_EMPLOYEE } from './actions';

const initialState = {
  employees: [],
};

function employees(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, { id: state.employees.length + 1, ...action.employee }],
      };
    default:
      return state;
  }
}

export default employees;
