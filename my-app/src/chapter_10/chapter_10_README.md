# CHAPTER 10 리스트와 키
## 리스트 ( LIST )
-> 목록이라는 뜻

자바스크립트의 map 함수 사용
```c
  const doubled = numbers.map( (number) => number * 2 ); 
```

리액트에서의 map 함수 사용
```c
  const numbers   = [ 1, 2, 3, 4, 5 ];
  const listItems = numbers.map( (number) => 
    <li>{number}</li>
  ); 
  // 1 ~ 5 까지 numbers배열이 있고
  // map() 함수를 이용해서 <li>태그로 감싸서 return

  //랜더링 할때는
  ReactDom.render(
    <ul>{listItem}</ul>,
    document.getElementById( 'root' );
  );
  //위의 코드는 아래의 코드 와 같다
  ReactDom.render(
    <ul>
      <li>{1}</li>
      <li>{2}</li>
      <li>{3}</li>
      <li>{4}</li>
      <li>{5}</li>
    </ul>,
    document.getElementById( 'root' )
  );
```

## 기본적인 리스트 컴포넌트
```c
  function NumberList( props ) {
    const { numbers } = props;

    const listItem = numbers.map( (number) => 
      <li>{number}</li>
    );

    return (
      <ul>{listItems}</ul>
    );
  };
  
  const numbers = [ 1, 2, 3, 4, 5 ];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById( 'root' )
  );
// 리스트 아이템에는 무조건 키가 있어야함 현재 위의 코드는 키가 없음 
```

## 리스트 KEY
```c
  //1. 키값으로 숫자의 값을 사용
  // 이 코드의 경우 numbers 배열에 숫자들이 중복이 된다면 키값도 중복이 됨
  const numbers   = [ 1, 2, 3, 4, 5 ];
  const listItems = numbers.map( (number) => 
    <li key={number.toString()}>
      {number}
    </li>
  );

  //2. 키값으로 id를 사용하는 방식
  // id의 의미 자체가 고유한 값이라는 것이기 때문에 키값으로 사용하기 적합
  const todoItems = todos.map( (todo) => 
    <li key={todo.id}>
      {todo.text}
    </li>
  );

  //3. 키값으로 index를 사용하는 방법
  // map함수에서 두 번째 팔마ㅣ터로 제공해 주는 인덱스 값을 키값으로 사용하는 것
  // 근데 배열에서 아이템의 순서가 바뀔수 있는 경우에는 권장 하지 않음
  // 리액트에서는 키를 명시적으로 넣어 주지 않으면 기본적으로 이 인덱스 키 값을 사용

  const todoItems = todos.map( (todo, index) => 
    <li key={index}>
      {todo.text}
    </li>
  );
```

