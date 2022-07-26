# CHAPTER 14 Context
## 데이터를 기존의 props를 통해 전달하는 방식 대신 컴포넌트 트리를 통해 곧바로 전달하는 방식

```c
//사용법
const MyContext = React.createContext( 기본값 );
//만약 상위 레벨에 매칭되는 Provider가 없다면 기본값이 사용 됨
//기본값으로 undefined를 넣으면 기본값이 사용되지 않음

//해당 컨텍스트 데이터를 받을 수 있도록 설정
<MyContext.Provider value={}> 

//Context.Consumer
<MyContext.Consumer>
  {value => /* 컨텍스트의 값에 따라서 컴포넌트들을 렌더링*/}
</MyContext.Consumer> 
```
