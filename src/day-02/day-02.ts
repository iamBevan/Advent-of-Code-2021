interface Data {
    direction: string;
    value: number;
}

// Part 1
const PartOne = (data: Data[]) => {
    let horizonalPosition = 0;
    let depth = 0;

    data.forEach((element) => {
        switch (element.direction) {
            case "forward":
                horizonalPosition += element.value;
                break;
            case "down":
                depth = depth += element.value;
                break;
            case "up":
                depth = depth -= element.value;
                break;
        }
    });

    return depth * horizonalPosition;
};

// Part2
const PartTwo = (data: Data[]) => {
    let horizonalPosition = 0;
    let depth = 0;
    let aim = 0;

    data.forEach((element) => {
        switch (element.direction) {
            case "forward":
                horizonalPosition += element.value;
                depth += aim * element.value;
                break;
            case "down":
                aim += element.value;
                break;
            case "up":
                aim -= element.value;
                break;
        }
    });

    return depth * horizonalPosition;
};

export { PartOne, PartTwo, Data };
