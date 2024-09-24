import React, { useState, useEffect, useRef } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import { Link } from 'react-router-dom';
import './Table.css';

const DefaultColumnFilter = ({ column: { filterValue, setFilter } }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef();
  const inputRef = useRef()

  const handleFilterIconClick = (e) => {
    e.stopPropagation();
    setIsFilterOpen(!isFilterOpen);
  };

  const handleInputChange = (e) => {
    setFilter(e.target.value || undefined);
  };

  const handleClickOutside = (e) => {
    if (filterRef.current && !filterRef.current.contains(e.target)) {
      setIsFilterOpen(false); // Close the filter if clicking outside
    }
  };

  useEffect(() => {
    if(isFilterOpen && inputRef.current){
      inputRef.current.focus()
    }
  },[isFilterOpen])

  useEffect(() => {
    // Add a global click event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-container" ref={filterRef}>
      <button onClick={handleFilterIconClick} className="filter-icon">
        🔍
      </button>
      {isFilterOpen && (
        <input
          ref={inputRef}
          value={filterValue || ''}
          onChange={handleInputChange}
          placeholder={`Search...`}
          className="filter-input"
          onClick={(e) => e.stopPropagation()} // Prevents the input click from closing itself
        />
      )}
    </div>
  );
};

const Table = ({ columns, data, path }) => {
  const defaultColumn = {
    Filter: DefaultColumnFilter,
  };

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
      defaultColumn,
    },
    useFilters,
    useSortBy
  );

  return (
    <div className="table-container">
      <table {...getTableProps()} className="custom-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="table-header"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  if (cell.column.id === 'label') {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="table-cell"
                        key={cell.column.id}
                      >
                        <Link to={`/${path}/` + cell.value}>{cell.render('Cell')}</Link>
                      </td>
                    );
                  } else {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="table-cell"
                        key={cell.column.id}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
