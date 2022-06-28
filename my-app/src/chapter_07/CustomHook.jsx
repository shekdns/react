import React, { useState, useEffect } from "react";

//커스텀 HOOK 예제 
//1. UserStatus라는 컴포넌트는 isOnline 이라는 state에 따라서 사용자의 상태가 온라인인지 
//아닌지를 텍스트로 보여주는 컴포넌트

function UserStatus( props ) {
  const [isOnline, setIsOnline] = useState( null );

  useEffect(() => {
    function handleStatusChange( status ) {
      setIsOnline( status.isOnline );
    }

    SerVerAPI.subscribeUserStatus( props.user.id, handleStatusChange );
    return () => {
      SerVerAPI.unsubscribeUserStatus( props.user.id, handleStatusChange );
    };

    if( isOnline === null ) {
      return '대기중....';
    }

    return isOnline ? '온라인' : '오프라인';
  }); 
};

//2. 동일한 로직의 UserListItem 함수
function UserListItem( props ) {
  const [isOnline, setIsOnline] = useState( null );
  
  useEffect(() => {
    function handleStatusChange( status ) {
      setIsOnline( status.isOnline );
    }

    SerVerAPI.subscribeUserStatus( props.user.id, handleStatusChange );
    return () => {
      SerVerAPI.unsubscribeUserStatus( props.user.id, handleStatusChange );
    };
  }); 

  return (
    <li style={{ color : isOnline ? 'green' : 'black' }}>
      {props.user.name}
    </li>
  );
};

//3. 이렇게 동일한 HOOK 을 사용할땐 커스텀 훅을 개발
function useUserStatus( userId ) {
  const [isOnline, setIsOnline] = useState( null );
  
  useEffect(() => {
    function handleStatusChange( status ) {
      setIsOnline( status.isOnline );
    }

    SerVerAPI.subscribeUserStatus( props.user.id, handleStatusChange );
    return () => {
      SerVerAPI.unsubscribeUserStatus( props.user.id, handleStatusChange );
    };
  }); 

  return isOnline;
};

//위의 3번째 커스텀 훅을 사용해서 UserStatus 및 UserListItem 로직 변경
function CustomUserStats( props ) {
  const isOnline = useUserStatus( props.user.id );
  
  if( isOnline === null ) {
    return '대기중...';
  };

  return isOnline ? '온라인' : '오프라인';
};
function CustomeUserListItem( props ) {
  const isOnline = useUserStatus( props.user.id );

  return (
    <li style={{ color : isOnline ? 'green' : 'black' }}>
      {props.user.name}
    </li>
  );
};




