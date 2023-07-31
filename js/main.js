var btn = document.getElementById("aOne");
var btnTwo = document.getElementById("aTwo");
var pageOne = document.getElementById("pageOne").classList;
var pageTwo = document.getElementById("pageTwo").classList;
var pageThree = document.getElementById("pageThree").classList;

function addAndRemove() {
  pageOne.add("d-none");
  pageTwo.remove("d-none");
}

btn.addEventListener("click", function () {
  addAndRemove();
});

function removeAndAdd() {
  pageOne.remove("d-none");
  pageTwo.add("d-none");
}

btnTwo.addEventListener("click", function () {
  removeAndAdd();
});


formName = document.getElementById("formName")
formEmail = document.getElementById("formEmail")
formPass = document.getElementById("formPass")

var container = []


function addForms(){
    var form ={
        name:formName.value,
        email:formEmail.value,
        pass:formPass.value
    }
    container.push(form);
    localStorage.setItem("product", JSON.stringify(container));
    console.log(container);
}



function addSmartName(){
    pageOne.add("d-none");
    pageThree.remove("d-none")
  };



function loginOut(){
    pageOne.remove("d-none");
    pageThree.add("d-none")
  };
