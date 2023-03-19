function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

var person1 = new Person("Ali", "Taghizada", 20);
var person2 = new Person("Umar", "Hussain", 69);
var person3 = new Person("Selim", "Taghiyev", 61);
var person4 = new Person("Zehra", "Agayeva", 76);

var people = [person1, person2, person3, person4];

var tBody1 = document.getElementById("tbody-1");

for(let i = 0; i < people.length; i++){
    var trBody = document.createElement("tr");
    for(let j = 0; j < 3; j++){
        var tdBody = document.createElement("td");
        var tdBodyData = document.createTextNode(Object.values(people[i])[j])

        tdBody.appendChild(tdBodyData);
        trBody.appendChild(tdBody)
        tBody1.appendChild(trBody)
    }
}