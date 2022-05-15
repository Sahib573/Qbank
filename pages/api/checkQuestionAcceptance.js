import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("user");
    const questionId = req.body.question_id;
    const userEmail = req.body.userEmail;
    const questionDetails = await db.collection(userEmail).find({}).toArray();
    let check = true;
    if (questionDetails[0].viewed) {
      for (let i = 0; i < questionDetails[0].viewed.length; i++) {
        if (questionDetails[0].viewed[i] == questionId) {
          check = false;
          break;
        }
      }
    }
    if (questionDetails[0].uploaded) {
      for (let i = 0; i < questionDetails[0].uploaded.length; i++) {
        if (questionDetails[0].uploaded[i] == questionId) {
          check = false;
          break;
        }
      }
    }
    if (check) {
      res.json({ message: "This request is allowed", user: false });
    } else {
      res.json({ message: "This request is allowed", user: true });
    }
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
