import React, { useState, useEffect } from "react";

const userList = [
  { id : 1, name : 'Inje' },
  { id : 2, name : 'Mike' },
  { id : 3, name : 'Steve' }
];

//커스텀 유저
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
function ChatUserSelector( props ) {
  const [userId, setUserId] = useState(1);
  const isUserOnline = useUserStatus( userId );

  return(
    <>
      <Circle color={isUserOnline ? 'green' : 'red'} />
      <select value={userId} onChange={event => setUserId( Number( event.target.value ))}>
        {userList.map( user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </>
  );
}
/*
  useState() 로 userId라는 state를 생성 후
  다음 useUserStatus 훅의 파라미터로 들어감
  이렇게 setUserId로 함수를 통해 userId가 변경 될 때 마다 
  useUserStatus 에서 userId가 변경 되고 사용이 됨 
*/