import "./voteButton.scss";
import { ReplyButton } from "../commentBox/CommentBox";
export default function VoteButton({ score = 0 }) {
  return (
    <div className="vote-container">
      <div className="vote-widget">
        <div>
          <img src="/images/icon-plus.svg" alt="" />
        </div>
        <div>{score}</div>
        <div className="minus">
          <img className="minus-image" src="/images/icon-minus.svg" alt="" />
        </div>
      </div>
      <div className="hide-on-desktop">
        <ReplyButton />
      </div>
    </div>
  );
}
