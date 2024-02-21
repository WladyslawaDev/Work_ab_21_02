import React, {useState} from "react";
import Button from "../Button/Button";
import EmojiButton from "../Feedback_VV/SymbButton";
import "./stylesvv.css";

const FeedbackVV = () => {
    const [likes, setLikes] = useState(0);
    const [notLikes, setNotLikes] = useState(0);

    const addLike = () => {
        setLikes(likes+1);
    };
    const addNotLike = () => {
        setNotLikes(notLikes+1);
    };

    const setReset = () => {
        setLikes(0);
        setNotLikes(0);
    };

    return (
        <div className="centered-container">
        <div className="counter-wrapper">
          <EmojiButton emoji="👍" label="Like" onClick={addLike} />
          {likes} Likes
          <EmojiButton emoji="👎" label="Dislike" onClick={addNotLike} />
          {notLikes} Dislikes
          <EmojiButton emoji="🔄" label="Reset All" onClick={setReset} />
        </div>
      </div>
      );
    };

    export default FeedbackVV;