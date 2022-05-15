import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("subject_questions");
    const questionId = req.body.question_id;
    const questionDetails = await db
      .collection("question_details")
      .find({ id: questionId })
      .toArray();
    res.json(questionDetails[0]);
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
