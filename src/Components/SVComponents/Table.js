import React, { useState } from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';
import { Link } from 'react-router-dom';
import './Table.css';

const DefaultColumnFilter = ({ column: { filterValue, setFilter } }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterIconClick = (e) => {
    e.stopPropagation()
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="filter-container">
      <button onClick={handleFilterIconClick} className="filter-icon">
        🔍
      </button>
      {isFilterOpen && (
        <input
          value={filterValue || ''}
          onChange={(e) => setFilter(e.target.value || undefined)}
          placeholder={`Search...`}
          className="filter-input"
          onClick={(e) => {e.stopPropagation()}}
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
