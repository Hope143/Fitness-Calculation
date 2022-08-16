import React, { useContext, useEffect, useState } from "react";
import NewComment from "./newComment";
import NotificationContext from "../../store/notification-context";
import CommentList from "./commentList";

function CommenHandler() {
  const NotificationCtx = useContext(NotificationContext);

  const [comments, setComments] = useState([]);

  console.log(comments);

  useEffect(() => {
    fetch("/api/feedback/")
      .then((response) => response.json())
      .then((data) => setComments(data.documents));
  }, []);

  function addCommentHandler(commentData) {
    NotificationCtx.showNotification({
      title: "Adding Comment...",
      message: "Adding you Comment",
      status: "pending",
    });

    fetch("/api/feedback/", {
      method: "POST",
      body: JSON.stringify({
        commentData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        NotificationCtx.showNotification({
          title: "Success!",
          message: "Successfully added your Comment",
          status: "success",
        });
      })
      .catch((error) => {
        NotificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Adding you Comment",
          status: "error",
        });
      });
  }

  return (
    <div>
      <NewComment onAddComment={addCommentHandler} />
      <CommentList comments={comments} />
    </div>
  );
}

export default CommenHandler;
