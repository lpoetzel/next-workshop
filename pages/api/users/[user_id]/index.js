import users from "/database.json";

export async function getUsersById() {
  const data = await users;
  return data;
}

export default async function handler(req, res) {
  const data = await getUsersById();
  res
    .status(200)
    .json(users.find((user) => user.user_id === +req.query.user_id));
}
