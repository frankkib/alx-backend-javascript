export default function createEmployeesObject(departmentName, employees) {
  const empployeesObject = {
    department: departmentName,
    employeeList: employees,
  };
  return empployeesObject;
}
