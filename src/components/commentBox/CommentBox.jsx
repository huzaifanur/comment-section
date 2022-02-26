import './commentBox.scss'
import data from '../../data'
import VoteButton from '../voteButton/VoteButton'
export default function CommentBox() {
  let { comments } = data
  console.log(comments)

  const Reply = () => {
    return (
      <>
        <img src="/images/icon-reply.svg" alt="" />
        <span className="reply-text">Reply</span>
      </>
    )
  }
  return (
    <>
      {comments.map((comment) => (
        <div className="container">
          <div className="vote-button-container">
            <VoteButton />
            <div className="reply-desktop hide-on-desktop">
              <Reply />
            </div>
          </div>
          <div className="comment-box">
            <div className="comment-header">
              <div className="left">
                <img className="avatar-image" src={comment.user.image.webp} alt="" />
                <div className="username">{comment.user.username}</div>
                <div className="createdAt">{comment.createdAt}</div>
              </div>
              <div className="right hide-on-mobile">
                <Reply />
              </div>
            </div>
            <div className="comment-body">
              <p className="content">{comment.content}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
