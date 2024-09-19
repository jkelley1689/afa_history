import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { Link } from 'react-router-dom';

const Table = ({ columns, data, path }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table
      {...getTableProps()}
      style={{ width: '100%', border: '1px solid black', marginTop: '20px' }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              style={{
                border: '1px solid black',
                padding: '10px',
                cursor: column.canSort ? 'pointer' : 'default',
              }}
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
                      style={{ border: '1px solid black', padding: '10px' }}
                      key={cell.column.id}
                    >
                      <Link to={`/${path}/` + cell.value}>{cell.render('Cell')}</Link>
                    </td>
                  );
                } else {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{ border: '1px solid black', padding: '10px' }}
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
  );
};

export default Table;
