import { useState } from "react";
import Input from "./components/Input";
import Post from "./components/Post";
import FormEdit from "./components/FormEdit";
import "./App.scss";

function App() {
  const initPostForm = {
    post: "",
    time: "",
    isDisable: true,
    length: 250,
  };
  const [postList, setPostList] = useState([]);
  const [postForm, setPostForm] = useState(initPostForm);
  const [editForm, setEditForm] = useState({});

  const onChange = (e) => {
    let { name, value } = e.target;
    let isDisable = true;
    if (value.length > 250) {
      e.target.value = value.slice(0, 250);
    }
    if (value.length !== 0) {
      isDisable = false;
    }
    value = e.target.value;
    setPostForm({
      ...postForm,
      [name]: value,
      isDisable: isDisable,
      length: 250 - value.length,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const time = `${
      months[now.getMonth()]
    } ${now.getDay()}, ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    setPostList([
      ...postList,
      {
        name: "Asabeneh Yetayeh",
        username: "Asabeneh",
        post: postForm.post,
        time: time,
        edit: false,
      },
    ]);
    setPostForm(initPostForm);
  };

  const handleDelete = (index) => {
    const arr = [...postList];
    arr.splice(index, 1);
    setPostList(arr);
  };

  const onEdit = (index) => {
    const arr = [...postList];
    arr[index].edit = true;
    setPostList(arr);
  };

  const handleChangeEditPost = (e) => {
    setEditForm(e.target.value);
  };

  const handleUpdate = (e, index) => {
    e.preventDefault();
    const arr = [...postList];
    arr[index].edit = false;
    arr[index].post = editForm;
    setPostList(arr);
  };

  const handleCancelEdit = (index) => {
    const arr = [...postList];
    arr[index].edit = false;
    setPostList(arr);
  };

  return (
    <div className="App">
      <div className="container">
        <Input
          onChange={onChange}
          onSubmit={onSubmit}
          isDisable={postForm.isDisable}
          value={postForm.post}
          length={postForm.length}
        />
        <div>
          {postList.map((item, index) =>
            item.edit ? (
              <FormEdit
                key={index}
                value={item.post}
                handleChangeEditPost={handleChangeEditPost}
                handleUpdate={(e) => handleUpdate(e, index)}
                handleCancelEdit={() => handleCancelEdit(index)}
              />
            ) : (
              <Post
                key={index}
                name={item.name}
                username={item.username}
                post={item.post}
                time={item.time}
                handleEdit={() => onEdit(index)}
                handleDelete={() => handleDelete(index)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
