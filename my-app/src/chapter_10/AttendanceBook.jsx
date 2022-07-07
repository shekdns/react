import React from "react";

const students = [
  { id : 1, name : "Inje" }, 
  { id : 2, name : "Steve" },
  { id : 3, name : "Bill" },
  { id : 4, name : "Jeff" }
];

function AttendanceBook( props ) {
  return (
    <ul>
      {/* 1. id 값으로 사용  */}
      {students.map( (student) => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  );
  //  2. 포맷팅 된 문자열 키값으로 사용 *
  //  {students.map( (student, index ) => {
  //    <li key={`student-id-${student.id}`}>{student.name}</li>
  //  })};
  
  //  3.배열의 인덱스를 키값으로 사용
  // {students.map( (student, index) => {
  //   <li key={index}>{student.name}</li>;
  // })};
}
export default AttendanceBook;