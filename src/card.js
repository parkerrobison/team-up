function generateCard(employee) {
    return 
    `
    <div class="card" style="width: 18rem;">
            <div class="bg-primary text-white card-body">
                <h5 class="card-title">${employee.getName}</h5>
                <p class="card-text">${employee.getRole()}</p>
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