import React from "react";
import Story from "./Story";
import Spinner from "./Spinner";

const Stories = ({ stories, loading, indexOfFirstStory }) => {
  if (!stories || loading) {
    return <Spinner />;
  }
  return (
    <div className="list-group">
      {stories.map((story, index) => (
        <Story
          storyIndex={indexOfFirstStory + index + 1}
          key={story}
          id={story}
        />
      ))}
    </div>
  );
};

export default Stories;
