const menu = [
  {
    id: 1,
    title: "bulls eye skillet",
    category: "breakfast",
    price: 15,
    img: "https://images-gmi-pmc.edge-generalmills.com/ea9acd6c-3d2b-49a3-8a1d-39671f008e7f.jpg",
    desc: `Bulls Eye Skillet food item is a seared protein or vegetable dish cooked on a cast iron skillet with a unique bullseye design. The even distribution of heat allows for a perfect sear, while the bullseye design creates visually appealing grill marks. This versatile dish can be enjoyed on its own or as a complement to other dishes.`,
  },

  {
    id: 2,
    title: "south indian dosa",
    category: "breakfast",
    price: 4,
    img: "https://static.toiimg.com/photo/65164556.cms",
    desc: `South Indian Dosa is a traditional dish made from fermented rice and lentil batter, cooked into a thin, crispy crepe-like texture. Served with a variety of chutneys and sambar, this gluten-free and vegan dish is popular for its delicious flavor and healthy ingredients. Perfect for breakfast, lunch, or dinner.`,
  },

  {
    id: 3,
    title: "grilled sandwich",
    category: "breakfast",
    price: 12,
    img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80",
    desc: `Grilled Sandwich is a classic comfort food made with artisan bread, a variety of fresh ingredients, and grilled to perfection. Choose from our selection of meats, cheeses, and vegetables, or customize your own combination. Served with a side of crispy chips or a fresh salad, it's a satisfying and delicious meal.`,
  },

  {
    id: 4,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://media.istockphoto.com/id/454141675/photo/pancakes-with-berries-and-maple-syrup.jpg?b=1&s=170667a&w=0&k=20&c=oQjBVAdG6AanAvbzRDvOlRFV8_am2jvX68dw8JBiqAw=",
    desc: `Buttermilk Pancakes are a breakfast favorite, made with a fluffy and light batter that's rich in flavor. Served with a side of maple syrup and butter, it's a classic combination that's perfect for a satisfying morning meal. Add your choice of toppings like fresh berries or whipped cream for an extra treat.`,
  },

  {
    id: 5,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://media.istockphoto.com/id/1268633498/photo/double-burgers-at-diner.jpg?b=1&s=170667a&w=0&k=20&c=jwjgwhSNvzuuH14Klrtoa1Lsm_ead_6MnrRkMfhCaL0=",
    desc: `Diner Double is a hearty burger made with two juicy beef patties, melted American cheese, crispy bacon, fresh lettuce, tomato, and onion, all piled high on a toasted brioche bun. Served with a side of golden fries, it's a classic diner-style meal that's sure to satisfy your cravings. `,
  },

  {
    id: 6,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://media.istockphoto.com/id/171222132/photo/chocolate-cookie-shake.jpg?b=1&s=170667a&w=0&k=20&c=aOe5B8gI1H3DghHqOjheQLpkXoSAkY40mmranr5Kj6Q=",
    desc: `Godzilla Milkshake is a classic dessert made with creamy chocolate ice cream, blended with milk, and topped with a generous swirl of whipped cream. Served in a tall glass, it's a rich and indulgent treat that's perfect for satisfying your sweet tooth. Add a chocolate drizzle or sprinkles for extra decadence.`,
  },

  {
    id: 7,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://media.istockphoto.com/id/1456251841/photo/heart-pizza-for-you-on-valentines-day.jpg?b=1&s=170667a&w=0&k=20&c=o1fqTvypwEUA89wTOpQ0ImjBNnjL7f7Hhu2BcMLvrLY=",
    desc: `Country Delight is a delicious and romantic twist on a classic favorite. Made with hand-tossed dough, tangy tomato sauce, and gooey melted cheese, it's a cheesy and savory delight. Choose your toppings, from classic pepperoni to fresh veggies, and surprise your loved one with this special pizza on any occasion. `,
  },

  {
    id: 8,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://media.istockphoto.com/id/1149595848/photo/bacon-and-cheddar-hard-boiled-eggs.jpg?b=1&s=170667a&w=0&k=20&c=ggqNbEZKqHT-RyDEIIdVEhKNpMv3yq8t9QixLzuHawg=",
    desc: `Egg Attack is a delicious twist on a classic snack. Hard-boiled eggs are stuffed with a flavorful mixture of crispy bacon, melted cheddar cheese, and tangy mayo. Perfect as a protein-packed lunch or a satisfying snack anytime, they're a crowd-pleasing and delicious option for any occasion.`,
  },

  {
    id: 9,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://media.istockphoto.com/id/683175010/photo/vanilla-milkshake-with-chocolate-cookies-and-black-straw.jpg?b=1&s=170667a&w=0&k=20&c=gv48F76zB35z-VZCxQl4fTYtZVDFMDv2Bokm3mZCgxI=",
    desc: `Oreo Dream is a classic treat that's sure to satisfy your sweet tooth. Made with creamy vanilla ice cream and chunks of chocolate cookies, blended to perfection and topped with a generous swirl of whipped cream and a black and white straw. It's a deliciously indulgent dessert that's perfect for any occasion.`,
  },

  {
    id: 10,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://media.istockphoto.com/id/178705097/photo/beer-and-burger.jpg?b=1&s=170667a&w=0&k=20&c=IUEQAGURqS2se7D7HgJPPv7rHNgnzZZ1Bh0f3bhlM20=",
    desc: `Bacon Overflow is the ultimate pairing for any burger lover. Our juicy beef patty is cooked to perfection, topped with melted cheese, crisp lettuce, tomato, onion, and our signature sauce, all sandwiched between a toasted bun. Served with a side of golden fries and your choice of beer, it's a satisfying and delicious meal that's perfect for any occasion.`,
  },

  {
    id: 11,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://media.istockphoto.com/id/1036965674/photo/grilled-pork-chop-with-cassoulet-and-braised-greens.jpg?b=1&s=170667a&w=0&k=20&c=ux1TdFN5so-mInMIrnNzyd-RhL7a7_MM8cHrWbP55xk=",
    desc: `American Classic is a savory and flavorful dish that's sure to impress. A juicy and tender pork chop is grilled to perfection, served with a hearty and comforting cassoulet of white beans, bacon, and veggies, and a side of braised greens for a healthy balance. It's a satisfying and delicious meal that's perfect for any occasion.`,
  },

  {
    id: 12,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://media.istockphoto.com/id/1388569808/photo/caramel-flavoured-frappe-served-in-a-plastic-cup-with-whipped-cream-and-dressing.jpg?b=1&s=170667a&w=0&k=20&c=ewJHYk8G55RM9tQy7inoCzWOh3kE9fKEKhiwlKHz9nk=",
    desc: `Quarantine Buddy is the perfect pick-me-up on a hot day. A creamy blend of iced coffee, milk, and caramel syrup, topped with a generous swirl of whipped cream and drizzled with more caramel sauce. Served in a plastic cup with a straw, it's a refreshing and indulgent treat that will cool you down and satisfy your sweet tooth.`,
  },

  {
    id: 13,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://media.istockphoto.com/id/1310108811/photo/seared-bison-fillet-steak-with-creamy-mushroom-herb-barley.jpg?b=1&s=170667a&w=0&k=20&c=CIMe0UWOy7MSGjvXFNC_LXN_6GVWUaAkMH9kvIa42B4=",
    desc: `Bison Steak is a dish that's as delicious as it is wholesome. Our juicy bison fillet is seared to perfection, served with a hearty barley dish, infused with fragrant herbs and mushrooms in a creamy sauce. It's a perfect meal for those who want to enjoy a lean and healthy meat option without sacrificing flavor.`,
  },
];
let menuSectionEl = document.getElementById("menuSection");
let buttonsContainerEl = document.getElementById("buttonsContainer");

function displayMenuItems(myMenu) {
  let displayHTML = myMenu.map(function (item) {
    return `
    <article class="menu-item">
      <img
        class="food-img"
        src=${item.img}
        alt=${item.title}
      />
      <div>
        <header class="food-header">
          <h4 class="food-heading space-capitalize">${item.title}</h4>
          <h4 class="price-heading space-capitalize">$${item.price}</h4>
        </header>

        <p class="food-desc">
          ${item.desc}
        </p>
      </div>
    </article>
    `;
  });
  displayHTML = displayHTML.join("");
  menuSectionEl.innerHTML = displayHTML;
}
displayMenuItems(menu);

function displayMenuButtons() {
  let buttonList = menu.reduce(
    function (acc, cur) {
      if (acc.includes(cur.category)) {
        return acc;
      } else {
        acc.push(cur.category);
        return acc;
      }
    },
    ["all"]
  );

  let buttonHTML = buttonList.map(function (eachButton) {
    return `<button class="filter-btn" data-categoryname="${eachButton}">${eachButton}</button>`;
  });
  buttonHTML = buttonHTML.join("");
  buttonsContainerEl.innerHTML = buttonHTML;
}
displayMenuButtons();

let filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(function (eachBtn) {
  eachBtn.addEventListener("click", onFilter);
});

function onFilter(event) {
  // let eventId = event.target.id
  let eventId = event.currentTarget.dataset.categoryname;
  let result = menu.filter(function (eachObj) {
    if (eventId === eachObj.category) {
      return eachObj;
    }
  });

  if (eventId === "all") {
    displayMenuItems(menu);
  } else {
    displayMenuItems(result);
  }
}

// --------------------------------------------------

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "Social Media Manager",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "The burger at this joint was a masterpiece! The patty was juicy and flavorful, the bun was fresh and lightly toasted, and the toppings were perfectly balanced. The fries were crispy and golden, and the dipping sauce was a game-changer. If you're in the mood for a killer burger, this place is a must-visit.",
  },

  {
    id: 2,
    name: "anna johnson",
    job: "Software Engineer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "The milkshakes at this diner were heavenly! Thick, creamy, and bursting with flavor, they were the perfect indulgence on a hot day. From classic chocolate and vanilla to creative concoctions like peanut butter and banana, there was something for everyone. The portions were generous, and the prices were reasonable. A milkshake lover's paradise!",
  },

  {
    id: 3,
    name: "peter jones",
    job: "Restaurant Manager",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "The bison steak at this restaurant was a revelation! Cooked to perfection, it was tender, juicy, and bursting with flavor. The sides were delicious as well, especially the roasted root vegetables. The service was top-notch, with attentive and knowledgeable staff. The atmosphere was upscale yet cozy. A must-visit for steak lovers!",
  },

  {
    id: 4,
    name: "bill anderson",
    job: "Hotel Concierge",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "The American Classic at this hotel was a delight! From fluffy pancakes and crispy bacon to eggs cooked to order and freshly brewed coffee, everything was delicious and satisfying. The service was impeccable, with friendly and attentive staff. The dining area was bright and inviting, with a lovely view of the city. A great start to the day!",
  },
];

let reviewImgEl = document.getElementById("reviewImg");
let reviewNameEl = document.getElementById("reviewName");
let reviewJobEl = document.getElementById("reviewJob");
let reviewDescEl = document.getElementById("reviewDesc");
let previousBtnEl = document.getElementById("previousBtn");
let nextBtnEl = document.getElementById("nextBtn");
let surpriseBtnEl = document.getElementById("supriseBtn");

function showReview(firstItem) {
  reviewImgEl.src = firstItem.img;
  reviewNameEl.textContent = firstItem.name;
  reviewJobEl.textContent = firstItem.job;
  reviewDescEl.textContent = firstItem.text;
}

let firstItem = reviews[0];
showReview(firstItem);

previousBtnEl.addEventListener("click", onPrevious);
nextBtnEl.addEventListener("click", onNext);
surpriseBtnEl.addEventListener("click", onSurprise);

let currentCount = 0;

function onPrevious() {
  if (currentCount > 0) {
    currentCount--;
    let selectedObj = reviews[currentCount];
    showReview(selectedObj);
  }
}

function onNext() {
  if (currentCount < reviews.length - 1) {
    currentCount++;
    let selectedObj = reviews[currentCount];
    showReview(selectedObj);
  }
}

function onSurprise() {
  currentCount = Math.floor(Math.random() * reviews.length);
  let selectedObj = reviews[currentCount];
  showReview(selectedObj);
}

// get numbers from 0 - 5
// Math.floor(Math.random() * 6)

// get numbers from 1 - s5
// (Math.random() * 5) + 1

// 0.1 * 6 = 0.6 + 1 == 1.6 ====> 1
// 0.99 * 6 = 5.94 + 1 == 6.94 ==> 6
