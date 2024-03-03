class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }
  getName() {
    return this.name;
  }
  getCustomers() {
    // return JSON.stringify(this.customers, null, 2);
    return this.customers;
  }
  addcustomer(customer) {
    if (this.customers.find((cc) => cc === customer)) {
      return console.log("this customer is already added");
    }
    this.customers.push(customer);
  }

  addCustomerTransaction(customerId, amount) {
    const findCustomer = this.customers.find((customer) => {
      return customer.getId() === customerId;
    });
    if (findCustomer) {
      return findCustomer.addTransactions(amount);
    }
  }
}