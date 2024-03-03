class Branch {
  name: string;
  customers: Customer[];
  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }
  getName(): string {
    return this.name;
  }
  getCustomers(): Customer[] {
    // return JSON.stringify(this.customers, null, 2);
    return this.customers;
  }
  addcustomer(customer: Customer) {
    if (this.customers.find((cc) => cc === customer)) {
      return console.log("this customer is already added");
    }
    this.customers.push(customer);
  }

  addCustomerTransaction(customerId: number, amount: number) {
    const findCustomer = this.customers.find((customer) => {
      return customer.getId() === customerId;
    });
    if (findCustomer) {
      return findCustomer.addTransactions(amount);
    }
  }
}