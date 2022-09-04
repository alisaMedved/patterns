// пример гварда

function isString(x: string | number): x is string {
    return typeof x === 'string';
}

// пример более сложного гварда

interface Admin {
    name: string;
    role: number;
}

interface User {
    name: string;
    email: string;
    login: string;
}

function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
}

function isAdminAlternative(user: User | Admin) {
    return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('Пользователь не админ');
    }
}

// другой пример гварда
enum PaymentStatus {
    Success = "success",
    Failed = "failed",
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.Success;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.Failed;
    data: IDataFailed;
}

function getNumber(res: IResponseSuccess | IResponseFailed): number {
    return res.status === 'failed' ? 0 : 1;
}

function isSuccess(res: IResponseSuccess | IResponseFailed): res is IResponseSuccess {
    if (res.status === PaymentStatus.Success) {
        return true;
    } else {
        return false;
    }
}

/**
 * Guard — это метод TypeScript, используемый для получения информации о типе переменной.
 * Это обычные функции, которые возвращают логическое значение,
 * принимают тип и сообщают TypeScript, можно ли его сузить до чего-то более конкретного.
 */