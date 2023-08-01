export default function getStudentIdsSum(students) {
  const sumIds = students.reduce((sum, student) => sum + student.id, 0);
  return sumIds;
}
