const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{

constructor(field){
this._field = field;
this._position = [0,0];//This represent the player position in the array. the first represent x, the second represent y.
}

get field(){
    console.log(this._field.join("\n"));
}
//Now we need to create a game method, that start the game, we need a method that checks weather we won or not, and one that update the fields and the player position
get position(){
    return this._position;
}

set position(position){
this._position = position;
}

//method for moving the player in all direction

move_left(){
    this._position[1] -= 1;
}
move_right(){
    this._position[1] += 1;
}
move_up(){
    this._position[0] -=1;
}
move_down(){
    this._position[0] +=1;

}

//Now we develop function for asking user input and doing what he is asking.
start_game(){
    let win = null;// We don't know yet.
    while(true){
//Ask the user where he wants to move
this.field;//Print the current field.
let choice = prompt("Where do you want to go?(l,r,u,d): "); //Ask for a value

if(choice ==="l"){
this.move_left();
}
else if(choice === "r"){
    this.move_right();
}
else if(choice === "u"){
    this.move_up();
}
else if(choice === "d"){
    this.move_down();
}
else{
    console.log("Wrong letter, try again.");
}
//Now, we check weather we won or lost or neither and therefore will continue.
let [x,y] = this.position;
if(this._field[x][y] ===hat){
    console.log("You won.");
    break;
}
else if(this._field[x][y] ===hole){
    console.log("You hit a mine, you lose.");
    break;
}




this._field[x][y] = "*";




   


}
}





}




const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.start_game();