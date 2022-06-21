import React from "react";

//책의 내용과 좀 달라진 점 ${props.name} => {props.name} 으로 해도 됨 
//그리고 '' 작은 따옴표가 아닌 `` << 이걸 써야됨 Grave 
//1. 이건 JSX 사용 한 것
// function Book( props ) {
//   return ( 
//     <div>
//       <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
//       <h1>이책의 이름은 {props.name} 입니다</h1>
//       <h2>이 책은 총 {props.numOfpage}페이지로 이뤄져 있습니다.</h2>
//     </div>
//   );
// };

//2. 이건 JSX 사용 안한 것
function Book( props ) {
  return React.createElement(
    'div',
    null,
    [
      React.createElement(
        'h1',
        null,
        `이 책의 이름은 ${props.name}입니다.`
      ),
      React.createElement(
        'h2',
        null,
        `이 책은 총 ${props.numOfpage} 페이지로 이뤄져 있습니다.`
      )
    ]
  );
};

export default Book;