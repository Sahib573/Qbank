import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("user");
    const questionId = req.body.question_id;
    const userEmail = req.body.email;
    const uploadedQuestions = await db.collection(userEmail).find({}).toArray();
    const newUploadedQuestions = uploadedQuestions[0].uploaded;
    const questionIndex = uploadedQuestions[0].uploaded.indexOf(questionId);
    if (questionIndex > -1) {
      newUploadedQuestions.splice(questionIndex, 1);
    }
    await db
      .collection(userEmail)
      .updateOne(
        { _id: uploadedQuestions[0]._id },
        { $set: { uploaded: newUploadedQuestions } }
      );
    console.log(newUploadedQuestions);
    console.log(uploadedQuestions);
    res.json({ message: "This request is allowed", user: false });
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
