import { useMemo, useState } from "react";

import { toTimeAgo, numberWithCommas } from "../../utils";
import { MoreSVG, LikeSVG, CommentSVG, FilledLikeSVG } from "../../assets/svg";

import Comments from "../Comments";

import "./style.scss";

export default function Post({ post, isLikePost }) {
  const [isShowComment, setIsShowComment] = useState(false);
  const [isLike, setIsLike] = useState(isLikePost);

  const commentCount = post.react.comment;
  const time = Date.parse(post.time);

  let likeCount = post.react.like
  const timeAgo = toTimeAgo(time);

  // useEffect(() => {
  //   const timeRunnerID = setInterval(() => {
  //     setTime((time) => time + 1000);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timeRunnerID);
  //   };
  // }, [time]);

  likeCount = useMemo(() => {
    return isLike ? likeCount + 1 : likeCount
  }, [isLike])

  const { author: { avt, name }, image, text } = post

  return (
    <div className="post">
      <div className="post__header">
        <div className="owner">
          <div className="owner__image">
            <img src={avt} alt="Owner of the post" />
          </div>
          <div className="owner__info">
            <p className="owner__name">{name}</p>
            <p className="owner__public">{timeAgo}</p>
          </div>
        </div>
        <div className="post__action">
          <MoreSVG />
        </div>
      </div>
      <div className="post__image">
        <img src={image} alt="A man in a gentle suit" />
      </div>
      <div className="post__title">
        <p className="title__name">{name}</p>
        <p className="title__desc">{text}</p>
      </div>
      <div className="post__react">
        <div
          className="react__fav"
          onClick={() => {
            setIsLike(prevIsLike => !prevIsLike);
          }}
        >
          {isLike ? <FilledLikeSVG /> : <LikeSVG />}
          <span>{numberWithCommas(likeCount)}</span>
        </div>
        <div
          className="react__comment"
          onClick={() => {
            setIsShowComment(prevState => !prevState);
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
