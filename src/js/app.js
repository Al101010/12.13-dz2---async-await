import GameSavingLoader from "./GameSavingLoader";

(async () => {
    try {
        const savingGame = await GameSavingLoader.load();
        console.log(savingGame);
    } catch (error) {
        console.log(error);
    }
})();