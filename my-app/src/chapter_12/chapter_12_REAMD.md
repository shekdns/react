# CHAPTER 12 Shared State
## 공유 자원

### 예제 코드 물의 끓음 여부를 알려주는 컴포넌트
자식 컴포넌트
```c
function BoilingVerdict( props ) {
  if( props.celsius >= 100 ) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}
```

부모 컴포넌트
```c
function Calculator( props ) {
  const [temperature, setTemperature] = useState( '' );

  const handleChange = ( event ) => {
    setTemperature( event.target.value );
  }

  return (
    <fieldset>
      <legend>섭씨 온도를 입력하세요;</legend>
      <input value={temperature} onChange={handleChange} />
      <BoilingVerdict celsius={parseFloat( temperautre )} />
    </fieldset>
  )
}
```

12장의 경우 실습이 대부분이라 설명은 PASS
