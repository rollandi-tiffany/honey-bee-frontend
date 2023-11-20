import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const URL = `https://honeybee-sitters-backend.onrender.com/user/${id}`;
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Network response was not ok" + response.statusText);
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading user: {error.message}</p>;
  }

  return (
    <div className="user-profile">
      <h2>Main</h2>
      <h3>Username: {user.username}</h3>

      <Link to={"/"} className="link-button">
        Back home
      </Link>
    </div>
  );
};

export default User