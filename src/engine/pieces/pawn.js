import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    


    getAvailableMoves(board) {
        let location = board.findPiece(this) //Pawn : (6, 3)  blockPiece : (5, 3)
        let squareAhead;

        let blockingPieceArr = [];
        for (let i = 0; i < 2; i++){
            if (board.getPiece(squareAhead[i])) {
                blockingPieceArr.push(1); // 1 For not empty, 0 for empty
            } else {
                blockingPieceArr.push(0)
            }
        }
        
        if(this.player === Player.BLACK) {
            squareAhead = [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
            
        } else {
            squareAhead = [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]

        }

        
        // blockingPieceArr = [0, 1]
        if (blockingPieceArr.includes(1) && blockingPieceArr[0] === 1){
            return []; 
        } else if(blockingPieceArr[0] === 0) {
            return [Square.at(location.row - 1, location.col)];
        }
    

        if (this.player === Player.WHITE && location.row === 1) {
            return [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
        } else if (this.player === Player.WHITE && location.row != 1) {
            return [Square.at(location.row + 1, location.col)]
        } else if (this.player === Player.BLACK && location.row === 6) {
            return [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
        } else if (this.player === Player.BLACK && location.row != 6) {
            return [Square.at(location.row - 1, location.col)]
        }
    }
}

