let flag = 0        
let secondflag = 0      
const _main = document.querySelector('main')   
_main.addEventListener('mousemove', (e) => {
    let x = e.clientX
    let y = e.clientY

    if (flag < 70) {
        let _div = document.createElement('div')
        _div.classList.add('ball', 'para' + flag)
        _div.style.top = y + "px"
        _div.style.left = x + 'px'
        _main.appendChild(_div)
        flag++


    } else {
        if (secondflag < 70) {
            document.querySelector('.para' + secondflag).style.top = y + 'px'
            document.querySelector('.para' + secondflag).style.left = x + 'px'
            secondflag++

        } else {
            secondflag = 0
        }
    }
})