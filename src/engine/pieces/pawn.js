import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let moves = [];
        if (this.player === Player.WHITE) {
            if (location.row === 1) {
                moves.push(Square.at(location.row + 2, location.col))
            } 
             moves.push(Square.at(location.row + 1, location.col))
            
        } else {
            if (location.row === 6){
                moves.push(Square.at(location.row - 2, location.col))
            }
            moves.push(Square.at(location.row - 1, location.col))
        } 
        return moves;
    }
}
