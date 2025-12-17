import profilePic from "./assets/emmanuel.jpg";
function Card() {
  return (
    <div className="card">
      <img className="profile-img" src={profilePic} width={200}></img>
      <h2 className="card-title">Emmanuel Okorie</h2>
      <p className="card-description">I'm studying Software engineering </p>
    </div>
  );
}

export default Card;
