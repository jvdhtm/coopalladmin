import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import { useTable } from 'react-table'
import classNames from 'classnames';

// Components
const Wrapper = styled.div`
  ${style}
`;
const Table = ({ columns, data, className  ,...props }) => {
    const Class = classNames('table', className);
    console.log(columns);
    console.log(data);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      })
    return  <Wrapper className={Class}>
                <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(
                    (row, i) => {
                        prepareRow(row);
                        return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                        )}
                    )}
                </tbody>
                </table>
            </Wrapper> 
            
}

Table.propTypes = {
    columns: PropTypes.any,
    data: PropTypes.any,
    className: PropTypes.string,
};


export default Table;
