// Part 1
const PartOne = (data: number[]): number => {
    let count = 0;

    for (let i = 1; i < data.length; i++) {
        if (data[i] > data[i - 1]) {
            count++;
        }
    }

    return count;
};

// Part 2
const PartTwo = (data: number[]): number => {
    const windowSums = data.map((value, index) => {
        return value + data[index + 1] + data[index + 2];
    });

    return PartOne(windowSums);
};

export { PartOne, PartTwo };
