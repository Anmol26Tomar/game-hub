import axios from "axios";
export default axios.create({
        baseURL:'https://api.rawg.io/api',
        params:{
            key:'10a17bc1ed614654a970424bc43dce5a'
        }
    }
)