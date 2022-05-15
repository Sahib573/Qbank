import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("subject_questions");
    const subject_name = req.body.subject_name;
    const id_ = (
      (await db.collection("question_details").count()) + 1
    ).toString();
    const questionArrayDetails = await db
      .collection(subject_name)
      .find({})
      .toArray();
    const newQuestionArray = questionArrayDetails[0].questionId;
    newQuestionArray.push(id_);
    await db
      .collection(subject_name)
      .updateOne(
        { _id: questionArrayDetails[0]._id },
        { $set: { questionId: newQuestionArray } }
      );
    await db.collection("question_details").insertOne({
      title: req.body.title,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
      answer: req.body.answer,
      author: req.body.author,
      author_email: req.body.author_email,
      explanation: req.body.explanation,
      question_id: id_,
    });

    console.log("question Posted");
    res.json({ questionPosted: req.body });
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
