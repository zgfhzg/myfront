'use client';
// components/Table.tsx
import React from 'react';
import { useTable, Column } from 'react-table';

interface TableProps<T extends object> {
    columns: Column<T>[];
    data: T[];
}

const Table = <T extends object>({ columns, data }: TableProps<T>) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                    {headerGroup.headers.map((column, j) => (
                        <th {...column.getHeaderProps()} key={j}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row);
                return (
                    // eslint-disable-next-line react/jsx-key
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => (
                            // eslint-disable-next-line react/jsx-key
                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        ))}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default Table;
