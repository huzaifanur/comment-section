import React from "react";

import "./commentPage.scss";
import data from "../../../data";
import CommentBox from "../../commentBox/CommentBox";
import ReplyBox from "../../replyBox/ReplyBox";

export default function CommentPage() {
  let comments = data.comments;

  return (
    <>
      {comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <CommentBox comment={comment} />
          {comment.replies.length > 0 &&
            comment.replies.map((reply) => (
              <ReplyBox key={reply.id} comment={reply} />
            ))}
        </React.Fragment>
      ))}
    </>
  );
}
