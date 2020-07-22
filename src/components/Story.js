import React, { useState, useEffect } from "react";
import hackerNewsService from "../services/hackernews";
import { Link } from "react-router-dom";
import moment from "moment";

const Story = ({ id, storyIndex }) => {
  const [storyId, setStoryId] = useState(id);
  const [story, setStory] = useState(null);
  useEffect(() => {
    const getStory = async () => {
      const currentStory = await hackerNewsService.getItem(storyId);
      setStory(currentStory);
    };
    getStory();
    return () => {
      setStory(null);
      setStoryId(null);
    };
  }, [storyId]);

  const getRelativeTime = (time) => {
    let commentDate = new Date(time * 1000);
    return moment(commentDate).fromNow();
  };

  if (!story) {
    return null;
  }
  return (
    <div className="list-group-item d-flex flex-wrap bg-light">
      <div className="align-self-end mr-5 text-center text-dark story-index d-flex flex-md-column flex-sm-row justify-content-md-between justify-content-sm-start">
        <h6 className="mb-2">{storyIndex}</h6>
        <p className="bg-warning text-light px-1 font-weight-bold">
          {story.score}p
        </p>
      </div>
      <div>
        <a className="d-block text-dark my-3" href={story.url}>
          <h5>{story.title}</h5>
        </a>
        <div className="d-flex align-items-center flex-wrap">
          <span className="badge badge-dark text-light comment-link mr-2">
            <Link to={`/story/${story.id}`}>Comments {story.descendants}</Link>
          </span>

          <span className="text-dark mr-2">By {story.by} |</span>
          {story.type === "job" ? (
            <span className="text-dark mr-2">{story.type}</span>
          ) : null}
          {story.type === "poll" ? (
            <span className="text-dark mr-2">{story.type}</span>
          ) : null}
          <span className="text-dark mr-2">{getRelativeTime(story.time)}</span>
        </div>
      </div>
    </div>
  );
};

export default Story;
