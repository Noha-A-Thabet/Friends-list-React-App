import "./personList.css";
import Person from "./../Person/Person";

const Personlist = () => {
  const people = [
    {
      id: 2,
      age: 22,
      name: "john",
      job: "Designer",
      img: 23,
    },
    {
      id: 3,
      age: 35,
      name: "Bob",
      job: "developer",
      img: 25,
    },
    {
      id: 1,
      age: 56,
      name: "peter",
      job: "artist",
      img: 27,
    },
  ];

  return (
    <section>
      {people.map((man) => {
        return <Person people={man} />;
      })}
    </section>
  );
};

export default Personlist;
