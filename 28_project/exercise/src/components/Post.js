import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import '../styles/components/Post.scss'

const Post = (props) => {
  const {name, username, post, time, handleDelete, handleEdit} = props
  return (
    <div className="post-container">
      <div className="user-container">
        <input type="radio" />
        <span className="name">{name}</span>
        <small className="username">@{username}</small>
      </div>
      <p className="content">
        {post}
      </p>
      <div className='detail'>
        <div className="option">
          <FaEdit className='icon' onClick={handleEdit}/>
          <FaTrashAlt className='icon' onClick={handleDelete}/>
        </div>
        <p className="time">{time}</p>
      </div>
    </div>
  );
};

export default Post
