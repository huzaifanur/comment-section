import "./commentBox.scss";
import VoteButton from "../voteButton/VoteButton";
export const ReplyButton = () => {
  return (
    <>
      <img src="/images/icon-reply.svg" alt="" />
      <span className="reply-text">Reply</span>
    </>
  );
};

export default function CommentBox({ comment }) {
  return (
    <div className="comment-box">
      <div className="vote-button-container">
        <VoteButton score={comment?.score} />
      </div>
      <div className="comment-container">
        <div className="comment-header">
          <div className="left">
            <img
              className="avatar-image"
              src={comment.user.image.webp}
              alt=""
            />
            <div className="username">{comment.user.username}</div>
            <div className="createdAt">{comment.createdAt}</div>
          </div>
          <div className="hide-on-mobile right ">
            <ReplyButton />
          </div>
        </div>
        <div className="comment-body">
          <p className="content">{comment.content}</p>
        </div>
      </div>
    </div>
  );
}
