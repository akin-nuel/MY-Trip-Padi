const review = [
    {
        id: 1,
        name: "Andrew Babboom",
        date: "August 2022",
        img: "main/images/review1.png",
        text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae, animi omnis repellat necessitatibus modi deleniti earum magni, exercitationem ducimus eum magnam totam corporis. Quam recusandae architecto consequuntur doloribus dolorem.",
      },
      {
        id: 2,
        name: "Andrew Babboom",
        date: "Sept., 2022",
        img: "main/images/review2.png",
        text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae, animi omnis repellat necessitatibus modi deleniti earum magni, exercitationem ducimus eum magnam totam corporis. Quam recusandae architecto consequuntur doloribus dolorem.",
      }
];

const photo =[
    {
        id:1,
        image: "main/api/rest2.jpg",
    },
    {
        id:1,
        image: "main/api/rest3.jpg",
    },
    {
        id:1,
        image: "main/api/rest4.jpg",
    },
    {
        id:1,
        image: "main/api/rest6.jpg"
    }

]
    // =======image section js=====
const image= document.getElementById("image")

const PrevBtn = document.querySelector("#prev-Btn")
const NextBtn = document.querySelector("#next-Btn")

let currentImage = 0;


window.addEventListener('DOMContentLoaded', function () {
    //    showImage (currentItem);
       showSlide (currentImage);
    });

    function showSlide(slide) {
        console.log(slide);
        const item = photo[slide];
        img.src = show.image;

    }
    
    
    //  show next person
    NextBtn.addEventListener('click', function(){
        currentShow++
    
        if(currentShow > photo.length - 1){
            currentShow = 0; 
        }
        showSlide(currentShow);
    
    });
     //show prev image
    PrevBtn.addEventListener('click', function(){
        currentShow--;
        if(currentShow < 0){
            currentShow = photo.length - 1 ; 
        }
        showSlide(currentShow);
    
    });
        // =======image section js stop=====


//select item
const img = document.getElementById("reviewimage")
const text = document.getElementById ("info")
const name = document.getElementById ("name")
const date = document.getElementById("date");

const prevBtn = document.querySelector("#prev-btn")
const nextBtn = document.querySelector("#next-btn")

// let currentItem = 0;
let currentItem = 0;

//load initial item 

window.addEventListener('DOMContentLoaded', function () {
//    showPerson (currentItem);
   showPerson (currentItem);
});

//show person base on item

function showPerson(person) {
    const item = review[person];
    img.src = item.img;
    name.textContent = item.name;
    date.textContent = item.date;
    info.textContent = item.text;
}


//  show next person
nextBtn.addEventListener('click', function(){
    currentItem++

    if(currentItem > review.length - 1){
        currentItem = 0; 
    }
    showPerson(currentItem);

});
 //show prev image
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = review.length - 1 ; 
    }
    showPerson(currentItem);

});