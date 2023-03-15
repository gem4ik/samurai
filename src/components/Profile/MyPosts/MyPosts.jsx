import React from "react"
import style from "./MyPosts.module.css"
import Post from "./Post/Post"
import { onPostChangeActionCreator, buttonAddPostActionCreator } from "../../Data/Data"

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post post={p.post} likeValue={p.likeValue} />
  ))

  let newPostElement = React.createRef()

  let buttonAddPost = () => {
    props.dispatch(buttonAddPostActionCreator())
  }

  let onPostChange = () => {
    let newText = newPostElement.current.value
    props.dispatch(onPostChangeActionCreator(newText))
  }

  return (
    <div className={style.posts}>
      <div>My Posts</div>
      <div className={style.textarea}>
        <textarea
          ref={newPostElement}
          placeholder="your post"
          value={props.newPostText}
          onChange={onPostChange}
          className={style.textitem}
        />
      </div>
      <button className={style.button} onClick={buttonAddPost}>
        add post
      </button>
      <div>{postsElements}</div>
    </div>
  )
}

export default MyPosts
