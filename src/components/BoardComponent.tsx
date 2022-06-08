import React, { FC } from "react";
import { Board } from "../models/board";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {

  console.log(board);
  return (
    <div className="board">
      {board.cells.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent cell={cell} />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BoardComponent;
