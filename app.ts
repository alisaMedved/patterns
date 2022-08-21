const a = 1;

// tuple - кортеж
const skils: [number, string] = [1, 'ffgg'];
// ошибка
// const skils: [number, string] = [1, 'ffgg', 5, 89, 'fghhh'];

//забавный рофл с tuple
// пушим - ошибк нет
skils.push(45);
// выведет все три эл-та
console.log(skils);
// А вот тут ошибка!
// console.log(skils[2]);

const skilsЕ: (number | string)[] = [1, 'ffgg', 5, 89, 'fghhh'];

