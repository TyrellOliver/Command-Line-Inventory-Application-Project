const { readJSONFile, writeJSONFile } = require("./src/helpers");

const { index, create, read, update, destroy } = require("./src/commands");

const inform = console.log;

const run = () => {

    let games = readJSONFile("data", "sample.json");

    const command = process.argv[2]; // The command/action that the employee typed ex. "index", "show", "create"
    const game = process.argv[3];// the game that the employee wants to interact with

    switch (command) {
        case "index":
            const allItems = index(games);
            inform(allItems);
            break;
        case "create":
            break;
        case "read":
            const oneItem = read(games, game);
            inform(oneItem);
            break;
        case "update":
            break;
        case "destroy":
            break;
        default:
            inform("Invalid command. Please put in the correct command.");
    }

}
run();