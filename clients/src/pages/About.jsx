import { useAuth } from "../store/authtoken";

export const About = () => {
  const { user } = useAuth();
  return (
    <section className="about">
      <h1>About Eduverse</h1>
      <p>hello {user.UserData.username}</p>
      <p>
        Eduverse is an innovative learning platform dedicated to helping
        students grow their knowledge and skills. We provide quality courses,
        expert mentors, and interactive learning experiences to make education
        engaging and accessible for everyone.
      </p>
    </section>
  );
};
