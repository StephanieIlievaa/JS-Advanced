function getPersons() {
    class Person {
        construstor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${lastName} (age: ${this.age}, email: ${this.email})`;

        }
    }
    const array = [];
    array.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'))
    return array;
}