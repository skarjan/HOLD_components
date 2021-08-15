const log = (msg) => {
  return console.log(msg);
}

const _QnA = [{
    ID: 0,
    Question: "This would be a question",
    Answer: "This is it's answer"
  },
  {
    ID: 1,
    Question: "This is another question",
    Answer: "Yet another answer"
  },
  {
    ID: 2,
    Question: "The third of questions",
    Answer: "It's equivelant answer"
  }
];

const ID = (id) => {
  return document.getElementById(id);
}

const CL = (className) => {
  return document.querySelectorAll("." + className);
}

let anchors = CL("faq__anchor");

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener("click", function (event) {

    // prevents following the link
    event.preventDefault();

    // animate icon
    let icon = event.currentTarget.firstElementChild;
    if (!hasClass(icon, "rotate45deg--in")) {
      resetAnimation();
      icon.classList.add("rotate45deg--in");
    } else {
      icon.classList.remove("rotate45deg--in");
    }
    
    // answer related to the clicked question
    let answer = event.currentTarget.parentElement.nextElementSibling;

    if (!hasClass(answer, "hidden")) {
      answer.classList.add("hidden");
    } else {
      hideUnselectedAnswers();
      answer.classList.remove("hidden");
      // modifyClassFromAll("faq__answer", "hidden", "add");
    }
  })
}

function resetAnimation() {
  let icons = document.querySelectorAll(".faq__icon-plus");

  for (let i = 0; i < icons.length; i++) {
    if (icons[i].classList.contains("rotate45deg--in")) {
      icons[i].classList.remove("rotate45deg--in");
    }

  }
}

function hasClass(element, className) {

  if (element.classList != "") {
    return element.classList.contains(className);
  } else {
    return false + `, element doesnt appear to have classes at all.`;
  }
}

function hideUnselectedAnswers() {
  let answers = document.getElementsByClassName("faq__answer");

  for (let i = 0; i < answers.length; i++) {
    answers[i].classList.add("hidden");
  }

}