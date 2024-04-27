
import GameSavingLoader from "../GameSavingLoader";

test("should class GameSavingLoader.load()", () => {
    (async() => {
        try {
            const result = await GameSavingLoader.load();
        
            // console.log(result);
            const expected = {
                id: 9,
                created: 1546300800,
                userInfo: { id: 1, name: "Hitman", level: 10, points: 2000 },
            };
        }
        catch(e) {
            console.log(e)
        }
       
        expect(result).toEqual(expected);
    })();   
});  