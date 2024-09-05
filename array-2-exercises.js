const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: 34,
    isActive: false,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    age: 22,
    isActive: true,
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    age: 40,
    isActive: false,
  },
  {
    id: 5,
    name: 'William Brown',
    email: 'william.brown@example.com',
    age: 31,
    isActive: true,
  },
];

/* EXERCÍCIOS de ARRAYS: https://www.notion.so/Arrays-II-f876bb1cab8b4863ad825bf42ad1f965

/* MAP */

// 1
const userNames = users.map((user) => user.name);
console.log('Map 1:', userNames);

// 2
const userEmailsUppercase = users.map((users) => users.email.toUpperCase());
console.log('Map 2:', userEmailsUppercase);

// 3
const agePlusOne = users.map((user) => ({
  ...user,
  age: ++user.age,
}));
console.log('Map 3:', agePlusOne);

// 4
const activeStatusTransform = users.map((user) => ({
  ...user,
  isActive: user.isActive ? 'Sim' : 'Não',
}));
console.log('Map 4:', activeStatusTransform);

// 5
const idsNames = users.map((user) => ({
  id: user.id,
  name: user.name,
}));
console.log('Map 5:', idsNames);

console.log('\n=========================================\n');
/* FILTER */

// 1
const activeUsers = users.filter((user) => user.isActive);
console.log('Filter 1:', activeUsers);

// 2
const olderThanThirdy = users.filter((user) => user.age > 30);
console.log('Filter 2:', olderThanThirdy);

// 3
const emailExample = users.filter((user) => user.email.includes('example'));
console.log('Filter 3:', emailExample);

// 4
const nameStartsWithJ = users.filter((user) => user.name.startsWith('J'));
console.log('Filter 4:', nameStartsWithJ);

// 5
const idIsEven = users.filter((user) => user.id % 2 === 0);
console.log('Filter 5:', idIsEven);
