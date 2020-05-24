class Game
{
    constructor()
    {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.canvas.style.border = '1px solid black';
        document.body.append(this.canvas);

        this.dt = 1/30;
        this.lastTime = 0;
        this.accumulator = 0;
        this.input = new Input();

        this.gsm = new GameStateManager(this.canvas);
        this.gsm.push(new PlayState(this.gsm));
    }

    update()
    {
        this.gsm.update(this.dt);
    }

    draw()
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.gsm.draw(this.context);
    }

    run(time=0)
    {
        this.accumulator += (time - this.lastTime) / 1000;

        while(this.accumulator > this.dt)
        {
            this.update(this.dt);
            this.draw();

            this.accumulator -= this.dt;
        }

        this.lastTime = time;

        requestAnimationFrame((t) => {this.run(t)})
    }
}

new Game().run();