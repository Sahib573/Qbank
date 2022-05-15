import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("subject_questions");
    const questionId = req.body.question_id;
    const uploadedQuestions = await db
      .collection("question_details")
      .find({ id: questionId })
      .toArray();
    await db.collection("question_details").updateOne(
      { _id: uploadedQuestions[0]._id },
      {
        $set: {
          id: req.body.question_id,
          title: req.body.title,
          option1: req.body.option1,
          option2: req.body.option2,
          option3: req.body.option3,
          option4: req.body.option4,
          answer: req.body.answer,
          explanation: req.body.explanation,
        },
      }
    );
    res.json({ message: "This request is allowed", user: true });
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
