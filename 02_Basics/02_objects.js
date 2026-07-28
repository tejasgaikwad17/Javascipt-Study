let employee = {
    id: 101,
    name: "Tejas",
    age: 23,
    city: "Pune",

    skills: ["HTML", "CSS", "JavaScript"],

    address: {
        state: "Maharashtra",
        country: "India"
    },

    greet: function () {
        return `Hello, I am ${this.name}`;
    }
};

console.log(employee.name);  //Tejas
console.log(employee["city"]); //Pune

employee.salary = 50000; 
employee.age = 24;

delete employee.city;

console.log(employee.greet());

console.log(employee.address.state);

console.log(employee.skills[1]);

console.log(Object.keys(employee));
console.log(Object.values(employee));

for (let key in employee) {
    console.log(key, ":", employee[key]);
}

let { name, age } = employee;
console.log(name, age);

let copy = { ...employee, company: "OpenAI" };
console.log(copy);