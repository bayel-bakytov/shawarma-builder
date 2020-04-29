import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://shawarma-builder.firebaseio.com";

export default instance;
