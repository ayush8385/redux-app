import { sum } from "../sum";

test("Sum should return addition of a and b", () => {
    const result = sum(3,4);
    expect(result).toBe(7);
})