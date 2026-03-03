import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "34be632de6f0487b81197e14e7b345aa",
  },
});
