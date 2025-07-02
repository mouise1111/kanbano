import { Board } from "../../Board";

export interface IBoardRepository{
  save(board: Board): Promise<Board>;
  findById(boardId: string): Promise<Board | null>;
  findByUserId(userId: string): Promise<Board[]>;
}
