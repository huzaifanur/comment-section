import CommentBox from "../commentBox/CommentBox";
import "./replyBox.scss";
function ReplyBox({ comment }) {
  return (
    <div className="reply-container">
      <div className="vertical-rule">
        <div className="vertical-rule-inner"></div>
      </div>
      <div className="reply-area">
        <CommentBox comment={comment} />
      </div>
    </div>
  );
}
export default ReplyBox;
