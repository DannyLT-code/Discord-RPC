const clientID = '1038235608641978388';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(clientID);

async function setActivity() {
    if (!RPC) return;

    RPC.setActivity({
        details: 'Testing presence',
        state: 'Making a Discord RPC',
        startTimestamp: Date.now(),
        largeImageKey: 'smetroidbox',
        largeImageText: 'Super Metroid',
        smallImageKey: 'smetroidbox',
        smallImageText: 'Super Metroid',
        instance: false,
        buttons: [
            {
                label: 'GitHub',
                url: 'https://github.com/Danneruu'
            },
            {
                label: 'Twitter',
                url: 'https://twitter.com/Danneruuu'
            }
        ]
    });
}

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 1000);
});

RPC.login({ clientId: clientID }).catch(console.error);