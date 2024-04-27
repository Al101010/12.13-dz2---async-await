import GameSavingLoader from "./GameSavingLoader";

(async () => {
    try {
        const savingGame = await GameSavingLoader.load();
        // return savingGame;
        console.log(savingGame);
    } catch (error) {
        // return error;
        console.log(error);
    }
})();



// GameSavingLoader.load().then(
//     (savingGame) => {
//         return savingGame;
//     },
//     (error) => {
//         return error;
//     }
// );