import json from "../parser";

test('parser.js', () => {
    (async() => {
        const result = await json();
        const expected = null;
        
        expect(result).toEqual(expected);
    })()
});