class Tile
{
    constructor(type)
    {
        this.type = type;
    }

    draw(context, x, y, w, h)
    {
        let colors = ['skyblue', 'black', 'red'];

        context.fillStyle = colors[this.type];
        context.fillRect(x, y, w, h);
    }
}

class TileMap
{
    constructor(tileSize)
    {
        this.tilemap = [];
        this.tileSize = tileSize;
        this.rows = 0;
        this.cols = 0;

        this.xCamera = 0;
        this.yCamera = 0;
        this.startTile = 0;
        this.numTilesToDrawWidth = 0;
        this.numTilesToDrawHeight = 0;
    }

    initTiles(lvl)
    {
        this.rows = lvl.rows;
        this.cols = lvl.cols;

        for (let row = 0; row < lvl.rows; ++row)
        {
            for (let col = 0; col < lvl.cols; ++col)
            {
                this.tilemap.push(new Tile(lvl.tiles[row * this.cols + col]));
            }
        }
    }

    getTile(row, col)
    {
        return tiles[row * this.cols + col];
    }

    setCameraPosition(x, y)
    {
        this.xCamera = x;
        this.yCamera = y;
    }

    update(dt)
    {
    }

    draw(context)
    {
        for (let row = 0; row < this.rows; ++row)
        {
            for (let col = 0; col < this.cols; ++col)
            {
                this.tilemap[row * this.cols + col].draw(context, this.tileSize*col-this.xCamera, this.tileSize*row-this.yCamera, this.tileSize+1, this.tileSize+1);
            }
        }
    }
}
