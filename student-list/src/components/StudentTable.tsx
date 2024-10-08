import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Student } from "../utils/data.ts";
interface Props {
  students: Student[];
}
export const StudentTable = (props: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" sx={{ border: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.students.map((item) => {
            return (
              <tr>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.class}</TableCell>
              </tr>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
