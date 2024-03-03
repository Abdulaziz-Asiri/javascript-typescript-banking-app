class Bank {
  name: string;
  branches: Branch[];
  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch: Branch) {
    if (this.branches.find((bb) => bb === branch)) {
      return console.log("this branch is already added");
    }
    this.branches.push(branch);
  }

  addCustomer(branch: Branch, customer: Customer) {
    const findcustomer = branch.getCustomers().find((cc) => {
      return cc.getId() === customer.id;
    });
    if (!findcustomer) {
      branch.addcustomer(customer);
    } else {
      return console.log("this customer as already added");
    }
  }
  addCustomerTransaction(branch: Branch, customerId: number, amount: number) {
    branch.addCustomerTransaction(customerId, amount);
  }

  findBranchByName(branchName: string) {
    const findBranchBynum = this.branches.find((bb) => {
      return bb.getName() === branchName;
    });
    if (findBranchBynum) {
      return console.log("this Branch it is in bank " + findBranchBynum);
    }
    return console.log("this Branch it is not in bank");
  }

  checkBranch(branch: Branch) {
    const belongBranch = this.branches.find((bb) => {
      return bb === branch;
    });
    if (belongBranch) {
      return true;
    } else {
      return false;
    }
  }

  listCustomers(branch: Branch, includeTransactions: boolean) {
    if (includeTransactions === true) return branch;
    else if (includeTransactions === false) {
      const justNames = branch.getCustomers().map((names) => {
        return names.getName();
      });
      return justNames;
    }
  }
}