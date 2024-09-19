import { Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { Student } from "../utils/data";

interface Props {
  students: Student[];
  setStudent: Dispatch<SetStateAction<Student[]>>;
}

export const AddStudent = ({ setStudent, students }: Props) => {
  let formData = { id: 0, name: "", age: 0, email: "", class: "" };
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const mailRef = useRef<HTMLInputElement>(null);

  const classRef = useRef<HTMLInputElement>(null);

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
    if (nameRef.current) {
      nameRef.current.value = "";
    }
    if (ageRef.current) {
      ageRef.current.value = "";
    }
    if (mailRef.current) {
      mailRef.current.value = "";
    }
    if (classRef.current) {
      classRef.current.value = "";
    }
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
        inputRef={nameRef}
        onChange={handleNameChange}
        id="outlined-basic"
        label="Full Name"
        name="fullName"
        variant="outlined"
      />
      <TextField
        inputRef={ageRef}
        onChange={handleAgeChange}
        id="Age"
        label="age"
        name="age"
        variant="outlined"
      />
      <TextField
        inputRef={mailRef}
        onChange={handleEmailChange}
        id="outlined-basic"
        label="Email"
        name="email"
        variant="outlined"
      />
      <TextField
        inputRef={classRef}
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
