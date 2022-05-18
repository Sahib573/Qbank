import clientPromise from "../../mongodb-config";
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export default async function Paper(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("subject_questions");
    const easyNumber = req.body.easy;
    console.log(easyNumber);
    const mediumNumber = req.body.medium;
    const hardNumber = req.body.hard;
    const finalQuestionList = [];
    const easyQuestionDetails = await db
      .collection("question_details")
      .find({ difficulty: "easy" })
      .toArray();
    shuffle(easyQuestionDetails);
    for (let i = 0; i < easyNumber && easyQuestionDetails.length; i++) {
      finalQuestionList.push(easyQuestionDetails[i]);
    }
    const mediumQuestionDetails = await db
      .collection("question_details")
      .find({ difficulty: "medium" })
      .toArray();
    shuffle(mediumQuestionDetails);
    for (let i = 0; i < mediumNumber && mediumQuestionDetails.length; i++) {
      finalQuestionList.push(mediumQuestionDetails[i]);
    }
    const hardQuestionDetails = await db
      .collection("question_details")
      .find({ difficulty: "hard" })
      .toArray();
    shuffle(hardQuestionDetails);
    for (let i = 0; i < hardNumber && hardQuestionDetails.length; i++) {
      finalQuestionList.push(hardQuestionDetails[i]);
    }
    res.json({
      message: "This request is allowed",
      user: true,
      questions: finalQuestionList,
    });
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
