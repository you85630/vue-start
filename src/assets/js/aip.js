import axios from "axios";

axios.defaults.baseURL = "";
axios.defaults.timeout = 5000;
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";

export default {
  get(url, params) {
    return axios({
      method: "get",
      url,
      params: getUtils(params)
    });
  },
  post(url, data) {
    return axios({
      method: "post",
      url,
      data: getUtils(data),
      transformRequest: [
        function(data) {
          let ret = "";
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          return ret.slice(0, -1);
        }
      ]
    });
  }
};

function getUtils(data) {
  let now = new Date();
  let Y = now.getFullYear();
  let M = now.getMonth() + 1;
  let D = now.getDate();
  let H = now.getHours();
  let I = now.getMinutes();
  let S = now.getSeconds();
  let time =
    String(Y) + String(M) + String(D) + String(H) + String(I) + String(S);
  data.timestamp = time;

  return data;
}
