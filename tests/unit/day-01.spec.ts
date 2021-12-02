import { PartOne, PartTwo } from "@/day-01/day-01";

const data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("Day 1", () => {
    it("Part 1", () => {
        const result = PartOne(data);

        expect(result).toBe(7);
    });

    it("Part 2", () => {
        const result = PartTwo(data);

        expect(result).toBe(5);
    });
});
