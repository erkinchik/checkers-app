import React, { useEffect, useState } from "react";

import { Board } from "./models/board";
import { BoardComponent } from "./components";

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }

  return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
