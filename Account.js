module.exports = class Account {
  #balance;
  // #deposits;
  // #loans;
  // #transfers;

  constructor(user) {
    this.admin = user;
    this.#balance = 0;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }

  get balance() {
    this.#balance;
  }

  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }

  addLoan(loan) {
    this.#balance += loan.value;
    this.loans.push(loan);
  }

  addTransfer(transfer) {
    if (transfer.toUser.email === this.admin.email) {
      this.#balance += transfer.value;
      this.transfers.push(transfer);
    } else if (transfer.fromUser.email === this.admin.email) {
      this.#balance -= transfer.value;
      this.transfers.push(transfer);
    }
  }
};
