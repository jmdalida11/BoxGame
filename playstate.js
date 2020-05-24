class PlayState extends GameState
{
    constructor(gsm)
    {
        super(gsm);

        const TILE_SIZE = 60;
        const playerSize = 30;

        this.playerSpeed = 250;

        this.tilemap = new TileMap(TILE_SIZE);
        this.player = new Player(100, 100, playerSize);

    }

    initInput()
    {
        this.input.registerKey('move_right', 39);
        this.input.registerKey('move_left', 37);
        this.input.registerKey('move_up', 38);
        this.input.registerKey('move_down', 40);
        this.input.commitKeys();
    }

    handleInput()
    {
        if (this.input.keyDown('move_right'))
        {
            this.player.xVel = this.playerSpeed;
        }
        else if (this.input.keyDown('move_left'))
        {
            this.player.xVel = -this.playerSpeed;
        }
        else
        {
            this.player.xVel = 0;
        }

        if (this.input.keyDown('move_up'))
        {
            this.player.yVel = -this.playerSpeed;
        }
        else if (this.input.keyDown('move_down'))
        {
            this.player.yVel = this.playerSpeed;
        }
        else
        {
            this.player.yVel = 0;
        }
    }

    init()
    {
        this.initInput();
        this.tilemap.initTiles(lvl1);
    }

    update(dt)
    {
        this.handleInput();

        this.player.update(dt);

        this.tilemap.setCameraPosition(this.player.x-WIDTH/2, this.player.y-HEIGHT/2);
        this.tilemap.update(dt);

        this.player.radians += 100 * dt;
    }

    draw(context)
    {
        this.tilemap.draw(context);
        this.player.draw(context);
    }
}