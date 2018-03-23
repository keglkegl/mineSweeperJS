import React from 'react';
import {Cell} from './Cell.js';
import {handleClickOnBoard} from './handleClick.js';
import './css/GameBoard.css';

export class GameBoard extends React.Component{
  constructor(props) {
    super(props);

    //Creating MineFieldBoard array which has columns that will be filled with rows later
    this.mineFieldBoard = new Array(this.props.mineFieldSetup.length).fill(null);
  }

  //Method of creating MineFieldBoard which will render
  createMineFieldBoard(){
    for (var i=0; i<this.props.mineFieldSetup.length; i++){
      this.mineFieldBoard[i] = <div key={i.toString()}>{this.createRow(i)}</div>;
    }
    return this.mineFieldBoard;
  }

  //Method for revealing cell when player click, IT ALSO CALL FOR ALL CHANGES in the game state variables
  revealCell (x, y){
    //Making a copy of current field which also has revealed cell
    var tempArray = [] = handleClickOnBoard(x, y, this.props.mineFieldSetup);
    this.props.revealCell(tempArray);

    //Asking if revealed is mine or not, and making changes
    if(this.props.mineFieldSetup[x][y][0] === 9){

      //Activates when player 1 wins
      if((this.props.turn) && ((this.props.scorePlayer1+1) > 25)){
        this.props.win();
        return;
      }

      //Activates when player 2 wins
      else if((!this.turn) && ((this.props.scorePlayer2+1) > 25)){
        this.props.win();
        return;
      }
      return this.props.changeScore();
    }
    else{
      return this.props.changeTurn(!this.props.turn);
    }
  }

  //Method which creates row and place it on MineFieldBoard array
  createRow(u){
    var tempRow = new Array(this.props.mineFieldSetup[u].length).fill(null);
    for (var j=0; j<this.props.mineFieldSetup[u].length; j++){
        tempRow[j] = <Cell key={u.toString()+j.toString()}
                          x={u} //we save coordinate x
                          y={j} //we save coordinate y
                          mineFieldCellNumber={this.props.mineFieldSetup[u][j][0]}
                          mineFieldCellHidden={this.props.mineFieldSetup[u][j][1]}
                          onClick={(x, y) => this.revealCell(x, y)}
                        />;
    }
    return tempRow;
  }

  render(){
    return this.createMineFieldBoard();
  }
}
