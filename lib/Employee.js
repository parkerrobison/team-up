class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
       return this.name; 
    }

    getRole() {
        return "employee"
    }
}


module.exports = Employee;