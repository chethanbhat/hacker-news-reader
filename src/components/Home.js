import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import Stories from "./Stories";
import Pagination from "./Pagination";

// Service

import hackerNewsService from "../services/hackernews";

const Home = () => {
  let { page } = useParams();
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [storiesPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(!page ? 1 : Number(page));
  const [storyType, setStoryType] = useState("topstories");

  const getStories = async (type) => {
    try {
      const topStories = await hackerNewsService.getStories(type);
      setStories(topStories);
      setIsLoading(false);
    } catch (exception) {
      console.log(exception);
    }
  };

  useEffect(() => {
    getStories(storyType);
    return () => {
      setStories(null);
    };
  }, [storyType]);

  // Pagination Logic

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories
    ? stories.slice(indexOfFirstStory, indexOfLastStory)
    : [];

  const paginate = (number) => setCurrentPage(number);

  const changeStoryType = (type) => {
    setStoryType(type);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="my-5 mx-auto d-flex justify-content-center flex-wrap">
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={() => changeStoryType("topstories")}
        >
          Top
        </button>
        <button
          className="btn btn-secondary mx-1  my-1"
          onClick={() => changeStoryType("newstories")}
        >
          New
        </button>
        <button
          className="btn btn-success mx-1  my-1"
          onClick={() => changeStoryType("beststories")}
        >
          Best
        </button>
        <button
          className="btn btn-warning mx-1  my-1"
          onClick={() => changeStoryType("askstories")}
        >
          Ask
        </button>
        <button
          className="btn btn-danger mx-1  my-1"
          onClick={() => changeStoryType("showstories")}
        >
          Show
        </button>
        <button
          className="btn btn-info mx-1  my-1"
          onClick={() => changeStoryType("jobstories")}
        >
          Job
        </button>
      </div>
      {stories ? (
        <>
          <Pagination
            storiesPerPage={storiesPerPage}
            totalStories={stories.length}
            currentPage={currentPage}
            paginate={paginate}
          />
          <Stories
            stories={currentStories}
            indexOfFirstStory={indexOfFirstStory}
            loading={isLoading}
          />
        </>
      ) : null}
    </div>
  );
};

export default Home;
