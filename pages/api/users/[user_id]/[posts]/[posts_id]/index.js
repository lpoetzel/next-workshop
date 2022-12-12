import users from "/database.json";

export default function getPostByPostIdFromUserId(req, res) {
  res
    .status(200)
    .json(
      users
        .find((user) => user.user_id === +req.query.user_id)
        .posts.find((post) => post.post_id === +req.query.posts_id)
    );
}
