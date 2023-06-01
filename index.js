const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const prisma = new PrismaClient();
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8000;
app.listen(port, () => {
  console.log("Server is running on port -", port);
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Same mail id" });
  }
});

app.get("/getquestionlist", async (req, res) => {
  try {
    const questionList = await prisma.QuestionList.findMany();
    res.send(questionList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "err detail" + err });
  }
});

app.post("/create_user", async (req, res) => {
  console.log("create called for " + req.body.name);
  try {
    const newUser = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    //res.send(newUser);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Something went wrong while creating the user" });
  }
});

app.post("/create_question", async (req, res) => {
  console.log("create called for " + req.body.name);
  try {
    const newQuestion = await prisma.questionList.create({
      data: {
        question: req.body.question,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        correct_answer: req.body.correct_answer,
      },
    });
    res.send(newQuestion);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Something went wrong while creating the user" });
  }
});

app.put("/update_question", async (req, res) => {
  console.log("update called for " + req.body.question);
  try {
    const Question = await prisma.questionList.update({
      where: {
        id: req.body.id,
      },
      data: {
        question: req.body.question,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        correct_answer: req.body.correct_answer,
      },
    });
    res.send(Question);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Something went wrong while updating the user" });
  }
});

app.delete("/delete_question", async (req, res) => {
  console.log("update called for " + req.body.question);
  try {
    const Question = await prisma.questionList.deleteMany({
      where: {
        id: parseInt(req.query.id.trim()),
      },
    });
    res.send(Question);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Something went wrong while deleteing  the user" });
  }
});
