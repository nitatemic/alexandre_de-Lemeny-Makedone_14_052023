import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EmployeesList from './components/EmployeesList';
import Error from './components/Error';
import './scss/main.scss';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div className="headerAndMain">
            <main className="main">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/employee-list" element={<EmployeesList />} />
                {/* Route 404 */}
                <Route path="*" element={<Error />} />
              </Routes>
            </main>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
