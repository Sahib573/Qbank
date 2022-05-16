import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("user");
    const userEmail = req.body.email;
    const points = req.body.points;
    const viewedQuestions = await db.collection(userEmail).find({}).toArray();
    const oldPoints = viewedQuestions[0].points;
    await db
      .collection(userEmail)
      .updateOne(
        { _id: viewedQuestions[0]._id },
        { $set: { points: oldPoints - points } }
      );
    res.json({ message: "This request is allowed", user: false });
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
