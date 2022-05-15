import clientPromise from "../../mongodb-config"


export default async function Users(req, res) {

    if (req.method === 'POST') {
        const client = await clientPromise
        const db = client.db("subject_questions")
        const subject_name=req.body.subject_name;
        const id_ = await db.collection("question_details").count();
        id_ = parseInt(id_);
        id_inc = id_ + 1;
        db.collection.update({_id: id_},  {$set:{id_:id_inc}});
        const data = await db.collection(subject_name).insertOne({
           title: req.body.title,

            option1: req.body.option1,
            option2: req.body.option2,
            option3: req.body.option3,
            option4: req.body.option4,
            answer: req.body.answer,
            author: req.body.author,
            author_email: req.body.author_email,
            explanation: req.body.explanation,
            question_id: id_inc
        })
        
        console.log("question Posted")
        res.json({ questionPosted: req.body })

    } else {
        res.json({message:"This request is not allowed",user:false})
    }
}