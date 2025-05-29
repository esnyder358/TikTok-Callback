export default function handler(req, res) {
  const { code, state } = req.query;

  if (!code) {
    return res.status(400).send("Missing authorization code.");
  }

  console.log("Authorization Code:", code);

  res.status(200).send(`
    <h1>Authorization Code Received</h1>
    <p>Code: <code>${code}</code></p>
    <p>State: <code>${state}</code></p>
    <p>Copy this code and return to ChatGPT to continue.</p>
  `);
}
