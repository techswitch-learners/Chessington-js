import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Rook from './rook';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    
    getBlockingArr(board, SquareAhead) {
        let blockingPieceArr = [];
        for (let i = 0; i < 2; i++){
            if (board.getPiece(SquareAhead[i])) {
                blockingPieceArr.push(1); // 1 For not empty, 0 for empty
            } else {
                blockingPieceArr.push(0)
                }
            }
        return blockingPieceArr;
    }

    checkDiagonallyToTake (board, DiagonallySquare, symbol){
        // const whiteDiagonallySquare = [Square.at(location.row + 1, location.col - 1), Square.at(location.row + 1, location.col + 1)]
        let blockingPieceArr = [];
        for (let i = 0; i < DiagonallySquare.length; i++){
            if (board.getPiece(DiagonallySquare[i])) { //no piece will get 'undefined'
                if (board.getPiece(DiagonallySquare[i]).player.toString() == symbol){
                    blockingPieceArr.push(1); // 1 For not empty, 0 for empty
                }
            } else {
                blockingPieceArr.push(0)
            }
        }
        return blockingPieceArr;
    }

    

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const squareAheadObj = {
            'blackSquareAhead': [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)],
            'whiteSquareAhead': [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)],
            'blackDiagonallySquare': [Square.at(location.row - 1, location.col - 1), Square.at(location.row - 1, location.col + 1)],
            'whiteDiagonallySquare': [Square.at(location.row + 1, location.col - 1), Square.at(location.row + 1, location.col + 1)],
            'symbolForBlack': 'Symbol(white)',
            'symbolForWhite': 'Symbol(black)'
        }
        // let SquareToCheck = this.getSquareToCheck (location, this.player)        
        if(this.player === Player.BLACK && location.row != 0) {
            let blockingPieceArr = this.getBlockingArr(board, squareAheadObj.blackSquareAhead)

            let diagonallyToTake = this.checkDiagonallyToTake(board, squareAheadObj.blackDiagonallySquare, squareAheadObj.symbolForBlack)
            if(blockingPieceArr[0] === 1){
                return [];
            } else if(location.row != 6 && blockingPieceArr[0] != 1 && !diagonallyToTake.includes(1)){
                return [Square.at(location.row - 1, location.col)]
            } else if(location.row != 6 && blockingPieceArr[0] != 1 && diagonallyToTake.includes(1)){
                return [Square.at(location.row - 1, location.col), squareAheadObj.blackDiagonallySquare[diagonallyToTake.indexOf(1)]];
            } else if(location.row != 6 && blockingPieceArr[0] != 1 ){
                return [Square.at(location.row - 1, location.col)]
            } else if (location.row === 6 && !blockingPieceArr.includes(1) ){
                return [Square.at(location.row - 1, location.col), Square.at(location.row - 2, location.col)]
            } else if (location.row === 6 && blockingPieceArr[1] == 1){
                return [Square.at(location.row - 1, location.col)]
            }
        } else if (this.player === Player.BLACK && location.row == 0){
            return []
        } else if (this.player === Player.WHITE && location.row != 7){
            let blockingPieceArr = this.getBlockingArr(board, squareAheadObj.whiteSquareAhead);

            let diagonallyToTake = this.checkDiagonallyToTake(board, squareAheadObj.whiteDiagonallySquare, squareAheadObj.symbolForWhite)

            if(blockingPieceArr[0] === 1){
                return [];
            } else if(location.row != 1 && blockingPieceArr[0] != 1 && !diagonallyToTake.includes(1)){
                return [Square.at(location.row + 1, location.col)]
            } else if(location.row != 1 && blockingPieceArr[0] != 1 && diagonallyToTake.includes(1)){
                return [Square.at(location.row + 1, location.col), squareAheadObj.whiteDiagonallySquare[diagonallyToTake.indexOf(1)]];
            } else if(location.row != 1 && blockingPieceArr[0] != 1 ){
                return [Square.at(location.row + 1, location.col)]
            } else if (location.row === 1 && !blockingPieceArr.includes(1) ){
                return [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
            } else if (location.row === 1 && blockingPieceArr[1] == 1){
                return [Square.at(location.row + 1, location.col)]
            }
                // if(blockingPieceArr[0] === 1){
                //     return [];
                // } else if (location.row === 1 && !blockingPieceArr.includes(1)){
                //     return [Square.at(location.row + 1, location.col), Square.at(location.row + 2, location.col)]
                // } else if (location.row === 1 && blockingPieceArr[1] == 1){
                //     return [Square.at(location.row + 1, location.col)]
                // } else if (location.row != 1 && blockingPieceArr[0] != 1) {
                //     return [Square.at(location.row + 1, location.col)]
                // }
        } else if(this.player === Player.WHITE && location.row == 7){
            return []
        }
    }

}
