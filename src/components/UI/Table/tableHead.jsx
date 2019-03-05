import React, { Component } from "react";

// columns: array
// sortColumn: object
// onSort: function

class TableHead extends Component {

    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };

    renderSortIcon = column => {
        const { sortColumn } = this.props;

        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
        return <i className="fa fa-sort-desc" />;
    };

    renderRow = column => {
        if (this.props.sortColumn) {
            return (
                <th
                    className="clickable"
                    key={column.path || column.key}
                    onClick={() => this.raiseSort(column.path)}
                >
                    {column.label} {this.renderSortIcon(column)}
                </th>
            )
        };
        return <th key={column.path || column.key}>{column.label}</th>;
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column => this.renderRow(column))}
                </tr>
            </thead>
        );
    }
}

export default TableHead;
