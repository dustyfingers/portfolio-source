import React from 'react';

import Cell from './Cell';

const Board = (props) => {
    const { board } = props;

    // returns true if the given number num appears already in the specified column in this puzzle
    // returns false otherwise
    const usedInCol = (puzzleArr, num, currentColIdx) => {
        let currentCol = [];

        for (let i = 0; i < puzzleArr.length; i++) {
            let colValue = puzzleArr[i][currentColIdx];
            currentCol.push(colValue);
        }

        if (currentCol.includes(num)) return true;
        else return false;
    }

    // returns true if the given number num appears already in the specified row in this puzzle
    // returns false otherwise
    const usedInRow = (puzzleArr, num, currentRowIdx) => {
        let currentRow = puzzleArr[currentRowIdx];
        let rowContainsNum = false;

        for (let i = 0; i < currentRow.length; i++) {
            if (currentRow.includes(num)) rowContainsNum = true;
        }
        return rowContainsNum;
    }

    // returns true if the given number num appears already in the specified box (b1-b9) in this puzzle
    // returns false otherwise
    const usedInBox = (puzzleArr, num, box) => {
        let boxContainsNum = false;
        switch (box) {
            case 'b1':
                // check box b1 for num
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (puzzleArr[i][j] === num) {
                            boxContainsNum = true;
                            break;
                        }
                    }
                    if (boxContainsNum) break;
                }
                return boxContainsNum;

            case 'b2':
                // check box b2 for num
                for (let i = 0; i < 3; i++) {
                    for (let j = 3; j < 6; j++) {
                        if (puzzleArr[i][j] === num) {
                            boxContainsNum = true;
                            break;
                        }
                    }
                    if (boxContainsNum) break;
                }
                return boxContainsNum;

            case 'b3':
                // check box b3 for num
                for (let i = 0; i < 3; i++) {
                    for (let j = 6; j < 9; j++) {
                        if (puzzleArr[i][j] === num) {
                            boxContainsNum = true;
                            break;
                        }
                    }
                    if (boxContainsNum) break;
                }
                return boxContainsNum;

            case 'b4':
                // check box b4 for num
                for (let i = 3; i < 6; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (puzzleArr[i][j] === num) {
                            boxContainsNum = true;
                            break;
                        }
                    }
                    if (boxContainsNum) break;
                }
                return boxContainsNum;

            case 'b5':
                // check box b5 for num
                for (let i = 3; i < 6; i++) {
                    for (let j = 3; j < 6; j++) {
                        if (puzzleArr[i][j] === num) {
                            boxContainsNum = true;
                            break;
                        }
                    }
                    if (boxContainsNum) break;
                }
                return boxContainsNum;

            case 'b6':
                // check box b6 for num
                for (let i = 3; i < 6; i++) {
                    for (let j = 6; j < 9; j++) {
                        if (puzzleArr[i][j] === num) {
                            boxContainsNum = true;
                            break;
                        }
                    }
                    if (boxContainsNum) break;
                }
                return boxContainsNum;

            case 'b7':
                // check box b7 for num
                for (let i = 6; i < 9; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (puzzleArr[i][j] === num) {
                            boxContainsNum = true;
                            break;
                        }
                    }
                    if (boxContainsNum) break;
                }
                return boxContainsNum;

            case 'b8':
                // check box b8 for num
                for (let i = 6; i < 9; i++) {
                    for (let j = 3; j < 6; j++) {
                        if (puzzleArr[i][j] === num) {
                            boxContainsNum = true;
                            break;
                        }
                    }
                    if (boxContainsNum) break;
                }
                return boxContainsNum;
                
            case 'b9':
                // check box b9 for num
                for (let i = 6; i < 9; i++) {
                    for (let j = 6; j < 9; j++) {
                        if (puzzleArr[i][j] === num) {
                            boxContainsNum = true;
                            break;
                        }
                    }
                    if (boxContainsNum) break;
                }
                return boxContainsNum;
        }
    }

    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    {board.map((item, index) => (<tr className="sudoku-row d-flex flex-wrap" key={index}>{item.map((currentCellValue, index) => <Cell cellValue={currentCellValue} key={index}/>)}</tr>))}
                </tbody>
            </table>
        </div>
    );
};

export default Board;