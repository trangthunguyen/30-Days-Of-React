import '../styles/components/Post.scss'

const Post = () => {
  return (
    <div className="post-container">
      <div className="user-container">
        <input type="radio" />
        <span className="name">Asabeneh Yetayeh</span>
        <small className="username">@Asabeneh</small>
      </div>
      <p className="content">
        30 Days Of React challenge has been started on 1 October and still
        ongoing. It will end the 30 October 2020. It was a real challenge for
        everyone. Students learned quite a lot of concepts. I hope this will
        help lots of students.
      </p>
      <p className="time">Feb 24, 2022 10:08 am</p>
    </div>
  );
};

export default Post
