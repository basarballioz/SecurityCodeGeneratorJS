(() => {

    'use strict';
    const log = console.log;
    
    const input = document.querySelectorAll('input')[0];
    
    input.onkeydown = (e) => {
        e.preventDefault();
    
        alert('Only click to button, you cannot change this place');
    }
    
    input.onpaste = (e) => {
        e.preventDefault();
    }
    
    document.querySelectorAll('button')[0].onclick = () => {
        const arr = 'abcdefghijklmnopqrstuvwxyz1234567890?!$&%.'.split('');
        
        function random(e) {
            if (Math.random() * 2 < 1) {
                return e.toUpperCase();
            } else {
                return e.toLowerCase();
            }
        }
    
        input.value = null;
    
        for (let i = 0; i < 12; i++) {
            input.value += random(arr[Math.floor(Math.random() * arr.length)]);
        }
    }

})();