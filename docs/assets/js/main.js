"use strict";const designLegend=document.querySelector(".js__design-legend"),designColors=document.querySelector(".js__design-colors"),arrowDown1=document.querySelector(".js__arrowDown1"),fillLegend=document.querySelector(".js__fill-legend"),fillForm=document.querySelector(".js__field"),arrowDown2=document.querySelector(".js__arrowDown2"),shareLegend=document.querySelector(".js__share-legend"),sharecontent=document.querySelector(".js__share"),arrowDown3=document.querySelector(".js__arrowDown3"),allRadioButtons=document.querySelectorAll(".js-radio"),previewContainer=document.querySelector(".js-preview"),buttonCancelForm=document.querySelector(".js-btn-cancel"),reset=document.querySelector(".js-reset"),fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}function handleClickRadioUnique(e){console.log("palette-"+e.currentTarget.value);const t="palette-"+e.currentTarget.value;previewContainer.classList.remove("palette-1"),previewContainer.classList.remove("palette-2"),previewContainer.classList.remove("palette-3"),previewContainer.classList.add(t)}fileField.addEventListener("change",getImage),designLegend.addEventListener("click",()=>{designColors.classList.toggle("collapsed"),arrowDown1.classList.toggle("rotate"),arrowDown2.classList.remove("rotate"),arrowDown3.classList.remove("rotate"),sharecontent.classList.add("collapsed"),fillForm.classList.add("collapsed")}),fillLegend.addEventListener("click",()=>{fillForm.classList.toggle("collapsed"),arrowDown2.classList.toggle("rotate"),arrowDown1.classList.remove("rotate"),arrowDown3.classList.remove("rotate"),designColors.classList.add("collapsed"),sharecontent.classList.add("collapsed")}),shareLegend.addEventListener("click",()=>{sharecontent.classList.toggle("collapsed"),arrowDown3.classList.toggle("rotate"),arrowDown1.classList.remove("rotate"),arrowDown2.classList.remove("rotate"),designColors.classList.add("collapsed"),fillForm.classList.add("collapsed")});for(const e of allRadioButtons)e.addEventListener("click",handleClickRadioUnique);const inputs=document.querySelector(".js__inputs"),previewNameElement=document.querySelector(".js_name"),previewJobElement=document.querySelector(".js_job"),previewEmailElement=document.querySelector(".js_email"),previewPhoneElement=document.querySelector(".js_phone"),previewLinkedinElement=document.querySelector(".js_linkedin"),previewGithubElement=document.querySelector(".js_github"),data={name:"",job:"",email:"",phone:"",likedin:"",github:"",photo:""};function renderPreview(){previewNameElement.innerHTML=data.name,previewJobElement.innerHTML=data.job,previewEmailElement.href="mailto: "+data.email,previewPhoneElement.href="tel: "+data.phone,previewLinkedinElement.href=data.likedin,previewGithubElement.href=data.github,""===data.name?previewNameElement.innerHTML="Nombre Apellido":previewNameElement.innerHTML=data.name,""===data.job?previewJobElement.innerHTML="Front-end developer":previewJobElement.innerHTML=data.job}function handleKeyupInputs(e){e.preventDefault();const t=e.target;"name"===t.name?data.name=t.value:"job"===t.name?data.job=t.value:"email"===t.name?data.email=t.value:"phone"===t.name?data.phone=t.value:"linkedin"===t.name?data.likedin=t.value:"github"===t.name&&(data.github=t.value),renderPreview()}function handleClickResetBtn(e){e.preventDefault(),reset.value=""}inputs.addEventListener("keyup",handleKeyupInputs),buttonCancelForm.addEventListener("click",e=>{e.preventDefault();const t=document.querySelectorAll(".js-reset");for(const e of t)e.value=""});