const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 9,
    title: "amogus buddy",
    category: "sandwich",
    price: 69.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

const elementToEdit = document.querySelector('.section-center');
let categoryCounters = {};
const categories = new Set();



window.addEventListener("DOMContentLoaded", function() {
  
  menu.forEach(element => {
    categories.add(element.category);
  });
  for(const singlecategory of categories) {
    let newButton = document.createElement('button');
    newButton.id = singlecategory;
    newButton.textContent = singlecategory.charAt(0).toUpperCase() + singlecategory.slice(1);
    newButton.classList.add('filter');
    document.getElementById('filterbuttons').appendChild(newButton);
  }


  
  const filterbuttons = document.querySelectorAll('.filter');
  
  filterbuttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      filterbuttons.forEach(element => 
        {
          element.classList.add('hover-effect-others');
          button.classList.remove('hover-effect-main');
        });
        
        button.classList.remove('hover-effect-others');
        button.classList.add('hover-effect-main');
        
      let sugarcoat = menu.map(function(item) {
        const firstLetterCategory = item.category.charAt(0).toUpperCase();
        
        if(!categoryCounters[firstLetterCategory]) {
          categoryCounters[firstLetterCategory] = 1
        }
    
        const finalNumString = firstLetterCategory+categoryCounters[firstLetterCategory];
        categoryCounters[firstLetterCategory]++;
    
        if (item.category == event.target.id) {
        return `
        <div class="entry">
          <h1> ${item.id}-${finalNumString} ${item.title} </h1>
          <img src=${item.img}> </img>
          <p> </p>
          <h2> ${item.category} - <span style="color:green">${item.price}$ </span></h2>
          <p> </p>
          <h3> ${item.desc} </h3>
        </div>
        <span> </span>
        `;
        }
      });

      elementToEdit.innerHTML = sugarcoat.join(""); //klappt auch ohne join btw
      const keys = Object.keys(categoryCounters);
        keys.forEach(function(key) {
          delete categoryCounters[key];
        });
    });
  
  });



  // elementToEdit.innerHTML = sugarcoat;

  
  // sugarcoat = sugarcoat.join(" ");
  
  
});