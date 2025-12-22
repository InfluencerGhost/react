import ProImg from "./assets/emmanuel.jpg";

export default function ProfileImg() {
  const handleClick = (e) => e.target.style.visibility = "hidden";
  return <img onClick={(e) => handleClick(e)} src={ProImg} alt="Profile" />;
}
