const App = require("./App");

App.createUser("douglastrindadev@gmail.com", "Douglas Trindade");
App.createUser("lucas@gmail.com", "Lucas Montano");
App.createUser("arthur@gmail.com", "Arthur Trindade");

App.deposit("douglastrindadev@gmail.com", 100);

App.transfer("douglastrindadev@gmail.com", "lucas@gmail.com", 20);

App.changeLoanFee(10);
App.takeLoan("arthur@gmail.com", 2000, 24);

console.log(App.findUser("douglastrindadev@gmail.com"));
console.log(App.findUser("douglastrindadev@gmail.com").account);

console.log(App.findUser("lucas@gmail.com"));
console.log(App.findUser("lucas@gmail.com").account);

console.log(App.findUser("arthur@gmail.com"));
console.log(App.findUser("arthur@gmail.com").account);

console.log(App.findUser("arthur@gmail.com").account.loans[0].installments);
