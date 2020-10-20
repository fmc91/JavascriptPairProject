// JavaScript source code
class MineSweeperCell
{
    constructor(x, y, hasMine)
    {
        this.x = x;
        this.y = y;
        this.hasMine = hasMine;
        this.isFlagged = false;
        this.mineCount = 0;
    }
}

var cells = new Array(4);
for (var i = 0; i < cells.length; i++)
{
    cells[i] = new Array(4);
    for (var j = 0; j < cells[i].length; j++)
    {
        var randomNumber = Math.random();
        if (randomNumber < 1 / 4) {
            var hasMine = true;
        }
        else
        {
            var hasMine = false;
        }
        cells[i][j] = new MineSweeperCell(i, j, hasMine);
        var gridCell = document.querySelectorAll('[data-x =' + i +']')
    }
}
