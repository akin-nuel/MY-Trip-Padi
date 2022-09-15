const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navmenu = document.querySelector('.nav-menu1');
    
    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        navmenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(n =>
        n.addEventListener("click", () =>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        navmenu.classList.remove('active');
    }));

    console.log('Hello');
