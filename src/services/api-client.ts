import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
      key:'f0e3dc1beebd483e9dd40fd5787faaf7'
    },
});
/* key: "c7b18323a47d40c394ea5b019646b1f5", */