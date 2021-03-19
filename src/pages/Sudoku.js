import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Board from "../components/Board";


const Sudoku = () => {
    // build sudoku board
    let [board, setBoard] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                url: 'https://sugoku.herokuapp.com/board?difficulty=easy',
                headers: {
                'content-type': 'application/json'
                }
            };
            
            try {
                const res = await axios.request(options);
                setBoard(res.data.board);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return (
    <section id="SudokuSection" className="d-flex align-items-center text-center main-section">
        <div className="mx-auto">
        <h1>SUDOKU</h1>
        <Board board={board}/>
        <Link to="/">
            <button className="btn btn-lg landing-ctas my-2 mx-3">
            Home
            </button>
        </Link>
        </div>
    </section>
    );
}

export default Sudoku;
