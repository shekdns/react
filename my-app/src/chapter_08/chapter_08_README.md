# CHAPTER 8 은 EVENT 내용
### `이벤트란 무엇인가?`

사건이라는 의미 -> 특정사건을 의미

## 1. 이벤트 처리하기
DOM의 Event
```c
  //일방적인 javascript 버튼 이벤트 함수
  <button onclick="activate();">
    Activate
  </button>

  //react의 처리
  //리액트에서는 함수 그대로 전달
  <button onClick={activate}>
    Activate
  </button>
```
\

## EventHanlder or EventListner
```c
  class Toggle extends React.Component {
    constructor( props ) {
      super( props );

      this.state = { isToggleOn : true };

      //callback에서 `this`를 사용하기 위해서는 바인딩을 필수적으로 해줘야 함
      this.handleClick = this.handleClick.bind( this );
    }

    handleClick() {
      this.setState( prevState => ({
        isToggleOn : !prevState.isToggleOn
      }));
    }

    render() {
      return (
        <button onClick={this.handleClick}>
          { this.state.isToggleOn ? '켜짐' : '꺼짐' }
        </button>
      );
    }
  }
```
### 주의 사항 
JSX에서 this의 의미에 대해 유의해야 하는데 bind를 하는 이유는 \
자바스크립트에서는 기본적으로 클래스 함수들이 바운드 되지 않기 때문입니다. \
bind를 하지 않으면 this.handleClick은 글로벌 스코프에서 호출되는데 \
글로벌 스코프에서 this.handleClick은 undefined이므로 사용할 수 없습니다. \
이것은 리액트에만 해당되는 내용이 아니라 자바스크립트 함수의 작동 원리 중 일부분 입니다.

bind를 사용하는 방식이 번거롭게 느껴진다면 아래의 클래스 필드 문법을 사용 할 수 있습니다.

## Class field syntax
```c
class MyButton extends React.Component {
  //1.
  handleClick = () => {
    console.log( 'this is: ', this );
  }

  render() {
    retrun (
      <button onClick={this.handleClick}>
        클릭
      </button>
    );
  }

  //2.
  handleClick {
    console.log( 'this is: ', this );
  }

  render() {
    retrun (
      <button onClick={() => this.handleClick()}>
        클릭
      </button>
    );
  }

  //3. 위의 1 , 2와 같은 클래스 컴포넌트는 거의 사용 하지 않음
  //아래의 컴포넌트로 변환 된 것을 씀

  function Toggle( props ) {
    const [isToggleOn, setIsToggleOn] = useState( true );

    //방법 1. 함수 안에 함수로 정의
    function handleClick() {
      setIsToggleOn( (isToggleOn) => !isToggleOn );
    }

    //방법 2. arrow function을 사용하여 정의
    const handleClick = () => {
      setIsToggleOn( (isToggleOn) => !isToggleOn );
    }

    return (
      <button onClick={handleClick}>
        {isToggleOn ? "켜짐" : "꺼짐"}
      </button>
    );
  }
}
```

## 2. 주장 Arguments 전달하기
같은 의미인 Parameter ( 매개변수 ) \
매개변수를 전달하는 방법
```c
//1. arrow function
<button onClick={(event) => this.deleteItem(id, event)}> 삭제하기 </button>

//2. bind
<button onClick={this.deleteItem.bind( this, id )}> 삭제하기 </button>

//둘다 똑같이 첫번재 매개변수는 id, 두번재 매개변수는 event
//지금은 거의 사용안함

//함수 컴포넌트
function MyButton( props ) {
  const handleDelete = ( id, event ) => {
    console.log( id, event.target );
  };

  return (
    <button onClick={(event) => handleDelete( 1, event )}>삭제하기</button>
  );
} 

```

