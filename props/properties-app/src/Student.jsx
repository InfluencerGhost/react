import propTypes from "prop-types";

const Student = ({ name = "human", age = 0, isEmployed }) => {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  isEmployed: propTypes.bool,
};

Student.defaultProps = {
  name: "human",
  age: 0,
  isEmployed: false,
};

export default Student;
