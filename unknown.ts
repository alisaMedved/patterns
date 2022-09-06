// различия между unknown и any

// // let input: any;
// let input: unknown;
//
// // кейс 1 - засовываем в переменную значения любого другого типа
// // поведение any и unknown одинаковое - ошибок нет
//
// input = 3;
// input = ['ff', 'rrtty'];
//
// // кейс 2 - присвайваем значение переменной input в
// // переменную с определенным типом
//
// // в случае unknown ошибка
// // в случае any ошибки нет
// let res: string = input;

// про error и unknown
// в try catch error по умолчанию равна типу unknown

// async function getData() {
//     try {
//
//     } catch (error) {
//         // без уточнения типа - будет считаться за unknown и разумеется выбивать ошибку
//         console.log(error.message)
//         if (error instanceof Error) {
//             console.log(error.message)
//         }
//     }
// }

// unions with unknown

// intersection

// const ila: unknown & string; // тип string
//
// // union
//
// const ferry: unknown | null; // unknown - так как более общий

