import { fetchUsers } from "./users.js";

fetchUsers()
  .then(() => console.log("данные успешно получены"))
  .catch((error) => console.log("Ошибка:", error));
