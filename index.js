// //task-1

// const library = {
//     name: "Frontend Library",
//     books: [],

//     addBook: function (title) {
//         if (title === "") {
//             return "Invalid book title";
//         }

//         this.books.push(title);
//         return this.books.length;
//     },

//     removeLastBook: function () {
//         if (this.books.length === 0) {
//             return "Library is empty";
//         }

//         return this.books.pop();
//     },

//     getLastBook: function () {
//         if (this.books.length === 0) {
//             return "Library is empty";
//         }

//         return this.books[this.books.length - 1];
//     },

//     getSummary: function () {
//         return `${this.name} has ${this.books.length} books.`;
//     }
// };

// console.log(library.addBook("JavaScript Basics"));
// console.log(library.addBook("Clean Code"));
// console.log(library.getLastBook());
// console.log(library.removeLastBook());
// console.log(library.getSummary());

//=================================================================

// task-2 


// function calculateBonus(baseSalary, percentage) {
//     return baseSalary * percentage / 100;
// }

// const calculateNetSalary = function (employee) {
//     let bonus = calculateBonus(
//         employee.baseSalary,
//         employee.bonusPercentage
//     );

//     return employee.baseSalary + bonus - employee.deduction;
// };

// const getSalaryStatus = (netSalary) => {
//     if (netSalary >= 15000) {
//         return "High";
//     } else if (netSalary >= 8000) {
//         return "Medium";
//     } else {
//         return "Low";
//     }
// };

// const employee = {
//     name: "Mona",
//     baseSalary: 10000,
//     bonusPercentage: 10,
//     deduction: 500,

//     getReport: function () {
//         let bonus = calculateBonus(
//             this.baseSalary,
//             this.bonusPercentage
//         );

//         let netSalary = calculateNetSalary(this);
//         let status = getSalaryStatus(netSalary);

//         return `Employee: ${this.name}
// Base Salary: ${this.baseSalary} EGP
// Bonus: ${bonus} EGP
// Deduction: ${this.deduction} EGP
// Net Salary: ${netSalary} EGP
// Salary Status: ${status}`;
//     }
// };

// console.log(employee.getReport());


//=================================================================

// task-3