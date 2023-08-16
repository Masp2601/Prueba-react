import dayjs from 'dayjs';
import es from 'dayjs/locale/es';

const CommentCard = ({ owner, message, publishDate }) => {

  const dateFormated = dayjs(publishDate).locale(es).format('DD MMM YYYY [-] hh:mm a');

  return (
    <div className="comment-card">
      <div className="comment-header">
        <img
          src={owner.picture}
          alt="Comment user avatar"
        />
        <div>
          <p>{owner.title} {owner.firstName} {owner.lastName}</p>
          <p>{dateFormated}</p>
        </div>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default CommentCard;
