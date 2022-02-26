import './voteButton.scss'

export default function VoteButton() {
  return (
    <div className="vote-widget">
      <div>
        <img src="/images/icon-plus.svg" alt="" />
      </div>
      <div>23</div>
      <div className="minus">
        <img className="minus-image" src="/images/icon-minus.svg" alt="" />
      </div>
    </div>
  )
}
