/* Задание 1
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать 
код, который будет преобразовывать XML в JS-объект и выводить его в консоль. */

// 1. Данные:
 
const xmlList = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>
`;

result = {
  list: []
}

// Парсинг XML
const parserDZ1 = new DOMParser();
const xmlDOM1 = parserDZ1.parseFromString(xmlList, "text/xml");

// Получение DOM-нод
const listNode = xmlDOM1.querySelector('list');
const students = listNode.querySelectorAll('student');
for (let student of students) {
    const nameNode = student.querySelector('name');
    const firstNode = nameNode.querySelector('first');
    const secondNode = nameNode.querySelector('second');
    const langAttr = nameNode.getAttribute('lang');
    const ageNode = student.querySelector('age');
    const profNode = student.querySelector('prof')
    const stud = {
        name: `${firstNode.textContent} ${secondNode.textContent}`, age: Number(ageNode.textContent), prof: profNode.textContent, lang: langAttr
    }
    result.list.push(stud)
}

console.log(result)
