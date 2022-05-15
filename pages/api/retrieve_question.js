import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("subject_questions");
    const subj = req.body.subject_name;
    const data = await db
      .collection(subj)
      .find({})
      .toArray();
    // const data = await db.collection(subj).find({}).toArray();
    if (data) {
      const response = JSON.parse(JSON.stringify(data));
      res.json(response[0].questionId);
    } else {
      res.json({ message: "No questions available", user: false });
    }
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
