import { NavLink } from "react-router-dom";
import "../index.css";

export const Error = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
      <NavLink to="/" className="home-btn">
        ⬅ Back to Home
      </NavLink>
    </div>
  );
};
