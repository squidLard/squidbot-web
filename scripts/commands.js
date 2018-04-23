const commands = [
    {
        name: "8ball",
        description: "This ball can tell you the future.",
        usage: "!8ball [question]",
        permission: "None",
        aliases: "none",
        category: "Fun"
    },
    {
        name: "ban",
        description: "Ban a member that is not behaving.",
        usage: "!ban [user] [reason]",
        permission: "Administrator",
        aliases: "None",
        category: "Moderation"
    },
    {
        name: "botInfo",
        description: "Show info about the bot, such as uptime.",
        usage: "!botInfo",
        permission: "None",
        aliases: "binfo, boti",
        category: "Misc"
    },
    {
        name: "ftn",
        description: "Check your stats from Fortnite's database",
        usage: "!ftn [platform] [username]",
        permission: "None",
        aliases: "none",
        category: "Stats"
    },
    {
        name: "help",
        description: "Get help about all the commands.",
        usage: "!help",
        permission: "None",
        aliases: "None",
        category: "Misc"
    },
    {
        name: "kick",
        description: "Kick a member if you are felling like you have to.",
        usage: "!kick [user] [reason]",
        permission: "Kick Members",
        aliases: "k, kck",
        category: "Moderation"
    },
    {
        name: "mute",
        description: "Mute someone if he is not shutting up.",
        usage: "!mute [user] [reason]",
        permission: "Administrator",
        aliases: "None",
        category: "Moderation"
    },
    {
        name: "tempMute",
        description: "Mute someone for the assigned period of time.",
        usage: "!tempMute [user] [time] [reason]",
        permission: "Manage Messages",
        aliases: "tempm, tmute, tm",
        category: "Moderation"
    },
    {
        name: "unban",
        description: "Is someone banned and you want to unban him? Why you banned him then?",
        usage: "!unban [user id]",
        permission: "Ban Members",
        aliases: "None",
        category: "Moderation"
    },
    {
        name: "unMute",
        description: "Do I really need to explain what this does? I'm tired of writing.",
        usage: "!unMute [user]",
        permission: "Manage Messages",
        aliases: "umute, unm",
        category: "Moderation"
    }
];

function getCommands(category) {
    let html = '';
    commands.forEach((value) => {
        if (category.toLowerCase() !== value.category.toLowerCase() && category.toLowerCase() !== 'all') return;
        html += '<div class="commandsBox">';
        html += '<div class="card-body">';
        html += `<h5 class="card-title" style="font-size: 32px">${value.name}</h5>`;
        html += `<hr style="background-color: #18191c">`;
        html += `<pre class="card-text" style="font-size: 18px">`;
        html += `<b>Description: </b>${value.description}<br>`;
        html += `<b>Usage: </b>${value.usage}<br>`;
        html += `<b>Permission: </b>${value.permission}<br>`;
        html += `<b>Aliases: </b>${value.aliases}<br>`;
        html += `<b>Category: </b>${value.category}<br>`;
        html += '</pre></div></div>'
    });
    document.getElementById('commandsDiv').innerHTML = html;
}

function search() {
    const input = document.getElementById("searchBox");
    const filter = input.value.toUpperCase();

    const mainDiv = document.getElementById("commandsDiv");
    const subDivs = mainDiv.getElementsByTagName("div");

    for (let i = 0; i < subDivs.length; i++) {
        const header = subDivs[i].getElementsByTagName("h5")[0];

        if (header.innerHTML.toUpperCase().includes(filter)) subDivs[i].style.display = "";
        else subDivs[i].style.display = "none";

    }
}

getCommands('All');
