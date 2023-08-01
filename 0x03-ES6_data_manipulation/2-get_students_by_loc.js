export default function getStudentByLocation(students, city) {
  const studentCity = students.filter((students) => students.location === city);
  return studentCity;
}
