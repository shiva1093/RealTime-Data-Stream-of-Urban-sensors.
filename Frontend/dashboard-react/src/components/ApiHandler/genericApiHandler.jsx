import React from "react";
import axios from "axios/index";
export function GenericAPIHandler (url) {
    return axios.get(url)
}
