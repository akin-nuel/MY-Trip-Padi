let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("search-input");
searchBtn.addEventListener("click", ()=> {
    const encodedParams = new URLSearchParams();
encodedParams.append("currency", "USD");
encodedParams.append("language", "en_US");
encodedParams.append("location_id", "15333482");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '23c3877b72msh7fbd8995e46cbedp155a90jsn9f6f2ac20b08',
		'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://worldwide-restaurants.p.rapidapi.com/detail', options)
	.then(response => response.json())
	// .then(response => console.log(response))
	
    .then(rep => {
        console.log(rep);
            let div = " ";
            rep.data.forEach(values => {
                div= `
                <div class="hotel1">
                    <img id="hotel1" src="main/images/404img.png">
                    <h3> ${ values.name}</h3>
                    <h4> ${values.website}</h4>
                    <p> ${ values.category}</p>
                    <p> ${values.address}</p>
                    <p> ${values.open_now_text}</p>
                    <p> ${values.phone}</p>
                </div> `
        console.log("DATA: ", data1);
        document.getElementByClassName("resturant-list")[0].innerHTML= div;
            });
    })
    .catch(err => console.error(err));
    
});

function api() {
    alert(" The Image is coming soon you can check the details!");
  }

        // =========toggle js===========
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