// // interface ILoger {
// //     log(...args: string[]): void;
// //     error(...args:string[]): void;
// // }
// //
// // class Logger implements ILoger {
// //     // обращаем внимание: заимплементили метод ассинхронным и ошибку не выбивает
// //     async error(...args: string[]): Promise<void> {
// //         console.log(args);
// //     }
// //
// //     log(...args: string[]): void {
// //         console.log(args);
// //     }
// // }
//
// // пример 2
//
// interface IPayable {
//     pay(paymentId: number): void;
//     price?: number;
//     // catTest: number;
//     catTestFunc(arg: number): number;
// }
//
// interface IDeletable {
//     delete(): void;
//     // catTest: string;
//     catTestFunc(arg: string): string;
// }
//
// // имплементироваться можно от нескольких интерфейсов сразу
// class User implements IPayable, IDeletable {
//     // важно чтобы заиплеменченный метод в классе был более широким чем в исходном интерфейсе
//     pay(paymentId: number | string): void {
//     }
//
//     delete(): void {
//     }
//
//     catTestFunc(arg: number): number;
//     catTestFunc(arg: string): string;
//     catTestFunc(arg: number | string): number | string {
//         return 9;
//     }
//     // а вот что делать с нефункциональными полями с одинаковыми названиями - непонятно
//     // видно под капотом shadow merge
//     // catTest: string | number;
//
//     // constructor() {
//     //     this.catTest = 0;
//     // }
// }
//
// // Имплементированный Класс может и не соержать optional поля - но это и ежу понятно
