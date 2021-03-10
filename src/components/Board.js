import React from 'react';
import Cell from './Cell';

const Board = () => {

    let generateLine = () => {};

    let generatePuzzle = () => {
        let firstLine = [];
        let puzzle = [];

        // generate first line at random
        for (let i = 0; firstLine.length < 9; i++) {
            let randNum = Math.floor(Math.random() * 9) + 1;

            
            if (!firstLine.includes(randNum)) {
                firstLine.push(randNum)
            }
        }
        puzzle.push(firstLine);

        // use the first line to generate the rest of the lines
        for (let i = 0; i < 8; i++) {
            let currentLine = [];

            for (let i = 0; currentLine.length < 9; i++) {
                let randNum = Math.floor(Math.random() * 9) + 1;
                
                if (!currentLine.includes(randNum)) {
                    let isNotInOtherRowsAtThisIndex = true;
                    puzzle.forEach(item => {
                        console.log(item)
                        console.log(item[i])
                        console.log(randNum)
                        if (item[i] == randNum) isNotInOtherRowsAtThisIndex = false;
                    });

                    if (isNotInOtherRowsAtThisIndex) currentLine.push(randNum);
                }
            }

            puzzle.push(currentLine);
        }

        console.log(puzzle);

        // take a number of spaces out of the puzzle at random

    };

    generatePuzzle();

    return (
        <div>
            
        </div>
    );
};

export default Board;