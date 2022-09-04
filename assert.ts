interface User {
    name: string;
}

const a = {};

assertUser(a);
a.name = 'Baca';

function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Не пользователь');
}

/**
 * Assert - это метод, который информирует компилятор о типе переменной.
 */