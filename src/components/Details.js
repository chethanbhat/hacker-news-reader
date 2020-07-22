import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import hackerNewsService from "../services/hackernews";

import Comment from "./Comment";
import Spinner from "./Spinner";

const Details = () => {
  let { id } = useParams();
  let history = useHistory();

  const [storyId] = useState(id);
  const [story, setStory] = useState(null);
  useEffect(() => {
    const getStory = async () => {
      const currentStory = await hackerNewsService.getItem(storyId);
      setStory(currentStory);
    };
    getStory();
    return () => {
      setStory(null);
    };
  }, [storyId]);
  if (!story) {
    return <Spinner />;
  }
  return (
    <div>
      <button
        className="btn btn-dark text-light my-5 d-block mx-auto"
        onClick={() => history.goBack()}
      >
        Back
      </button>
      <div className="card">
        <div className="card-body">
          <div className="mb-5">
            <h3 className="card-title text-dark text-center">{story.title}</h3>
            <Link to={story.url}>
              <p className="text-center">{story.url}</p>
            </Link>
          </div>
          <h5>Comments ({story.descendants})</h5>
          <div className="list-group outer-list-group">
            {story.kids ? (
              story.kids.map((kid) => <Comment key={kid} id={kid} />)
            ) : (
              <p>Not Yet...</p>
            )}
          </div>
        </div>
      </div>
      <button
        className="btn btn-dark text-light my-5 d-block mx-auto"
        onClick={() => history.goBack()}
      >
        Back
      </button>
    </div>
  );
};

export default Details;
