import "../index.css";

export const Home = () => {
  return (
    <div className="home-container">
      {/* 🌟 HERO SECTION */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to EduVerse</h1>
          <p>
            Empower your learning journey with interactive courses designed for
            students and professionals.
          </p>
          <button className="cta-btn">Get Started</button>
        </div>

        <div className="hero-image">
          <img src="./images/homepage.png" alt="Education Illustration" />
        </div>
      </section>

      {/* 🧠 ABOUT SECTION */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src="./images/about.png" alt="About EduVerse" />
          </div>

          <div className="about-text">
            <h2>About Us</h2>
            <p>
              EduVerse is an innovative online learning platform built to make
              education accessible, engaging, and affordable. Our mission is to
              help learners and professionals grow by providing practical and
              hands-on learning experiences.
            </p>

            <div className="stats">
              <div className="stat">
                <h3>50K+</h3>
                <p>Active Students</p>
              </div>
              <div className="stat">
                <h3>200+</h3>
                <p>Expert Instructors</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Available Courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
