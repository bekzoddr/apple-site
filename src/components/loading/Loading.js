import React, { useState, useEffect } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div id="loader">
          <div class="loader"></div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
};

export default Loading;
