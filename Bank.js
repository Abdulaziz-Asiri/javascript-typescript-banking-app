class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch) {
    if (this.branches.find((bb) => bb === branch)) {
      return console.log("this branch is already added");
    }
    this.branches.push(branch);
  }

  addCustomer(branch, customer) {
    const findcustomer = branch.getCustomers().find((cc) => {
      return cc.getId() === customer.id;
    });
    if (!findcustomer) {
      branch.addcustomer(customer);
    } else {
      return console.log("this customer as already added");
    }
  }
  addCustomerTransaction(branch, customerId, amount) {
    branch.addCustomerTransaction(customerId, amount);
  }

  findBranchByName(branchName) {
    const findBranchBynum = this.branches.find((bb) => {
      return bb.getName() === branchName;
    });
    if (findBranchBynum) {
      return console.log("this Branch it is in bank " + findBranchBynum);
    }
    return console.log("this Branch it is not in bank");
  }
  checkBranch(branch) {
    const belongBranch = this.branches.find((bb) => {
      return bb === branch;
    });
    if (belongBranch) {
      return true;
    } else {
      return false;
    }
  }

  listCustomers(branch, includeTransactions) {
    if (includeTransactions === true) return branch;
    else if (includeTransactions === false) {
      const justNames = branch.getCustomers().map((names) => {
        return names.getName();
      });
      return justNames;
    }
  }
}
