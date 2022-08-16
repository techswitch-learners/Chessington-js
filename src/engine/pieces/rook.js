import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let locationArr = [0, 1, 2, 3, 4, 5, 6, 7];
        let rowLocation = locationArr.filter(item => item != location.row);
        let colLocation = locationArr.filter(item => item != location.col);
        return new Array(Square.at(location.row, colLocation[0]), Square.at(location.row, colLocation[1]), Square.at(location.row, colLocation[2]), Square.at(location.row, colLocation[3]), Square.at(location.row, colLocation[4]), Square.at(location.row, colLocation[5]), Square.at(location.row, colLocation[6]),
        // Vertical
        Square.at(rowLocation[0], location.col), Square.at(rowLocation[1], location.col), Square.at(rowLocation[2], location.col), Square.at(rowLocation[3], location.col), Square.at(rowLocation[4], location.col), Square.at(rowLocation[5], location.col), Square.at(rowLocation[6], location.col))
    }
}
