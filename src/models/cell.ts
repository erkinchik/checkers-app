import { Colors } from "./colors";
import { Board } from "./board";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  board: Board;
  available: boolean;
  id: number;
  // check:

  constructor(board: Board, x: number, y: number, color: Colors) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.board = board;
    this.id = Math.random();
    this.available = false;
  }
}
