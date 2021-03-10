import React from "react";
import { Link } from "react-router-dom";
import Board from "../components/Board";


const Sudoku = () => {
  // build sudoku board
  return (
    <section id="SudokuSection" className="d-flex align-items-center text-center main-section">
      <div className="landing-cta-section mx-auto">
        <h1>SUDOKU</h1>
        <Board />
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
