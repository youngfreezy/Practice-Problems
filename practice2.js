var chase = {
  name: "JP Morgan Chase",
  accounts: {}
}
var wellsFargo = {
  name: "Wells Fargo",
  accounts: {"Shehzan": 0}
}
var me = {
  name: "Shehzan",
  cash: 500
}
var friend1 = {
  name: "John",
  cash: 1000
}

// write a function, pass a person/bank into that function. 
//create an account with that person's name.  
//have that account have a starting balance of zero $

// var bankAccount = function(person, bank){
// 	this.name = person;
// 	this.bank = bank;

// }

//bankAccount(me, chase)
//chase = {name: "JP Morgan Chase", accounts: {Shehzan: 0}}

var bankAccount = function(person, bank){
	bank.accounts[person.name] = 0; 
	console.log(bank);

};
bankAccount(me, chase);

var deposit = function(person, bank, amount){
	if(person.cash >= amount){
	person.cash -= amount;
	bank.accounts[person.name] += amount;
} else{console.log("Get a job fool!");}

	
}

deposit(me, wellsFargo, 300);

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});