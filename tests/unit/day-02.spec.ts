import { PartOne, PartTwo, Data } from "@/day-02/day-02";

const data: Data[] = [
    { direction: "forward", value: 5 },
    { direction: "down", value: 5 },
    { direction: "forward", value: 8 },
    { direction: "up", value: 3 },
    { direction: "down", value: 8 },
    { direction: "forward", value: 2 },
];

describe("Day 2", () => {
    it("Part 1", () => {
        const result = PartOne(data);

        expect(result).toBe(150);
    });

    it("Part 2", () => {
        const result = PartTwo(data);

        expect(result).toBe(900);
    });
});
