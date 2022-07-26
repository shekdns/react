import React from "react";

function App( props ) {
  return <Toolbar theme="dark"></Toolbar>
};
function Toolbar( props ) {
  //이 Toolbar 컴포넌트는 ThemedButton에 theme을 넘겨주기 위해서 'theme' prop을 가져야만 한다.
  // 현재 테마를 알아야 하는 모든 버튼에 대해서 props로 전달하는 것은 굉장히 비효율적이다.
  return (
    <div>
      <ThemedButton theme={props.theme}></ThemedButton>
    </div>
  )
};
 function ThemedButton( props ) {
  return <Button theme={props.theme} />
};

 export default App;