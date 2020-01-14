class ChessGame {
  constructor() {
    this.cheesmenPerSide = { king: 1, queen: 1, rooks: 2, bishops: 2, knights: 2, pawns: 8 }
    this.chessboard = this.createBoard()
  }

  createBoard () {
    let board = new Array(8)
    // for each horizontal line
    for (let i=0; i<8; i++) {
      board[i] = new Array(8)
      // create one column 8 blocks high
      for (let j=0; j<8; j++) {
        board[i][j] = {
          chessman: null,
          color: (j+i+2)%2===0 ? 'white' : 'black'
        }
      }
    }
    return board
  }

  getDefaultPos(index) {
    let currentPiece = null
    switch(index) {
      case 0: currentPiece = 'rook'
        break
      case 7: currentPiece = 'rook'
        break
      case 1: currentPiece = 'knight'
        break
      case 6: currentPiece = 'knight'
        break
      case 2: currentPiece = 'bishop'
        break
      case 5: currentPiece = 'bishop'
        break
      case 3: currentPiece = 'queen'
        break
      case 4: currentPiece = 'king'
        break
      default: null
    }
    return currentPiece
  }

  setWhiteChessMen () {
    for (let i=0; i<this.cheesmenPerSide.pawns; i++) {
      this.chessboard[i][0].chessman = this.getDefaultPos(i)
      this.chessboard[i][1].chessman = 'pawn'
    }
  }

  setBlackChessMen () {
    for (let i=0; i<this.cheesmenPerSide.pawns; i++) {
      this.chessboard[i][6].chessman = 'pawn'
      this.chessboard[i][7].chessman = this.getDefaultPos(i)
    }
  }

  printBoard () {
    console.log(this.chessboard)
  }
}
