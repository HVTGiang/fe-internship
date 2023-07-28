import { useState } from "react";
import { MoreSVG, LikeSVG, CommentSVG, FilledLikeSVG } from "../../assets/svg";
import { toTimeAgo, numberWithCommas } from "../../utils";
import Comments from "../Comments";
import "./style.scss";

export default function Post({ post, isLikePost }) {
  let initTime = toTimeAgo(new Date(Date.parse(post.time)));

  const [isShowComment, setIsShowComment] = useState(false);
  const [likeCount, setLikeCount] = useState(post.react.like);
  const [commentCount, setCommentCount] = useState(post.react.comment);
  const [isLike, setIsLike] = useState(isLikePost);

  return (
    <div className="post">
      <div className="post__header">
        <div className="owner">
          <div className="owner__image">
            <img src={post.author.avt} alt="Owner of the post" />
          </div>
          <div className="owner__info">
            <p className="owner__name">{post.author.name}</p>
            <p className="owner__public">{initTime}</p>
          </div>
        </div>
        <div className="post__action">
          <MoreSVG />
        </div>
      </div>
      <div className="post__image">
        <img src={post.image} alt="A man in a gentle suit" />
      </div>
      <div className="post__title">
        <p className="title__name">{post.author.name}</p>
        <p className="title__desc">{post.text}</p>
      </div>
      <div className="post__react">
        <div
          className="react__fav"
          onClick={() => {
            setIsLike(!isLike);
            setLikeCount(likeCount + (isLike ? -1 : 1));
          }}
        >
          {isLike ? <FilledLikeSVG /> : <LikeSVG />}
          <span>{numberWithCommas(likeCount)}</span>
        </div>
        <div
          className="react__comment"
          onClick={() => {
            setIsShowComment(!isShowComment);
          }}
        >
          <CommentSVG />
          <span>{numberWithCommas(commentCount)}</span>
        </div>
      </div>
      <Comments isShow={isShowComment} />
    </div>
  );
}
