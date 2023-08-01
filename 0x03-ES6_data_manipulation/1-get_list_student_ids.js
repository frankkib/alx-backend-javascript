export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const ids = students.map((student) => student.id);
  return ids;
}
