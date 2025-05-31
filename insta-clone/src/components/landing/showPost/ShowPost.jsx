import React from "react";


function ShowPost() {
   return (
    <div>
      <div className="story-bar">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="story">
            <div className="story-img">
              <div className="story-img-inner"></div>
            </div>
            <p style={{ fontSize: '12px', marginTop: '5px' }}>User{i + 1}</p>
          </div>
        ))}
      </div>

      {[...Array(3)].map((_, i) => (
        <div key={i} className="post">
          <div className="post-header">
            <div className="avatar"></div>
            <strong>user_{i + 1}</strong>
          </div>
          <div className="post-image"></div>
          <div className="post-actions">
            <span>❤️</span>
            <span>💬</span>
            <span>📤</span>
          </div>
          <p><strong>user_{i + 1}</strong> Caption goes here... #fun</p>
        </div>
      ))}
    </div>
  );
}

export default ShowPost;
