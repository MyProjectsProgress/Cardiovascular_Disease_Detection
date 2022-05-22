const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .btn-next");
const prevBtn = document.querySelectorAll("form .btn-prev");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    if (firstStepValid()) { 
      index++;
    }
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

//validate the data
function firstStepValid() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;

  let errMsg = document.getElementById("errMsg")

  //name validation
  if (name === '' ) {
    errMsg.innerHTML = "Please enter a name"
    $("#errMsg").show();
    return false;
  }

  //age validation
  if (age > 150 || age < 0) {
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

  //weight validation
  if (weight > 300 || weight < 2) {
    errMsg.innerHTML = "invalid weight"
    $("#errMsg").show();
    return false;
  }
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
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
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