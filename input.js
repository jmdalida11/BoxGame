class Input
{
    constructor()
    {
        this.keys = new Map();
    }

    registerKey(key, keyCode)
    {
        this.keys.set(key, [keyCode, false]);
    }

    keyDown(key)
    {
        if (!this.keys.has(key))
        {
            console.error('Key: "' + key + '" was not registered!')
            return false;
        }

        return this.keys.get(key)[1];
    }

    commitKeys()
    {
        ['keydown', 'keyup'].forEach((event) => {
            window.addEventListener(event, (e) => {

                this.keys.forEach((value, key) =>
                {
                    if (value[0] == e.keyCode)
                    {
                        if (event == 'keydown')
                        {
                            value[1] = true;
                        }
                        else if (event == 'keyup')
                        {
                            value[1] = false;
                        }
                    }

                });

            });
        });
    }

}
