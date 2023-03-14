/* Задание 1
Вам дана заготовка и результат, который вы должны получить. Ваша задача — 
написать код, который будет преобразовывать XML в JS-объект и выводить его 
в консоль. */

// JSON, который мы будем парсить

const jsonString = `
{
    "list": [
        {
            "name": "Petr",
            "age": "20",
            "prof": "mechanic"
        },
        {
            "name": "Vova",
            "age": "60",
            "prof": "pilot"
        }
    ]
}
`

const result = {
    list: []
}

const data = JSON.parse(jsonString);
const list = data.list;

console.log(data)

for (let i of list) {
    result.list.push(
        {
            name: i.name,
            age: Number(i.age),
            prof: i.prof
        }
    )
}

console.log(result)
  