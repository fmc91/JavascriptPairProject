


class MineSweeperCell
{
    constructor(x, y, hasMine) {
        this.x = x;
        this.y = y;
        this.hasMine = hasMine;
        this.isFlagged = false;
        this.mineCount = 0;
    }
}

var IsGameOver;
var sum = 0;
var mineTracker = 0;


//Set up the game
var cells;
newGame();



function newGame() {

    document.getElementById("Game-Status").innerHTML = "";
    IsGameOver = false;
    sum = 0;
    mineTracker = 0;
    cells = new Array(4);
    for (var i = 0; i < cells.length; i++) {
        cells[i] = new Array(4);
        for (var j = 0; j < cells[i].length; j++)
        {
            var randomNumber = Math.random();
    
            var hasMine;
            if (randomNumber < 1 / 4) {
                hasMine = true;
                mineTracker += 1;
            }
            else {
                hasMine = false;
            }
            cells[i][j] = new MineSweeperCell(i, j, hasMine);
            getGridCell(i, j).style.backgroundColor = "darkgrey";
        }
    }
    var gridcells = document.getElementsByClassName("cell");
    for (var c of gridcells)
    {
        c.innerHTML = "";
    }
}


function clickOnCell(gridCell) {

    if (IsGameOver == true)
    {
        return;
    }
    var x = gridCell.getAttribute('data-x');
    var y = gridCell.getAttribute('data-y');
    

    if (cells[x][y].hasMine)
    {
        gridCell.style.backgroundColor = "red";
        document.getElementById("Game-Status").innerHTML = "Game Over";
        IsGameOver = true;
    }
    else if (gridCell.style.backgroundColor == "red" || gridCell.style.backgroundColor == "green")
    {
        return;
    }
    else 
    {
        gridCell.style.backgroundColor = "green";
        sum += 1;
        gridCell.innerHTML = sum;
        if (sum == 16 - mineTracker)
        {
            document.getElementById("Game-Status").innerHTML = "You Win!";
            IsGameOver = true;
        }
    }
}

function getGridCell(x, y)
{
    return document.querySelector('[data-x="' + x +'"][data-y="' + y +'"]');
}
