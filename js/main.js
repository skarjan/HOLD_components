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
  anchors[i].addEventListener("click", function(event){

    // prevents following the link
    event.preventDefault();
    log(event);
    log(event.currentTarget.firstElementChild);

    // animate icon
    let icon = event.currentTarget.firstElementChild;

    // answer related to the clicked question
    let answer = event.currentTarget.parentElement.nextElementSibling;

    answer.classList.toggle("hide");
  })
}