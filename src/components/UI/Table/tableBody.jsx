import React, { Component } from "react";

class TableBody extends Component {
    
    renderCell = (item, col) => (col.content) ? col.content(item) : item[col.path];

    createKey = (item, col) => item.id + (col.path || col.key);

    render() {
        const { data, columns } = this.props;

        if (!data) return null;
        
        return (
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        {columns.map(col => (
                            <td key={this.createKey(item, col)}>
                                {this.renderCell(item, col)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default TableBody;