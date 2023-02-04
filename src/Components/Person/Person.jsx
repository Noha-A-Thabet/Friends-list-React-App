import "./person.css";

const Person = ({ people }) => {
  const { name, age, job, id, img } = people;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  console.log(url);
  return (
    <div className="person">
      <img src={url} alt="" />
      <div key={id}>
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{job}</h4>
      </div>
    </div>
  );
};
export default Person;
