function RightSidebar() {
  return (
    <div>
      <div className="suggestion">
        <div className="user">
          <div className="avatar"></div>
          <div>
            <p style={{ fontWeight: 'bold' }}>your_username</p>
            <p style={{ fontSize: '12px', color: 'gray' }}>Your Name</p>
          </div>
        </div>
        <button style={{ color: '#3897f0', fontSize: '12px' }}>Switch</button>
      </div>

      <p style={{ color: 'gray', fontSize: '12px', marginBottom: '10px' }}>
        Suggestions For You
      </p>

      {[...Array(3)].map((_, i) => (
        <div key={i} className="suggestion">
          <div className="user">
            <div className="avatar"></div>
            <p style={{ fontSize: '14px' }}>user_suggested_{i + 1}</p>
          </div>
          <button style={{ color: '#3897f0', fontSize: '12px' }}>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default RightSidebar;
