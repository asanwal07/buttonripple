const buttons = document.querySelectorAll('.ripple')


buttons.forEach(button => {
      button.addEventListener('click' , function(e)
      {
            const x =e.clientX  
            const y =e.clientY 
            

            const buttomtop=e.target.offsetTop
            const buttomleft=e.target.offsetLeft

            const xinside= x-buttomleft
            const yinside = y-buttomtop
           
            const circle=document.createElement('spam')
            circle.classList.add('circle')
            circle.style.top=yinside +'px'
            circle.style.left=xinside +'px'

            this.appendChild(circle)

            setTimeout(()=> circle.remove,500)
            
      })
      


})