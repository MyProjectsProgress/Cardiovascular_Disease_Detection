

//validate the data
function firstStepValid() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let gender = document.getElementById("gender").value;
  
  let errMsg = document.getElementById("errMsg")
  
  //name validation
  if (name === '' ) {
    errMsg.innerHTML = "Please enter a name"
    $("#errMsg").show();
    return false;
  }
  
  //age validation
  if (age > 150 || age < 1) {
    errMsg.innerHTML = "invalid age"
    $("#errMsg").show();
    return false;
  }
  
  //height validation
  if (height > 270 || height < 40) {
    errMsg.innerHTML = "invalid height"
    $("#errMsg").show();
    return false;
  }
  //gender validation
  if (gender === "") {
    errMsg.innerHTML = "Please choose a gender"
    $("#errMsg").show();
    return false;
  }

  $("#errMsg").hide();
  return true
}

function secondStepValid() {
  let weight = document.getElementById("weight").value;
  let smoking = document.getElementById("smoking").value;
  let alco = document.getElementById("alco").value;
  let active = document.getElementById("active").value;
  
  let errMsg = document.getElementById("errMsg")
  
  //weight validation
  if (weight > 300 || weight < 2) {
    errMsg.innerHTML = "invalid weight"
    $("#errMsg").show();
    return false;
  }
  //smoking validation
  if (smoking === "") {
    errMsg.innerHTML = "Please choose do you smoke"
    $("#errMsg").show();
    return false;
  }
  
  //alco validation
  if (alco === "") {
    errMsg.innerHTML = "Please choose do you take alcohol"
    $("#errMsg").show();
    return false;
  }
  
  //active validation
  if (active === "") {
    errMsg.innerHTML = "Please choose do you exercise"
    $("#errMsg").show();
    return false;
  }

  $("#errMsg").hide();
  return true
}

function thirdStepValid() {
  let ap_hi = document.getElementById("ap_hi").value;
  let ap_lo = document.getElementById("ap_lo").value;
  let cholesterol = document.getElementById("cholesterol").value;
  let gluc = document.getElementById("gluc").value;
  
  let errMsg = document.getElementById("errMsg")
  
  //systolic validation
  if (ap_hi > 200 || ap_hi < 60) {
    errMsg.innerHTML = "invalid Systolic blood pressure"
    $("#errMsg").show();
    return false;
  }
  //diastolic validation
  if (ap_lo > 160 || ap_lo < 40) {
    errMsg.innerHTML = "invalid Diastolic blood pressure"
    $("#errMsg").show();
    return false;
  }

  //cholesterol validation
  if (cholesterol === "") {
    errMsg.innerHTML = "Please choose cholesterol level"
    $("#errMsg").show();
    return false;
  }
  
  //gluc validation
  if (gluc === "") {
    errMsg.innerHTML = "Please choose glucose level"
    $("#errMsg").show();
    return false;
  }
  

  $("#errMsg").hide();
  return true
}



const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (formStepsNum) {
      case 0:
        if (firstStepValid()) {
          formStepsNum++;
          updateFormSteps();
          updateProgressbar();
        }  
        break; 
      case 1:
        if (secondStepValid()) { 
          formStepsNum++;
          console.log(formStepsNum)
          updateFormSteps();
          updateProgressbar();
        }
        break;
      
      case 2:
        if (thirdStepValid()) { 
          formStepsNum++;
          console.log(formStepsNum)
          updateFormSteps();
          updateProgressbar();
        }
        break;
      

    }
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}