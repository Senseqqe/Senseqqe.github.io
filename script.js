 const No=document.getElementById('no');
function run_button(){
    y= Math.floor(Math.random()*200);//по вертиали
    x= Math.floor(Math.random()*400);//по горизонтали
    No.style.left =`${x}px`;
    No.style.top =`${-y}px`;
}
No.addEventListener('mousemove', run_button);