
document.addEventListener('DOMContentLoaded', function() {
    const colors = document.querySelectorAll('.colors');
  
    colors.forEach(function(color) {
      color.addEventListener('click', function() {
        const pic = document.getElementById('pics');
        const newSrc = this.querySelector('img').src;
        pic.src = newSrc;
        
        if(color.id==='white'){
            const price = document.querySelector('.detail2');
            price.innerHTML = "Price: 15,380"
            const name = document.querySelector('.detail')
            name.innerHTML = 'Air Jordan retro'
        }
        else if(color.id === 'classic'){
            const price = document.querySelector('.detail2');
            price.innerHTML = "Price: 19,300"
            const name = document.querySelector('.detail')
            name.innerHTML = 'Air Jordan Classic'
        }
        else if(color.id === 'grey'){
            const price = document.querySelector('.detail2');
            price.innerHTML = "Price: 13,490"
            const name = document.querySelector('.detail')
            name.innerHTML = 'Air Jordan retro II (Grey)'
        }
        else if(color.id === 'black'){
            const price = document.querySelector('.detail2');
            price.innerHTML = "Price: 12,470"
            const name = document.querySelector('.detail')
            name.innerHTML = 'Air Jordan Black legacy'
        }
      });
    });
  });
  