import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Link } from 'react-router-dom';
import './Table.css'; // External CSS for further customization

const Table = ({ columns, data, path }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

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
