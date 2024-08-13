var navlist=document.getElementById('navlist')

function shownav(){
    navlist.style.display="flex"
}

// function closenav(){
//     navlist.style.display='hidden'
// }

var resume =document.getElementById('resume-display-bg')
var resumebg=document.getElementById('resume-display')

function showresume(){
    resume.style.display='block'
    resumebg.style.display='flex'
}

resume.addEventListener('click',function(){
    resume.style.display='none'
    resumebg.style.display='none'
})

resumebg.addEventListener('click',function(){
    resume.style.display='none'
    resumebg.style.display='none'
})