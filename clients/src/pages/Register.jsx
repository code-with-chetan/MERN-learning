import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginRegister.css";

const URL = "http://localhost:4000/api/auth/registration";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      }
    } catch (error) {
      console.log("registration error:", error.message);
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
                  src="/images/registration-png.png"
                  alt="registration image"
                  width="400"
                  height="400"
                />
              </div>
              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleChangeInput}
                    />
                  </div>
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
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="enter phone number"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
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
                  <button type="submit">Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
