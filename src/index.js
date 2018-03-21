import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Cell(props){
    if (props.mineFieldCellHidden){
      if(props.mineFieldCellNumber === null){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/nula.png" /></button>);
      }
      else if (props.mineFieldCellNumber === 1){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/ena.png" /></button>);
      }
      else if (props.mineFieldCellNumber === 2){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/dva.png" /></button>);
      }
      else if (props.mineFieldCellNumber === 3){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/tri.png" /></button>);
      }
      else if (props.mineFieldCellNumber === 4){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/stiri.png" /></button>);
      }
      else if (props.mineFieldCellNumber === 5){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/pet.png" /></button>);
      }
      else if (props.mineFieldCellNumber === 6){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/sest.png" /></button>);
      }
      else if (props.mineFieldCellNumber === 7){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/sedem.png" /></button>);
      }
      else if (props.mineFieldCellNumber === 8){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/osem.png" /></button>);
      }
      else if (props.mineFieldCellNumber === 9){
        return(<button className="Gumb"><img className="Gumb" src="/imgs/mina.png" /></button>);
      }
    }
    else{
      return(<button className="Gumb"><img className="Gumb" src="/imgs/hidden.png" /></button>);
    }
    console.log(props.mineFieldCell);
}

class GameBoard extends React.Component{
  constructor(props) {
    super(props);
    this.mineFieldBoard = [
      ,
      ,
    ];
    this.state = {
      mineFieldSetup : [
        [[3, true], [2, true], [3, true]],
        [[4, true], [5, true], [6, true]],
        [[7, true], [8, true], [9, true]]
      ]
    };
  }

  row(u){
    var temp = new Array(this.state.mineFieldSetup[u].length).fill(null);
    //temp = this.tempVar.map(x => null);
    for (var j=0; j<this.state.mineFieldSetup[u].length; j++){
        temp[j] = <Cell key={u.toString()+j.toString()} mineFieldCellNumber={this.state.mineFieldSetup[u][j][0]} mineFieldCellHidden={this.state.mineFieldSetup[u][j][1]}/>;
      }

    return temp;
  }

  render(){
    for (var i=0; i<this.state.mineFieldSetup.length; i++){
      this.mineFieldBoard[i] = <div key={i.toString()}>{this.row(i)}</div>;
    }
    return this.mineFieldBoard;
  }
}
class Game extends React.Component {
  render(){
    return (
        <GameBoard />
    );
  }
}


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
