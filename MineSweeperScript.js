
//Set up the game
var cells;
newGame();

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

function newGame() {
    cells = new Array(4);
    for (var i = 0; i < cells.length; i++) {
        cells[i] = new Array(4);
        for (var j = 0; j < cells[i].length; j++)
        {
            var randomNumber = Math.random();
    
            var hasMine;
            if (randomNumber < 1 / 4) {
                hasMine = true;
            }
            else {
                hasMine = false;
            }
            cells[i][j] = new MineSweeperCell(i, j, hasMine);
            getGridCell(i, j).style.backgroundColor = "darkgrey";
        }
    }
}

function clickOnCell(gridCell) {

    var x = gridCell.getAttribute('data-x');
    var y = gridCell.getAttribute('data-y');

    if (cells[x][y].hasMine) {
        gridCell.style.backgroundColor = "red";
        window.alert("Unlucky! Game over!");
        newGame();
    }
    else {
        gridCell.style.backgroundColor = "green";
    }
}

function getGridCell(x, y) {
    return document.querySelector('[data-x="' + x +'"][data-y="' + y +'"]');
}
