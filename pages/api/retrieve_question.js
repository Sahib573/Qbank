import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("subject_questions");
    const subj = req.body.subject_name;
    const arr = [];
    // await db
    //   .collection(subj)
    //   .find({})
    //   .forEach(async (ind) => {
    //     ind.questionId.forEach(async (question) => {
    //       const question_retrieved = await db
    //         .collection("question_details")
    //         .find({ question_id: question })
    //         .toArray();
    //       arr.push(question_retrieved);
    //     });
    //   });
    const data = await db
      .collection(subj)
      .find({})
      .forEach(async (ind) => {
        ind.questionId.forEach(async (question) => {
          console.log(question);
        });
      });
    console.log(data);
    // const data = await db.collection(subj).find({}).toArray();
    // if (data) {
    //   const response = JSON.parse(JSON.stringify(data));
    //   res.json(response);
    // }
    res.json({ message: "No questions available", user: false });
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
