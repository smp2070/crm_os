import React from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data, className }) => {
    return (
        <table className={className}>
            <TableHead columns={columns} sortColumn={sortColumn} onSort={onSort} />
            <TableBody columns={columns} data={data} />
        </table>
    );
};

export default Table;
