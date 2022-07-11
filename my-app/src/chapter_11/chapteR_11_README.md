# CHAPTER 11 리액트의 폼
## 1. 기본적인 폼
사용자로부터 입력을 받기 위해 사용하는 것

```c
//기본적인 form 형식 
  <form>
    <label>
      이름 : <input type="text" name="name" />
    </label>
    <button type="submit">제출</button>
  </form>
```

## 2. 리액트의 제어 컴포넌트
사용자가 입력한 값에 접근하고 제어할수 있도록 해주는 컴포넌트 \
정리하면 제어 컴포넌트는 그 값이 리액트의 통제를 받는 입력 폼 엘리먼트를 의미

```c
//HTML 폼을 리액트의 제어 컴포넌트로 만든 것
function NameForm( props ) {
  const [value, setValue] = useState( '' );

  const handleChange = ( event ) => {
    setValue( event.target.value );

    //만약 모든 입력값을 대문자로 변경 하고 싶다면ㄷ
    setValue( event.target.value.toUpperCase() );
  }

  const handleSubmit = ( event ) => {
    alert( '입력한 이름 : ' + value );
    evnet.prevnetDefault();
  }

  return (
    <form onSumbit = {handleSubmit}>
      <label>
        이름 : <input type="text" value={value} onChange={handleCahnge} />
      </label>
      <button type="submit">제출</button>
    </form>
  )
};
```

## 3. textareate 태그
기본적인 건 생략

```c
//리액트 코드

function RequestForm( props ) {
  const [value, setValue] = useState( '요청사항을 입력하세요. ' );

  const handleChange = ( event ) => {
    setValue( event.target.value );
  }

  const handleSubmit = ( event ) => {
    alert( '입력한 요청사항 : ' + value );
    event.preventDefault();
  }

  return (
    <form onSumbit = {handleSubmit}>
      <label>
        요청사항 : <textarea value={value} onChange={handleChange} />
      </label>
      <button type="submit">제출</button>
    </form>
  )
};
```

## 4. select 태그

```c
  const [value, setValue] = useState( 'grape' );

  const handleChange = ( event ) => {
    setValue( event.target.value );
  }
  
  const handleSubmit = ( event ) => {
    alert( '선택한 과일 : ' + value );
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        과일을 선택하세요.
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="watermelon">수박</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
  //만약 목옥에서 다중으로 선택이 되도록 할려면
  <select multiple={true} value={['B', 'C']} />
```

## 5. 여러 개의 입력 다루기

```c
  function Reservation( props ) {
    const [haveBreakfast, setHaveBreakfast] = useState( true );
    const [numberOfGuest, setNumberOfGuest] = useState( 2 );

    const handleSumbit = ( event ) => {
      alert( `아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest} `);
      event.preventDefault();
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          아침식사 여부 : <input type="checkbox" checked={haveBreakfast} onChange={( event ) => {
            setHaveBreakfast( event.target.checked );
          } } />
        </label>
        <br />
        <label>
          방문객 수 : <input type="number" value={numberOfGuest} onChange={(event) => {
            setNumberOfGuest( event.target.value );
          }} />
        </label>
        <button type="submit">제출</button>
      </form>
    );
  };
```

## 6. Input Null Value
제어 컴포넌트에 value prop을 정해진 값으로 넣으면 \
코드를 수정하지 않는 한 입력값을 바꿀 수 없음 \
만약 value prop 은 넣되 자유롭게 입력할 수 있게 만들려면 \
undefined 또는 null을 입력 해주면 됨

```c

  //이코드의 경우 처음엔 hi 였다가 1초후 에는 null 로 변경이 됨
  const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
  root.render( <input value="hi" />, rootNode );

  setTimeout( function() {
    root.render( <input value={null} />, rootNode );
  }, 1000 );
```
