function generateCard(employee) {
    return `
    <div class="card" style="width: 18rem;">
            <div class="bg-primary text-white card-body">
                <h4 class="card-title">${employee.getName}</h4>
                <h3 class="card-text">
                <i class=${employee.getRole() === "Manager" ? "fas fa-mug-hot" : 
                employee.getRole() === "Engineer" ? "fas fa-glasses": "fas fa-user-graduate"}></i>
                 ${employee.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group border list-group-flush">
                    <li class="list-group-item">ID:${employee.getId()}</li>
                    <li class="list-group-item">Email: ${employee.getEmail()}</li>
                    <li class="list-group-item">${employee.getRole() === "Manager" ? "Office Number: " + employee.getOffice() : 
                    employee.getRole() === "Engineer" ? "Github:" + employee.getGithub(): "School:" + employee.getSchool() }</li>
                </ul>
            </div>
        </div>
    `
}