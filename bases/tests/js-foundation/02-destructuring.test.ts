import { characters } from "../../src/js-foundation/02-destructuring";


describe('02-destructuring', ()=>{

    test('should characters contain superman', ()=>{
        expect(characters).toContain('Superman');
    })
    test('should characters contain flash', ()=>{
        expect(characters).toContain('Flash');
    })
})