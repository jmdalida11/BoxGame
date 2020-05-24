class GameState
{
    constructor(gsm)
    {
        this.gsm = gsm;
        this.input = new Input();
    }

    setState(state)
    {
        this.gsm.set(state);
    }

    init(){}
    update(dt){}
    draw(context){}
}