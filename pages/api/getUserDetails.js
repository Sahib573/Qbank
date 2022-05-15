import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("user");
    const userEmail = req.body.email;
    if (await db.collection(userEmail).count()) {
      const userDetails = await db
        .collection(userEmail)
        .find({})
        .toArray();
      res.json(userDetails[0]);
    } else {
      res.json({ message: "No data found" });
    }
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
