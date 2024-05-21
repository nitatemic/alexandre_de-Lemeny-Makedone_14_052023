import { createStore } from 'redux';
import employees from './reducers';

const store = createStore(employees);

export default store;
