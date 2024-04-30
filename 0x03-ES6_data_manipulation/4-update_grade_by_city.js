export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => ({
    ...student,
    grade: (newGrades.find((g) => g.studentId === student.id) || {}).grade || 'N/A',
  })).filter((student) => student.location === city);
}
