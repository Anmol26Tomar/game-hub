import axios from "axios";
export default axios.create({
        baseURL:'https://api.rawg.io/api',
        params:{
            key:'f0e3dc1beebd483e9dd40fd5787faaf7'
        }
    }
)