/*document.getElementById('ok').addEventListener( 'click', function(e){
    alert('ok is clicked')
    console.log(e)
}
)
/*document.getElementById('cancel').addEventListener( 'mousemove', function(e){
    alert('ok is clicked')
    console.log(e)
}
)
let elems=document.getElementsByClassName("flex-item")
console.log(elems)
for( let elem of elems){
    elem.addEventListener('mousemove',function(){
        console.log('x=',e.screenX,"y=",e.screenY)
    })
    elem.addEventListener('click',function(e){
        alert(elem.innerText)
    })
}*/
/*document.getElementById('ok').addEventListener('click',function(e){
    let noElemement=document.getElementById('no')
    if(noElemement.classList.contains('toggleOn')){
        noElemement.classList.replace('toggleOn','toggleOff')
    }else if (noElemement.classList.contains('toggleOff')){
        (noElemement.classList.replace('toggleOff','toggleOn'))
    }else{
        noElemement.classList.add('toggleOn')
    }
})*/

/*
var cancelElement=document.getElementById('cancel')
cancelElement.addEventListener('mouseover',function(e){
    cancelElement.innerHTML=`
        <div class="container-col">
            <div class="flex-item>
                no 1
            </div>
            <div class="flex-item>
                no 2
            </div>
        </div>
    `
})
var borderTick=33
document.getElementById('cancel').style.border = `${borderTick}px white solid`

let borderTick=1
document.getElementById('ok').addEventListener( 'click', function(e){
    borderTick=borderTick+1
    document.getElementById('cancel').style.marginRight=`${borderTick}px`;
    document.getElementById('cancel').style.marginLeft=`${borderTick}px`;
    document.getElementById('no').style.marginRight=`${borderTick}px`;
    document.getElementById('no').style.marginLeft=`${borderTick}px`;
})*/
const text = ["ok", "วิชานี้", "ง่าย", "จริงๆนะ"];
let i=0
document.getElementById('no').addEventListener( 'dblclick', function(e){
    document.getElementById('ok').innerText=text[i]
    if(i>2){
        i=0
    }else{
        i++
    }
})