$("#errMsg").hide();
const submitForm = document.getElementById("submit-form");
const baseEndpoint = "http://localhost:8000";
if (submitForm) {
  submitForm.addEventListener("submit", handleSubmit);
}
function handleSubmit(event) {
  //   console.log(event);
  event.preventDefault();
  const submitEndpoint = `${baseEndpoint}/add/`;
  let submitFormData = new FormData(submitForm);
  let submitObjectData = Object.fromEntries(submitFormData);
  let bodyStr = JSON.stringify(submitObjectData);
  // console.log(submitObjectData, bodyStr);

  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: bodyStr,
  };
  fetch(submitEndpoint, options)
    .then((response) => {
      console.log(response);
      if (response.status === 400) {
        $("#errMsg").show();
      } else {
        $("#errMsg").hide();
      }
      return response.json();
    })
    .then((response) => {
      console.log(response.cardio);
      window.location.replace("./result.html");
    })
    .catch((err) => {
      console.log("err", err);
    });
}
