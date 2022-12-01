interface User {
    id: number;
    name: string;
}

let roSql: any;

const resultPromise = roSql<User>`SELECT * FROM users`;

const otherResultPromise = roSql<{ id: number }>`SELECT id FROM users`;
