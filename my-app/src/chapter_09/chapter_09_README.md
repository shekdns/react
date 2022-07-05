# CHAPTER 9 은 조건부 렌더링
### `조건부 렌더링란 무엇인가?`

Conditional Rendering( 조건부 렌더링 ) \
-> Condition 이라고 하면 조건 상태를 의미 \
여기서의 컨디션은 조건의 의미 \

=> 결론적으로 조건부 렌더링은 어떠한 조건에 따라서 렌더링이 달리지는 것

```c
  function UserGreeting( props ) {
    return <h1>다시 오셨군요!.</h1>
  };
  
  function GuestGreeting( props ) {
    return <h1>회원가입을 해주세요.</h1>
  };

  function Greeting( props ) {
    const isLoggedIn = props.isLoggedIn;

    if( isLoggedIn ) {
      return <UserGreeting />; 
    }
    return <GuestGreeting />;
  }
  //조건부 렌더링
```

## 자바스크립트의 Truthy 와 Falsy
-> Truthy = true는 아니지만 true로 여겨지는 값
-> Falsy  = false는 아니지만 false로 여겨지는 값

```c
//대표적인 자바스크립트의 Truthy 와 Falsy 값
//truthy
true
{} ( empty object )
[] ( empty array )
42 ( number, not zero )
"0", "false" ( string, not empty )

//falsy
false
0, -0 ( zero, minus zero )
On ( BigInt zero )
'', "", `` ( empty string )
null
undefiend
NaN ( not a number )
```

## Element 변수
조건부 렌더링을 사용하다 보면 렌더링해야 될 컴포넌트를 변수처럼 다룰 때 \
-> 이때 사용할 수 있는 방법이 바로 엘리먼트 변수 \
-> 말 그대로 리액트 엘리먼트를 변수처럼 다루는 방법

```c
  function LoginButton( props ) {
    return (
      <button onClick={props.onClick}>
        로그인
      </button>
    );
  };

  function LogoutButton( props ) {
    return (
      <button onClick={props.onClick}>
        로그아웃
      </button>
    );
  };

  function LoginControl( props ) {
    const [isLoggedIn, setIsLoggedIn] = useState( false );

    const handleLoginClick = () => {
      setIsLoggedIn( true );
    } 

    const handleLogoutClick = () => {
      setIsLoggedIn( false );
    }

    let button;

    if( isLoggedIn ) {
      button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
```
## 인라인 조건 -> inLine Condition
-> 조건문을 코드 안에 집어넣는 것

### Inline if
-> if문을 필요한 곳에 직접 입력해서 사용 \
-> if문의 경우 && 연산자를 사용

### true && expression -> expression( true ) || false && expression -> false

```c
  function Mailbox( props ) {
    const unreadMessages = props.unreadMessages;

    return (
      <div>
        <h1>안녕하세요 !</h1>
        {unreadMessages.length} > 0 && 
          <h2>
            현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
          </h2>
      </div>
    )
  }

//&& 연산자를 사용할 때, 조건문에 Falsy expression을 사용하면
//뒤에 나오는 expression은 평가되지 않지만 Falsy expression의 결괏값이
//그대로 리턴이 됨  <=== 주의 사항 Ex

//카운트 값에 0이 들어가서 0이나옴 
function Counter( props ) {
  const count = 0;

  return (
    <div>
      {count && <h1>현재 카운트 : {count}</h1>}
    </div>
  );
}
```
### Inline if-Else
-> if-Else문을 필요한 곳에 직접 입력해서 사용 \
-> 조건문에 값이 따라 다른엘리먼트를 보여줄때 사용
-> 삼항 연산자인 ? 을 사용

### conditon ? true : false

실제로 리액트에서 사용하는 형태 
```c
  function UserStatus( props ) {
    return (
      <div>
        이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다. 
      </div>
    )
  }
```

```c
  function LoginControl( props ) {
    const [isLoggedIn, setIsLoggedIn] = useState( false );

    const handleLoginClick = () => {
      setIsLoggedIn( true );
    }

    const handleLogoutClick = () => {
      setIsLoggedIn( false )'
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} />}
      </div>
    )
  }
```

## Component 렌더링 막기
-> 컴포넌트를 렌더링 하고싶지 않을 때 \
-> 바로 null 을 리턴하면 렌더링 되지 않음


```c
  function WarningBanner( props ) {
    if( !props.warning ) {
      return null;
    }

    return (
      <div>경고 ! </div>
    );
  }
  
  //실제 사용 컴포넌트

  function MainPage( props ) {
    const [showWarning, setShowWaring] = useState( false );

    const handleToggleClick = () => {
      setShowWarning( prevShowWarning => !prevShowWarning );
    }

    return (
      <div>
        <WarningBanner warning={showWaring} />
        <button onClick={handleToggleClick}>
          {showWarning ? '감추기' : '보이기'}
        </button>
      </div>
    )
  };
```