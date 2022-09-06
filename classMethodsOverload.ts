// напомним, что если речь идет просто о функциях
// то там действует правило: сначала пишутся более общие перегрузки
// и затем более специфичные, иначе - ошибка.

// class User {
//     constructor() {
//         this.skills = [];
//     }
//     skills: string[]
//     // вот эти две ниже строки делают просто более удобный автокомплит
//     // addSkills(skill: string): void;
//     // addSkills(skills: string[]): void;
//     addSkills(skillOrSkills: string | string[]): void {
//         if (typeof skillOrSkills === 'string') {
//             this.skills.push(skillOrSkills);
//         } else {
//             this.skills.concat(skillOrSkills);
//         }
//     }
// }
//
// new User().addSkills()
