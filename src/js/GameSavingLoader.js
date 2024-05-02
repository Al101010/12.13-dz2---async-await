import GameSaving from "./GameSaving";
import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static async load() {
        const data = await read();
        const value = await json(data);
        const { id, created, userInfo } = JSON.parse(value);
        
        return new GameSaving(id, created, userInfo);        }
}