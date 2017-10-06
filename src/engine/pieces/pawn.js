import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let locationRock = board.findPiece(board.pawn)
        return locationRock;
        // if (this.player === Player.WHITE && location.row === 1) {
        //     return [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
        // } else if (this.player === Player.WHITE && location.row != 1) {
        //     return [Square.at(location.row + 1, location.col)]
        // } else if (this.player === Player.BLACK && location.row === 6) {
        //     return [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
        // } else if (this.player === Player.BLACK && location.row != 6) {
        //     return [Square.at(location.row - 1, location.col)]
        // }
    }
}
