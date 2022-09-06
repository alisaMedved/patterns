type PaymentStatus = 'new' | 'paid';
class Payment {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}

class PersistedPayment extends Payment {
    dataBaseId: number = 9;
    paidAt: Date = new Date();

    constructor() {
        const id = 8;
        super(id);
    }
    // override pay(date) {} - ошибка - конфликт с методом родителя
    // override - хороший тон при обертывании метода родителя
    override pay(date?: Date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
new PersistedPayment();

class User {
    name: string = 'user';

    constructor() {
        console.log(this.name);
    }
}

class Admin extends User {
    name: string = 'admin';

    constructor() {
        //     // super должен вызываться перед любыми упоминаниями this в конструкторе
        super();
        console.log(this.name);
    }
}

new Admin();
// Это наглядно показывает порядок инициализации
// 1) поле в классе User
// 2) constructor в классе User
// 3) поле в классе Admin
// 4) constructor в классе Admin