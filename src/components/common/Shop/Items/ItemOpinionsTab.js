import React, { useEffect, useState, useContext } from "react";
import * as feedbackActions from "../../../../redux/actions/feedbackActions";
import { Translator } from "../../../../services/languages/Laguage";
import { AuthContext } from "../../../common/Contexts/AuthContext";
import { connect } from "react-redux";
import "../../../../css/shopPreview.css";
import { Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const emptyFeedback = {
  rating: "",
  userId: "",
  feedback: "",
  shopItemId: "",
};

const ItemOpinionsTab = (props) => {
  const { shopItemId } = props;
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState(emptyFeedback);
  const { feedbacks, onAddFeedback, onLoadFeedbacks } = props;

  useEffect(() => {
    setFeedback({ ...feedback, userId: user.id, shopItemId: shopItemId });
    onLoadFeedbacks(shopItemId);
  }, []);

  const handleFeedback = (event) => {
    event.preventDefault();
    onAddFeedback(feedback);
    setRating(0);
    setFeedback({ ...feedback, feedback: "", rating: "" });
  };

  const handleRating = (newRating) => {
    setRating(newRating);
    setFeedback({ ...feedback, rating: newRating });
  };

  const handleCommentChange = (event) => {
    setFeedback({ ...feedback, feedback: event.target.value });
  };

  return (
    <div className="row opinionsDiv">
      <div className="feedbacksDiv">
        {feedbacks &&
          feedbacks.map((fb) => {
            return (
              <>
                <hr />
                <div
                  key={fb.id}
                  style={{ display: "grid", marginRight: "40px" }}
                >
                  <div>
                    <div className="leftElement">
                      <h6>{fb.user.username}</h6>
                      <p className="transbox">{fb.date}</p>
                    </div>
                    <div className="rightElement">
                      <StarRatings
                        starDimension="15px"
                        rating={fb.rating}
                        starRatedColor="#db3a2e"
                        numberOfStars={5}
                      />
                    </div>
                  </div>
                  <div style={{ textAlign: "justify" }}>
                    <p>{fb.feedback}</p>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
      </div>
      <div className="commentDiv">
        <div>
          <h4>
            <Translator getString="Your opinion" />
          </h4>
          <hr />
        </div>
        <div style={{ padding: "10px" }}>
          <StarRatings
            rating={rating}
            starDimension="30px"
            starRatedColor="#db3a2e"
            changeRating={handleRating}
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div className="center">
          <textarea
            onChange={handleCommentChange}
            value={feedback.feedback}
            className="form-control"
            rows="7"
            placeholder="Your comment"
          ></textarea>
        </div>
        <div>
          <Button className="button" onClick={handleFeedback}>
            <Translator getString="Comment" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onAddFeedback: (feedback) => {
      dispatch(feedbackActions.addShopItemFeedback(feedback));
    },
    onLoadFeedbacks: (shopItemId) => {
      dispatch(feedbackActions.loadShopItemFeedback(shopItemId));
    },
  };
};

const mapsStateToProps = (state) => {
  return {
    feedbacks: state.feedbacks,
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ItemOpinionsTab);
