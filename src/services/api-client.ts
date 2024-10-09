import axios from "axios";
export default axios.create({
        baseURL:'https://api.rawg.io/api',
        params:{
            key:'8b6c8dd9e76d4d39ad8eb1035f615fd5'
        }
    }
)