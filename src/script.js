console.log('working')
contactDeveloper = () =>{
    let info = document.getElementsByClassName("devinfocont")[0]
    if (info.style.transform == 'translateX(400%)'){
        info.style.transform = 'translateX(0%)'
        info.style.opacity = '1'
    }else{
        info.style.opacity = '0'
        info.style.transform = 'translateX(400%)'
        
    }

}

document.getElementsByClassName('developerinfo')[0].addEventListener('click',contactDeveloper())

