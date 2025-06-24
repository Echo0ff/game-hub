import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8ece550997eb4ac296804642d40a4785",
  },
}); 