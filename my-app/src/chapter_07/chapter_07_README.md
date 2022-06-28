# CHAPTER 7 은 HOOK 내용
### `훅이란 무엇인가?`

Hook 이라는 건 리액트의 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 것

## 1. useState
가장 대표적이고 많이 사용되는 훅 -> state를 사용하기 위한 훅
### `문법 => const[변수명, set함수명] = useState(초깃값);`
useState()를 호출할 때에는 파라미터로 선언할 state의 초깃값이 들어갑니다. \
useState에 초깃값을 넣어 useState()를 호출하면 리턴 값으로 배열이 나옵니다. \
리턴된 배열에는 두 가지의 항목이 들어있는데 첫 번째 항목은 state로 선언된 변수 \
두번 째 항목은 해당 state의 set함수 입니다.

## 2. useEffect
useEffect()는 사이드 이펙트를 수행하기 위한 훅
### `문법 => useEffect(이펙트 함수, 의존성 배열);`
첫 번째 파라미터로는 에픽트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어갑니다. \
의존성 배열은 말 그대로 이 이펙트가 의존하고 있는 배열인데 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됩니다. \
만약 이펙트 함수가 마운트와 언마운트시에 단 한 번씩만 실행되게 하고 싶으면, 의존성 배열에 빈 배열[]을 넣으면 됩니다. \
의존성 배열은 생략할 수도 있는데 생략하게 되면 컴포넌트가 업데이트될 때마다 호출됩니다. \

의존성 배열 없이 useEffect()를 사용하면 리액트는 DOM이 변경된 이후에 해당 이펙트 함수를 실행하라는 의미로 받아들입니다. \

## 3. useMemo
Memoized value를 리턴하는 훅
### `문법`

```c
   const momoizedValue = useMemo (  
        () => { 
          // 연산량이 높은 작업을 수행하여 결과를 반환 
          return computeExpensiveValue( 의존성 변수 1, 의존성 변수 2 ); 
        }, 
        [의존성 변수1, 의존성 변수2] 
    ); 
```

의존성 배열에 들어있는 변수가 변했을 경우에만 새로 create 함수를 호출하여 결괏값을 반환 \
그렇지 않은 경우에는 기존 함수의 결괏값을 그대로 반환 \
useMemo() 훅을 사용하면 컴포넌트가 다시 렌더링 될 때마다 \
연산량이 높은 작업을 반복하는 것을 피할수 있음 \

** useMemo() 훅을 사용할 때 기억해야 할 점은 \
   1. \
   useMemo()로 전달된 함수는 렌더링이 일어나는 동안 실행된다는 점 \
   그렇기 때문에 일반적으로 렌더링이 일어나는 동안 실행돼서는 안될 \
   작업을 useMemo()의 함수에 넣으면 안됨 \
   EX ) useEffect() 훅에서 실행돼야 할 사이드 이펙트 등

   2. \
   의존성 배열을 꼭 넣어야함 , 빈 배열을 넣게 되면 마운트 시에만 함수가 실행 됨
**

```c
  const memorizedValue = useMemo(
    () => computeExpensiveValue( a, b )
  );
```

## 4. useCallback
이전에 나온 useMemo와 유사한 역할
한 가지 차이점은 **값이 아닌 함수를 반환한다는 점 **
### `문법`
```c
  const memorizedCallback = useCallback(
    () => {
      doSomething( 의존성 변수1, 의존성 변수2 ); 
    },
    [의존성 변수1, 의존성 변수2]
  );
```
useCallback( function, dependencies) == useMemo( () => function, dependencies ) 와 동일 \








# 복습 생명주기 
## 1. 마운트 componentDidMount()
1 - 1. 마운트 => 컴포넌트가 생성될 때

## 2. 업데이트 componentDidUpdate()
2 - 1. 업데이트 => 컴포넌트의 props 가 변경될 때 \
2 - 2. setState() 함수 호출에 의해 state가 변경될 때 \
2 - 3. forceUpdate()라는 강제 업데이트 함수가 호출될 때 \

## 3. 언마운트 componentWillUnmount()
3 - 1. 언마운트 => 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때
