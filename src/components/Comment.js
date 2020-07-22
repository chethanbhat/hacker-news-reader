import React, { useState, useEffect } from "react";
import hackerNewsService from "../services/hackernews";
import moment from "moment";

const Comment = ({ id }) => {
  const [commentId] = useState(id);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    const getComment = async () => {
      const currentComment = await hackerNewsService.getItem(commentId);
      setComment(currentComment);
    };
    getComment();
    return () => {
      setComment(null);
    };
  }, [commentId]);

  const getRelativeTime = (time) => {
    let commentDate = new Date(time * 1000);
    return moment(commentDate).fromNow();
  };

  if (!comment) {
    return null;
  }
  return (
    <div className="list-group-item">
      <span className="badge badge-secondary">
        {comment.deleted || comment.dead ? "DELETED" : comment.by}
      </span>
      <span className="text-dark ml-2">{getRelativeTime(comment.time)}</span>
      <div dangerouslySetInnerHTML={{ __html: comment.text }}></div>
      <div className="list-group inner-list-group">
        {comment.kids
          ? comment.kids.map((kid) => <Comment key={kid} id={kid} />)
          : null}
      </div>
    </div>
  );
};

export default Comment;
