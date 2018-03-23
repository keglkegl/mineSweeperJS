import React from 'react';
import './css/GameInformation.css';

export class GameInformation extends React.Component{
  constructor(props){
    super(props);
    this.handleChangePlayer1 = this.handleChangePlayer1.bind(this);
    this.handleChangePlayer2 = this.handleChangePlayer2.bind(this);
  }

  //method that calls for change in name of player 1
  handleChangePlayer1(event){
    return this.props.changePlayer1Name(event.target.value);

  }
  //method that calls for change in name of player 2
  handleChangePlayer2(event){
    return this.props.changePlayer2Name(event.target.value);
  }
  render(){
    var turn = this.props.turn;
    return ([
            //divison of player 1, name and score
            <div
              key="divPlayer1"
              className="divPlayer1">
              <input
                type="text" value={this.props.player1Name}
                onChange={this.handleChangePlayer1}
              />
              <p>score: {this.props.scorePlayer1}</p>
            </div>,

            //divison of player 2, name and score
            <div
              key="divPlayer2"
              className="divPlayer2">
              <input
                type="text" value={this.props.player2Name}
                onChange={this.handleChangePlayer2}
              />
              <p>score: {this.props.scorePlayer2}</p>
            </div>,

            //division of text who's turn is it
            <div className="whosTurn">
              <WhosTurn
                key="whosTurn"
                turn={turn}
                player1={this.props.player1Name}
                player2={this.props.player2Name}
              />
            </div>
          ]);
  }
}

//Component that generates text, who's turn is it
function WhosTurn(props){
  if(props.turn){
    return (<div>
              It is {props.player1}'s turn!
            </div>);
  }
  else{
    return (<div>
              It is {props.player2}'s turn!
            </div>);
  }
}
