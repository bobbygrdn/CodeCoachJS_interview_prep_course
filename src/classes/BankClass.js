class Bank {
    /**
     * @returns {string} a unique string of any length
     */
    static createRoutingNumber() {
        //TODO
        let length = Math.random()
        let routingNumber = '';
        for(let i = 0; i < length; i++) {
            routingNumber += `${Math.random() * 100}`
        }
        return routingNumber;
    }

    constructor(initialAmt = 0) {
        this.account = initialAmt;
    }

    /**
     *
     * @param {number} amt
     * @returns {promise} updates the account with the new amount and resolves with the new account amount
     */
    deposit = (amt) => {
        return Promise.resolve().then(() => {
            this.account += amt;
            return this.account;
        });
    };

    /**
     *
     * @param {number} amt
     * @returns {promise} rejects if the amount requested is more than what's available and resolves with the new account amount
     */
    withdraw = (amt) => {
        if(amt > this.account) {
            return Promise.reject({message: 'Insufficient Funds'});
        }
        return Promise.resolve().then(() => {
            this.account -= amt;
            return this.account;
        })
    };

    /**
     *
     * @returns account property
     */
    getBalance = () => {
        return this.account;
    };
}

module.exports = {
    Bank,
};
