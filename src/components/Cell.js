import React from 'react';

const Cell = (props) => {
    const {cellValue} = props;
    return (
        <td className="sudoku-cell d-flex align-items-center justify-content-center">{cellValue}</td>
    );
};

export default Cell;