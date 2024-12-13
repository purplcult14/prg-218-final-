const button = document.getElementById('submit')
button.addEventListener("click", submitting)
function submitting (){
    alert("Thank you for your message! :)")
}

const customname = document.getElementById('customname')
const firstname = document.getElementById('fname')

fname.addEventListener("input", function(type){
    document.getElementById('customname').textContent =
 "Hello " + type.target.value + ", I look forward to hearing from you!"
})
