import { getUUID } from '../../src/plugins/get-id.plugin';

describe("08-getUUID", () => {
    
    test("should return a string", () => {
        const uuid = getUUID();

        expect(typeof uuid).toBe('string');
    })
    test("should return a uuid v4 with 36 characters", () => {
        const uuid = getUUID();

        expect(uuid.length).toBe(36);
    })
})