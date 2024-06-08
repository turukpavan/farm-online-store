
document.addEventListener('click',(e)=>{
    let clickedElement=e.target;
    if (clickedElement.classList.contains('likeBtn')) {
        clickedElement.classList.remove('likeBtn')
        clickedElement.classList.add('btnAfterClick')
        
    }else if(clickedElement.classList.contains('btnAfterClick')){
        clickedElement.classList.remove('btnAfterClick')
        clickedElement.classList.add('likeBtn')
        
    }
})

document.addEventListener('click',(e)=>{
    let clickElement=e.target;
    if (clickElement.classList.contains('bi-cart4')) {
        let item_count=document.querySelector('.item_count')
        console.log(item_count.innerHTML);
        item_count.innerHTML=`${parseInt(item_count.innerHTML)+1}`
        
    }
})