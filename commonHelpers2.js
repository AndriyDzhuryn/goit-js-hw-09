import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={email:"",message:""},a=document.querySelector(".feedback-form");a.addEventListener("input",r);a.addEventListener("submit",m);function r(e){t.email=e.currentTarget.elements.email.value.trim(),t.message=e.currentTarget.elements.message.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))}function m(e){e.preventDefault(),e.target.elements.email.value.trim()!==""&&e.target.elements.message.value.trim()!==""?(console.log(t),localStorage.removeItem("feedback-form-state"),e.target.reset()):alert("Fill please all fields")}
//# sourceMappingURL=commonHelpers2.js.map
