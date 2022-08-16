import {
  connectToDatabase,
  insertDocument,
  getAllDocument,
} from "../../helpers/db-util";

async function handler(req, res) {
  let client;

  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(404).json({ message: "Connecting to the database failed!" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body.commentData;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input !" });
      client.close();
    }

    const newComment = {
      email,
      text,
      name,
    };

    try {
      await insertDocument(client, "comment", newComment);
      res
        .status(201)
        .json({ message: "Successfully Added comment!", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Adding comment failed!" });
    }

    console.log(newComment);
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocument(client, "comment", { _id: -1 });
      res
        .status(201)
        .json({ message: "Successfully Got comments!", documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comment failed!" });
      client.close();
    }
  }
}

export default handler;
