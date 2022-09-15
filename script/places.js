let searchBtn = document.getElementById("search-btn");
let placeInp = document.getElementById("search-input");
console.log('placeName', placeInp);
searchBtn.addEventListener("click", ()=> {
    let placeName = placeInp.value.replace(' ', '%20'); // ASCII
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '23c3877b72msh7fbd8995e46cbedp155a90jsn9f6f2ac20b08',
            'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
        }
    };
    
    fetch(`https://trueway-places.p.rapidapi.com/FindPlaceByText?text=${placeName}&language=en`, options)
        .then(response => response.json())

        .then(rep => {
            console.log(rep);
            document.getElementById("count").innerText = `${rep.results.length}  place found `
                let data1 = " ";
                rep.results.forEach(values => {
                    data1+= `
                    <div class="place">
                <img id="hotel1" src="main/images/api-img.png">
                <h3> ${ values.name}</h3>
                <p> ${values.website}</p>
                <p> ${ values.types}</p>
                <p> ${values.address}</p>
            </div> `
            console.log("DATA: ", data1);
        document.getElementsByClassName("place-list")[0].innerHTML= data1;
            });
    })
    .catch(err => console.error(err));  
});

function api() {
    alert(" The Image is coming soon you can check the details!");
  }

    // ----------hamburger js ------------
const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(n =>
        n.addEventListener("click", () =>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
