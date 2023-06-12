const { readJSONFile, writeJSONFile } = require("./src/helpers");

const { index, create, read, update, destroy } = require("./src/commands")

const inform = console.log;

const run = () => {

    const command = process.argv[2]; // The command/action that the employee typed ex. "index", "show", "create"
    const game = process.argv[3];// the game that the employee wants to interact with

    switch (action) {
        case "index":
            break;
        case "show":
            break;
        case "create":
            break;
        case "update":
            break;
        case "destroy":
            break;
        default:
            inform("Sorry, that command is incorrect.");
    }

}
run();