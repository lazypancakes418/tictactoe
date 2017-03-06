var prompt = require('prompt')
var board = new Array(9)
board.fill(' ')
var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
prompt.start()
var playerone
var playertwo
function getPlayers() {
  var promise = new Promise(function (resolve, reject) {
    prompt.get(['PlayerOne'], (err, text) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(text)
      playerone = text.PlayerOne
      if (playerone) {
        resolve()
      } else {
        reject(Error('Invalid Input'))
      }
    })
  })

  promise.then(() => {
    prompt.get(['PlayerTwo'], (err, text) => {
      if (err) {
        console.log(err)
        return
      }
      playertwo = text.PlayerTwo
      startGame()
    })
  })
}

const printBoard = () => {
  console.log(`
   ${board[0]}| ${board[1]} |${board[2]}
 \n ----------
  \n   ${board[3]}| ${board[4]} |${board[5]}
  \n ----------
  \n   ${board[6]}| ${board[7]} |${board[8]}`)
}


function startGame () {
  console.log('Game started')
  printBoard()
  console.log('Its player One Turn, You have symbol X. Player Two has symbol O')
  game()
}

function game = () {

}

getPlayers()