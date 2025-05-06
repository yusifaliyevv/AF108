import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
const app = express();
const port = 3000;
app.use(express.json());

let { students } = JSON.parse(fs.readFileSync("db.json"));

app.get("/", (req, res) => {
  res.send("Af108");
});

const getAll = (req, res) => {
  try {
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const getById = (req, res) => {
  try {
    const { id } = req.params;
    const student = students.find((user) => user.id === id);
    if (!student) {
      return res.status(404).send({ message: "Student not found" });
    }

    res.status(200).send({ message: "Succes", data: student });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const addUser = (req, res) => {
  try {
    const newStudent = req.body;
    if (!newStudent.name || !newStudent.surname || !newStudent.age) {
      return res
        .status(400)
        .send({ message: "Please provide all required fields" });
    }

    students.push({ id: uuidv4(), ...newStudent });

    fs.writeFileSync("db.json", JSON.stringify({ students }));
    res
      .status(201)
      .send({ message: "Student created successfully", data: newStudent });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const deleteById = (req, res) => {
  try {
    const { id } = req.params;

    const existStudentIndex = students.findIndex((student) => student.id == id);
    if (existStudentIndex === -1) {
      return res.status(404).send({ message: "Student not found" });
    }

    students.splice(existStudentIndex, 1);
    fs.writeFileSync("db.json", JSON.stringify({ students }));
    res.status(200).send({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const updatedById = (req, res) => {
  try {
    const { id } = req.params;

    const updatedStudent = req.body;
    const existStudentIndex = students.findIndex(
      (student) => student.id === id
    );
    if (existStudentIndex === -1) {
      return res.status(404).send({ message: "Student not found" });
    }
    students[existStudentIndex] = {
      ...students[existStudentIndex],
      ...updatedStudent,
    };
    fs.writeFileSync("db.json", JSON.stringify({ students }));
    res
      .status(200)
      .send({
        message: "Student updated successfully",
        data: students[existStudentIndex],
      });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const patchById = (req, res) => {
  try {
    const { id } = req.params;

    const updatedStudent = req.body;
    const existStudentIndex = students.findIndex(
      (student) => student.id === id
    );
    if (existStudentIndex === -1) {
      return res.status(404).send({ message: "Student not found" });
    }
    students[existStudentIndex] = {
      ...students[existStudentIndex],
      ...updatedStudent,
    };
    fs.writeFileSync("db.json", JSON.stringify({ students }));
    res
      .status(200)
      .send({
        message: "Student updated successfully",
        data: students[existStudentIndex],
      });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

app.get("/api/students/", getAll);
app.get("/api/students/:id", getById);
app.post("/api/students/", addUser);
app.delete("/api/students/:id", deleteById);
app.put("/api/students/:id", updatedById);
app.patch("/api/students/:id", patchById);
app.listen(port, () => {
  console.log(`Server is running on port ${`http://localhost:${port}/`}`);
});
