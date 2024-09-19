import { Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Student } from "../utils/data";

interface Props {
  students: Student[];
  setStudent: Dispatch<SetStateAction<Student[]>>;
}

export const AddStudent = ({ setStudent, students }: Props) => {
  let formData = { id: 0, name: "", age: 0, email: "", class: "" };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.name = e.target.value;
  };
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.age = parseInt(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.email = e.target.value;
  };
  const handleClassChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.class = e.target.value;
  };
  const handleSubmit = () => {
    setStudent([...students, formData]);
  };
  return (
    <Paper
      sx={{
        width: 200,
        padding: 5,
        marginTop: 1,
        gap: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        onChange={handleNameChange}
        id="outlined-basic"
        label="Full Name"
        name="fullName"
        variant="outlined"
      />
      <TextField
        onChange={handleAgeChange}
        id="Age"
        label="age"
        name="age"
        variant="outlined"
      />
      <TextField
        onChange={handleEmailChange}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        onChange={handleClassChange}
        id="outlined-basic"
        label="Class Name"
        name="class"
        variant="outlined"
      />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
    </Paper>
  );
};
