import Player from "../player";

export default class Piece {
    constructor(player) {
        this.player = player;
        this.opposingPlayer = this.player === Player.WHITE ? Player.BLACK : Player.WHITE;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
