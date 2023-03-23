//első teszt

const { describe, it } = require("node:test");


describe('A triangle függvény tesztje',() => {
it('Input 30,35 , elvárt 525', () => {
    let actual = calcTriangleArea(30,35);
    expect (actual).toBe(525);  
    });
    it('Input 40,45, elvárt 900' ,() => {
        let actual = calcTriangleArea(40,45);
        expect(actual).toBe(900);
    });
    it('Input 1,45, elvárt 22.5' ,() => {
        let actual = calcTriangleArea(1,45);
        expect(actual).toBe(22.5);
    });
    it('Ha az alap 0 akkor kivételt várunk' ,() => {
        expect(() => calcTriangleArea(0,30)).toThrow();
    });
    
    it('Ha az alap 0 akkor hibát kapunk' ,() => {
        expect(() => calcTriangleArea(0,30)) .toThrowError('Hiba az érték nem megfelelő!');
    });
});
describe('A chekInput() tesztjei',() => {
    it('Szám az Input?', () => {
        let actual = chekInput('3a');
        expect(actual).toBe(true);
    })
    it('Ha nem szám va akkor falset kapunk?', () => {
        let actual = chekInput('aa');
        expect(actual).toBe(false);
    })

})

