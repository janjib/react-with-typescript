import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2021/03/02/721acbac-7a6b-11eb-9fc3-2f3c8e08d261_image_hires_173637.jpg?itok=Z2EHId9I&v=1614677806",
      age: 36,
      note: "Allergic to stay on the same team",
    },
  ]);

  // people.map((person) => {
  //   person.age;
  // });

  return (
    <div className="App">
      <h1>Welcome to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
