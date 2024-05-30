import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTable, useSortBy } from 'react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

export default function EmployeesList() {
  const employees = useSelector((state) => state.employees);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(10); // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(0); // Page actuelle

  /* Filtrer les données en fonction du terme de recherche et de la pagination */
  let filteredData = employees
    .filter((item) => item.firstName.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalItems = filteredData.length;

  /* Pagination */
  filteredData = filteredData.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  /* Gérer le changement de terme de recherche */
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode',
      },
    ],
    [],
  );

  function Table({ columns, data }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc
                      ? <FaSortDown />
                      : <FaSortUp />)
                      : <FaSort />}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div>
      <h1>Current Employees</h1>
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <Table columns={columns} data={filteredData} />

      {/* Pagination */}
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span> Showing elements {currentPage * pageSize + 1} - {Math.min((currentPage + 1) * pageSize, totalItems)} of {totalItems} </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages - 1 || totalPages === 0}
        >
          Next
        </button>
      </div>

      <Link to="/" className="error-link">Home</Link>
    </div>
  );
}
