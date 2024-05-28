import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "2a45f342d52f47d28679885c75f3748d" },
});
