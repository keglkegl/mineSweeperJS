import React from 'react';
import {createField} from './createField.js';
import {GameBoard} from './GameBoard.js';
import {GameInformation} from './GameInformation.js';
import './css/Game.css';

export class Game extends React.Component {
  constructor(props){
    super(props);
    this.numberOfMines = 51;
    this.state = {
      mineFieldSetup : [] = createField(15, 15, this.numberOfMines),
      turn : true,
      scorePlayer1: 0,
      scorePlayer2: 0,
      player1Name: 'Player 1',
      player2Name: 'Player 2',
    }
  }

  render(){
    return ([
        <div className="winText"> To win you must find 26 mines</div>,

    // Here we are creating component that has information about the game, player names, score,...
        <div
          key="GameInformation"
          className="GameInformation">
            <GameInformation
              player1Name={this.state.player1Name}
              player2Name={this.state.player2Name}
              turn={this.state.turn}
              scorePlayer1={this.state.scorePlayer1}
              scorePlayer2={this.state.scorePlayer2}
              changePlayer1Name={(name) => this.changePlayer1Name(name)}
              changePlayer2Name={(name) => this.changePlayer2Name(name)}
            />
        </div>,

    //Here we are creating compont that conating whole board of the game
        <div
          key="GameBoard"
          className="GameBoard">
            <GameBoard
              mineFieldSetup={this.state.mineFieldSetup}
              player1Name={this.state.player1Name}
              player2Name={this.state.player2Name}
              scorePlayer1={this.state.scorePlayer1}
              scorePlayer2={this.state.scorePlayer2}
              changeTurn={(turnChange) => this.setState({turn: turnChange})}
              changeScore={() => this.changeScore()}
              revealCell={(newField) => this.setState({mineFieldSetup: newField})}
              turn={this.state.turn}
              win={() => this.win()}
            />
        </div>
      ]);
  }

  //When one one of the players find > 25 mines method is called, that can reset the game
  win (){
    if(this.state.turn){

      //Alert who has won and suggestion of restarting the game
      if(window.confirm(this.state.player1Name + ' has won the game, do you wish to restart it?')){
        this.numberOfMines = 71;
        this.setState({mineFieldSetup: createField(15, 15, this.numberOfMines)});
        this.setState({turn: true});
        this.setState({scorePlayer1: 0});
        this.setState({scorePlayer2: 0});
      }
    }
    else{
      //Alert who has won and suggestion of restarting the game
      if(window.confirm(this.state.player2Name + ' has won the game, do you wish to restart it?')){
        this.numberOfMines = 51;
        this.setState({mineFieldSetup: createField(15, 15, this.numberOfMines)});
        this.setState({turn: true});
        this.setState({scorePlayer1: 0});
        this.setState({scorePlayer2: 0});
      }
    }
    return;
  }

  //Methods called when user types new name
  changePlayer1Name(name){
      return this.setState({player1Name: name});
  }

  changePlayer2Name(name){
      return this.setState({player2Name: name});
  }

  //Method called, when mine is found
  changeScore(){
    var tempScore = 0;
    if(this.state.turn){
      tempScore = this.state.scorePlayer1 + 1;
      return this.setState({scorePlayer1: tempScore});
    }
    else{
      tempScore = this.state.scorePlayer2 + 1;
      return this.setState({scorePlayer2: tempScore});
    }
  }
}
