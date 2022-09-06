// class User {
//     constructor() {
//         this._login = 'yyy';
//         this.password = 8999;
//     }
//
//     _login: string;
//     password: number;
//
//     set login(l: string) {
//         this._login = 'user-' + l;
//     }
//
//     get login(): string {
//        return this._login;
//     }
// }
//
// const user = new User;
//
// user.login = 'myLogin';
// console.log(user);
// console.log(user.login);

/** 1) аргументу сеттера автоматически усанавливается тип возвращаемого гетером -
 * по мне глупая идея
правда нам этот эффект не дает воплотить обязательность конструктора
 2) гетеры и сетеры не могут быть ассинхронными - потому если нужно изменять поле класса ассинхронно -
 используй метод.
 3) поле описанное гетером и сетером должно быть приватным
 **/

