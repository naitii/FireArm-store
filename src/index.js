import _ from 'lodash';
import './style.css';
import Icon from './images/download.jpg';



import {arr} from './weapons.js'; 


const home = document.createElement('div');
const Armory_Catalog = document.createElement('div');
const contact = document.createElement('div');
home.setAttribute('id','selectedNav');

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = "SAN ANDREAS"
  element.classList.add('header');

 // Add the image to our existing div.
//  const myIcon = new Image();
//  myIcon.src = Icon;

//  element.appendChild(myIcon);

  return element;
}

function navigator(){
  const element = document.createElement('div');
  element.classList.add('navbar');
  home.classList.add('navs');
  // home.attributes.add
  Armory_Catalog.classList.add('navs');
  contact.classList.add('navs');
  home.innerHTML = 'Home';
  Armory_Catalog.innerHTML = 'Catalog';
  contact.innerHTML = 'Contact';
  element.appendChild(home);
  element.appendChild(Armory_Catalog);
  element.appendChild(contact);

  return element;
}




function main(){
  const Pelement = document.createElement('div');
  Pelement.style.width= "98vw";
  Pelement.style.display = "grid";
  Pelement.style.placeItems="center";
  
  const element = document.createElement('main');
  const para = document.createElement('p');
  para.innerHTML = "<strong>SAN ANDREAS</strong>: <br>Where Weapons Meet Vice City Precision "
  element.appendChild(para);
  const pic = new Image();
  pic.src = Icon;
  pic.classList.add('icon');
  element.appendChild(pic);
  const para2 = document.createElement('p');
  para2.innerHTML="Pay Us Visit!";
  element.appendChild(para2);
  Pelement.appendChild(element);
  return Pelement;
}

function foot(){
  const element = document.createElement('footer');
  const para = document.createElement('p');
  para.innerHTML="Serving the community since 2024."
  element.appendChild(para);
  return element;
}
document.body.appendChild(component());
document.body.appendChild(navigator());
document.body.appendChild(main());
document.body.appendChild(foot());


// const arr[]

function Catalog(){
  document.body.innerHTML='';
  document.body.appendChild(component());
  document.body.appendChild(navigator());

  const Pelement = document.createElement('div');
  Pelement.style.width= "98vw";
  Pelement.style.display = "grid";
  Pelement.style.placeItems="center";
  const element = document.createElement('main');
  element.classList.add('catalog-main')
  Pelement.appendChild(element);
  
  arr.forEach(weapon => {
    const card = document.createElement('div');
    var path = weapon.pic;
    card.style.backgroundImage = `url(${path})`;
    
    card.style.backgroundSize ='cover';
    card.classList.add('card');

    const invi = document.createElement('div');
    invi.classList.add('invisible');
    invi.style.visibility = "hidden";
    
    card.addEventListener('mouseover',function(){
      invi.style.visibility = "visible";
      const Name = document.createElement('p');
      Name.textContent = `Name: ${weapon.name}`;
      const Range = document.createElement('p');
      Range.textContent=`Range: ${weapon.range}`;
      const damage = document.createElement('p');
      damage.textContent=`${weapon.damage}`;
      const price = document.createElement('p');
      price.textContent=`Price: ${weapon.price}`;

      invi.appendChild(Name);
      invi.appendChild(Range);
      invi.appendChild(damage);
      invi.appendChild(price);
    })
    card.addEventListener('mouseout',function(){
      invi.innerHTML='';
      invi.style.visibility = "hidden";
      })
    card.appendChild(invi);
    element.appendChild(card);
    
  });
  document.body.appendChild(Pelement)
}

function HOME(){
  document.body.innerHTML ='';
  document.body.appendChild(component());
  document.body.appendChild(navigator());
  document.body.appendChild(main());
  document.body.appendChild(foot());
}
function Contact(){
  document.body.innerHTML ='';
  document.body.appendChild(component());
  document.body.appendChild(navigator());
  const container = document.createElement('div');
  container.classList.add('container');
  const map = document.createElement('p');
  map.innerHTML=`<iframe class="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96740.51366066422!2d-99.02518970021666!3d19.41231298846806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e3705c3ad799%3A0xe9e0ede4cbef87f7!2sChimalhuac%C3%A1n%2C%20State%20of%20Mexico%2C%20Mexico!5e1!3m2!1sen!2sin!4v1705514926444!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  
  map.classList.add('map');
  const details = document.createElement('div');
  details.classList.add('details');
  const add = document.createElement('p');
  add.innerHTML="<strong>Address:</strong> San-Andreas FireArms <br> near Chimal Park<br><br>";
  const add2 = document.createElement('p');
  add2.textContent="in Chimalhuacán";
  const number = document.createElement('p');
  number.innerHTML="<br><strong>Contact: </strong> 9876543210";

  details.appendChild(add);
  // details.appendChild(add2);
  details.appendChild(number);
  container.appendChild(map);
  container.appendChild(details);
  document.body.appendChild(container);
  
}


//navs
home.addEventListener('click',function(){
  HOME();
  const element = document.getElementById('selectedNav');
  element.removeAttribute('id','selectedNav');
  home.setAttribute('id','selectedNav');
})
Armory_Catalog.addEventListener('click',function(){
  Catalog();
  const element = document.getElementById('selectedNav');
  element.removeAttribute('id','selectedNav');
  Armory_Catalog.setAttribute('id','selectedNav');
})
contact.addEventListener('click',function(){
  Contact();
  const element = document.getElementById('selectedNav');
  element.removeAttribute('id','selectedNav');
  contact.setAttribute('id','selectedNav');
})