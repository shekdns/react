import React from "react";
import Comment from "./Comment";

const comments = [
  { name    : "홍길동",
    comment : "안녕하세요 홍길동 입니다." },
  { name    : "이철수",
    comment : "안녕하세요 이철수 입니다." },
  { name    : "이슬이",
    comment : "안녕하세요 이슬이 입니다." }
];

function CommentList( props ) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
      {/* <Comment name={"이주환"} comment={"안녕하세요, 테스트1입니다."} />
      <Comment name={"이주환"} comment={"안녕하세요, 테스트2입니다."} /> */}
    </div>
  );
};

export default CommentList;
