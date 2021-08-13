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
    // log(event.currentTarget.firstElementChild);

    // animate icon
    let icon = event.currentTarget.firstElementChild;
    if (!hasClass(icon, "rotate45deg--in")) {
      modifyClassFromAll("faq__icon-plus", "rotate45deg--in", "remove")
      icon.classList.add("rotate45deg--in");
    } else {
      icon.classList.remove("rotate45deg--in");
    }
    // answer related to the clicked question
    let answer = event.currentTarget.parentElement.nextElementSibling;
      
    if (!hasClass(answer, "hide")){
      answer.classList.add("hide");
    } else {
      answer.classList.remove("hide");
      modifyClassFromAll("faq__answer", "hide", "add");
    }
  })
}

function hideAllElements(selector, className){}

function modifyClassFromAll (element, className, modifier) {
  let el = document.querySelectorAll("."+element)
  for (let i = 0; i < el.length; i++) {
    if (hasClass(el[i], className)) {
      if(modifier==="add"){
        el[i].classList.add(className);
      } else if(modifier==="remove"){
        el[i].classList.remove(className);
      } else {
        return false;
      }
    } 
  }
}
function hasClass(element, className){
  
  if (element.classList != "") {
    return element.classList.contains(className);
  } else {
    return false + `, element doesnt appear to have classes at all.`;
  }
}