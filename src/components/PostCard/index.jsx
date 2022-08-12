import './styles.css';

export const PostCard = ({ title, cover, body, id }) =>  (
    <div key={id} className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h1>{title} {id}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
