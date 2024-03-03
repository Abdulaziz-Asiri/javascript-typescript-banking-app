class Customer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.transaction = [];
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getTransaction() {
    return this.transaction;
  }
  getBalance() {
    let balance =0
    this.transaction.forEach((tr)=>{
      balance = balance + tr.amount
    })
    if(balance > 0){
      console.log("the balance is:")
      return balance

    }
  }

  addTransactions(amount) {
    if (amount > 0){
      const trn1 =new Transaction(amount, new Date().toISOString())
      this.transaction.push(trn1)
      return console.log("transaction added successfully")
    } else if (amount <0){
      const trn1 = new Transaction(amount, new Date().toISOString)
      this.transaction.push(trn1)
      return "transction added"
    }
    if (amount >  this.getBalance()){
      return "No sufficient balance"
    }
  }
}




// const trasn = new Transaction( "2020-13 - 2");
// const customer = new Customer("Abdulaziz", 999, trasn);
// customer.addTransactions(2000);

// console.log(customer)































// class Branch {
//   constructor(name) {
//     this.name = name;
//     this.customers = [];
//   }
//   getName() {
//     nameofbranch = this.name;
//   }
//   getCustomers() {
//     customers = this.customers

//   }

//   addcustomer(customer) {
//     this.customers.push(customer);
//   }
// }
// const tr1 = new Transaction(4, "2000");
// const tr2 = new Transaction(5, "2000");
// // console.log(tr1);
// const cs1 = new Customer("John", 1);
// const cs2 = new Customer("John", 2);
// cs1.addTransaction(tr1);
// cs2.addTransaction(tr2);
// // console.log(cs1.getTransaction());
// const branch1 = new Branch("Branch1");
// branch1.addcustomer(cs1);
// branch1.addcustomer(cs2);
// console.log(branch1);
// // console.log(branch1.customers);