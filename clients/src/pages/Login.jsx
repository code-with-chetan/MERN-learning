import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginRegister.css";

const URL = "http://localhost:4000/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //handling form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setUser({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.log("login page", error.message);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.png"
                  alt="registration image"
                  width="400"
                  height="400"
                />
              </div>
              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter  email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleChangeInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <button type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
