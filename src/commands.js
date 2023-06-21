// Command to see a list of all the items
const index = (arrayOfGames) => {
    return arrayOfGames.map((eachGame) => `id: ${eachGame.id}, title: ${eachGame.title}, inStock: ${eachGame.inStock}`).join("\n");
}

// Command to create a new item
const create = (games, gameTitle) => {
    const newGame = { title: gameTitle };
    games.push(newGame);


}

// Command to see the details of one item
const read = (games, gameId) => {
    const gameIdNum = Number(gameId);
    const gameToFind = games.find((game) => game.id === gameIdNum);
    return gameToFind;
}

// Command to update an item
const update = () => { }

//Command to delete an item
const destroy = (games, gameId) => {
    const gameIdNum = Number(gameId);
    const filteredArray = games.filter((game) => game.id !== gameIdNum)
    return filteredArray;
}


module.exports = {
    index,
    create,
    read,
    update,
    destroy
};