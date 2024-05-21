import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EmployeesList() {
  const itemsPerPage = 10;
  const employees = useSelector((state) => state.employees);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrer les données en fonction du terme de recherche
  const filteredData = employees.filter((item) => item.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
  // Obtenir les éléments à afficher sur la page actuelle
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Gérer le changement de page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Gérer le changement de terme de recherche
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Réinitialiser la page lors de la recherche
  };

  return (
    <div>
      <h1>Current Employees</h1>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table className="table">
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
        </thead>
        <tbody>
        {currentData.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.department}</td>
            <td>{employee.dateOfBirth}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zipCode}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <ul className="pagination">
        {Array(Math.ceil(filteredData.length / itemsPerPage))
          .fill()
          .map((_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
      </ul>
      <Link to="/" className="error-link">Home</Link>
    </div>
  );
}
