import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { StudentTable } from "./components/studentTable";
import { data } from "./utils/data";
function App() {
  const [students, setStudent] = useState([data]);
  return (
    <>
      <StudentTable students={students} />
      <AddStudent students={students} setStudent={setStudent} />
    </>
  );
}

export default App;
