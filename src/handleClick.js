//This function is called when player reveals cell, it asks if there is
//empty cell or cell with number, if empety recursive function is called
export function handleClickOnBoard(x, y, field){
  if(field[x][y][0] === 0){
    field = revealNeighbourCells(x, y, field);
  }
  else{
    field[x][y][1] = false;
    }
  return field;
}

//recursive function for revealing all empty cells, when player hits empty cell
function revealNeighbourCells(d, f, field){
    field[d][f][1] = false;
    if ((f+1 !== field[d].length) && (field[d][f+1][1] === true)){
      field[d][f+1][1] = false;
      if(field[d][f+1][0] === 0){
        revealNeighbourCells(d, f+1, field);
      }
    }
    if ((f+1 !== field[d].length) && (d-1 !== -1) && (field[d-1][f+1][1] === true)){
      field[d-1][f+1][1] = false;
      if(field[d-1][f+1][0] === 0){
        revealNeighbourCells(d-1, f+1, field);
      }
    }
    if((d-1 !== -1) && (field[d-1][f][1] === true)){
      field[d-1][f][1] = false;
      if(field[d-1][f][0] === 0){
        revealNeighbourCells(d-1, f, field);
      }
    }
    if((d-1 !== -1) && (f-1 !== -1) && (field[d-1][f-1][1] === true)){
      field[d-1][f-1][1] = false;
      if(field[d-1][f-1][0] === 0){
        revealNeighbourCells(d-1, f-1, field);
      }
    }
    if((f-1 !== -1) && (field[d][f-1][1] === true)){
      field[d][f-1][1] = false;
      if(field[d][f-1][0] === 0){
        revealNeighbourCells(d, f-1, field);
      }
    }
    if((d+1 !== field.length) && (f-1 !== -1) && (field[d+1][f-1][1] === true)){
      field[d+1][f-1][1] = false;
      if(field[d+1][f-1][0] === 0){
        revealNeighbourCells(d+1, f-1, field);
      }
    }
    if((d+1 !== field.length) && (field[d+1][f][1] === true)){
      field[d+1][f][1] = false;
      if(field[d+1][f][0] === 0){
        revealNeighbourCells(d+1, f, field);
      }
    }
    if((d+1 !== field.length) && (f+1 !== field[d].length) && (field[d+1][f+1][1] === true)){
      field[d+1][f+1][1] = false;
      if(field[d+1][f+1][0] === 0){
        revealNeighbourCells(d+1, f+1, field);
      }
    }
  return field;
}
