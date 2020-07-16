import HttpService from "../API/HttpService";
const SendMail = (body) => {
  console.log(body);

  return HttpService.post("email", body)
    .then((data) => {
      if (data.status == 200) console.log("email sent");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default SendMail;
