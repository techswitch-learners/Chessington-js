import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }
    getMove(location){
        let locationArr = [0, 1, 2, 3, 4, 5, 6, 7];

        let rowLocation = locationArr.filter(item => item != location.row);
        let colLocation = locationArr.filter(item => item != location.col);

        let newArray = [];
        for (let i = 0; i < 7; i++){
            newArray.push(Square.at(location.row, colLocation[i]))
        }

        for (let j = 0; j < 7; j++){
            newArray.push(Square.at(rowLocation[j], location.col))
        }
        return newArray;
    }

    getIndexOfPiece(board, possiableMove){
        let indexOfFriendlyPiece;
        for (let i = 0; i < possiableMove.length; i++){
            if(board.getPiece(possiableMove[i])){
                indexOfFriendlyPiece = i;

            }
        }
        return indexOfFriendlyPiece
    }
    checkAnyPiece (board, possiableMove){
        for (let move of possiableMove) {
            if(board.getPiece(move)){
                return true;
            }
        }
    }
    getAvailableMoves(board) {
        let location = board.findPiece(this);

        let possiableMove = this.getMove(location);

        if(this.checkAnyPiece(board, possiableMove)){
            let index = this.getIndexOfPiece(board, possiableMove)
            possiableMove.splice(index + 1, 1);
        }
        return possiableMove;
    }
}
