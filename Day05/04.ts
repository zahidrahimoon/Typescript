function getEmployee(): [string, number] {
    return ["Zahid", 17];
}

let employee: [string, number] = getEmployee();
console.log("Employee Name:", employee[0]);
console.log("Employee Age:", employee[1]);
