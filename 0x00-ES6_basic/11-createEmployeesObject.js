export default function createEmployeesObject(departmentName, employees) {
  const empployeesObject = {
    [departmentName]: employees,
  };
  return empployeesObject;
}
