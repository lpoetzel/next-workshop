import users from "/database.json";

export default function getPostsByUserId(req, res) {
  res
    .status(200)
    .json(users.find((user) => user.user_id === +req.query.user_id).posts);
}
