import React from 'react';

const Board = () => {
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

    const generateNumAndCheckCell = (puzzle, box, rowIdx, colIdx) => {
        // generate a random number
        let randNum = Math.floor(Math.random() * 9) + 1;
        let numUsedInBox = usedInBox(puzzle, randNum, box);
        let numUsedInRow = usedInRow(puzzle, randNum, rowIdx);
        let numUsedInCol = usedInCol(puzzle, randNum, colIdx);

        // if this number is okay to add, put it in the current cell
        if (!numUsedInBox && !numUsedInCol && !numUsedInRow) {
            puzzle[rowIdx][colIdx] = randNum;
        }

        return;
    }

    const generatePuzzle = () => {
        let puzzle = [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ];

        
        for (let i = 0; i < puzzle.length; i++) {
            for (let j = 0; j < puzzle[i].length; j++) {
                let currentBox;

                // for each cell figure out which box it is in
                // row 1
                if (((0 <= i) && (i < 3)) && ((0 <= j) && (j < 3))) currentBox = 'b1';
                if (((0 <= i) && (i < 3)) && ((3 <= j) && (j < 6))) currentBox = 'b2';
                if (((0 <= i) && (i < 3)) && ((6 <= j) && (j < 9))) currentBox = 'b3';
                // row 2
                if (((3 <= i) && (i < 6)) && ((0 <= j) && (j < 3))) currentBox = 'b4';
                if (((3 <= i) && (i < 6)) && ((3 <= j) && (j < 6))) currentBox = 'b5';
                if (((3 <= i) && (i < 6)) && ((6 <= j) && (j < 9))) currentBox = 'b6';
                // row 3
                if (((6 <= i) && (i < 9)) && ((0 <= j) && (j < 3))) currentBox = 'b7';
                if (((6 <= i) && (i < 9)) && ((3 <= j) && (j < 6))) currentBox = 'b8';
                if (((6 <= i) && (i < 9)) && ((6 <= j) && (j < 9))) currentBox = 'b9';
                console.log('current puzzle state:  ');
                console.log(JSON.stringify(puzzle));

                console.log('i:  ' + i);
                console.log('j:  ' + j);

                console.log('currentBox:  ' + currentBox);

                console.log('puzzle[i][j]:  ');
                console.log(puzzle[i][j]);

                // ! generate number and check cell
                let randNum = Math.floor(Math.random() * 9) + 1;
                puzzle[i][j] = randNum;


                // while (puzzle[i][j] === 0) {
                //     generateNumAndCheckCell(puzzle, currentBox, i, j);
                // }
            }
        }
        console.log('completed puzzle:');
        console.log(JSON.stringify(puzzle));
        // Once matrix is fully filled, remove k no. of elements randomly to complete game

    };

    generatePuzzle();

    return (
        <div>
            
        </div>
    );
};

export default Board;