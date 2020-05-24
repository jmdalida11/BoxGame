class Object
{
    constructor(x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.xVel = 0;
        this.yVel = 0;
        this.color = 'black';
    }

    update(dt)
    {
        this.x += this.xVel * dt;
        this.y += this.yVel * dt;
    }

    draw(context)
    {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.w, this.h);
    }
}

class Player extends Object
{
    constructor(x, y, size)
    {
        super(x, y, size, size);

        this.size = size;
        this.color = 'red';
        this.radians = 0;
    }

    getCenterPosX()
    {
        return this.x + this.size / 2;
    }

    getCenterPosY()
    {
        return this.y + this.size / 2;
    }

    draw(context)
    {
        context.fillStyle = this.color;

        context.save();
        context.translate(WIDTH/2-this.size/2, HEIGHT/2-this.size/2);
        context.rotate(degToRad(this.radians));
        context.translate(-(WIDTH/2), -(HEIGHT/2));
        context.fillRect(WIDTH/2-this.size/2, HEIGHT/2-this.size/2, this.size, this.size);
        context.restore();
    }
}