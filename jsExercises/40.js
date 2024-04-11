/* Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
If the student achieves an an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
 */

function grades(objExams) {
  if (objExams.type == "finalEx") {
    if (objExams.grades >= 90) {
      return true;
    }
  } else if (objExams.type == "Exams") {
    const avarage =
      objExams.grades.reduce((a, b) => a + b, 0) / objExams.grades.length;
    if (avarage >= 89 && avarage <= 100) {
      return true;
    }
  }
  return false;
}

console.log(grades({ type: "finalEx", grades: 89 }));
console.log(grades({ type: "Exams", grades: [95, 90, 100] }));
