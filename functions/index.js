import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());// needed for POST and PATCH (using bodies)

app.get('/test', (req, res) => {
    res.send( "My cloud function API is working! 😁 ");
});

app.get("/hello", (req, res) => {
    res.send ("hello there");
});

export const api = functions.https.onRequest(app);



// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
