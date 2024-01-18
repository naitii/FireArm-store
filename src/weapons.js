import ak47 from './images/ak47.jpg'
import ar15 from './images/ar15.jpg'
import glock from './images/Glock17.jpg'
import katana from './images/katana2.jpg'
import lobaev from './images/lobaevS.jpg'
import m1911 from './images/m1911.jpg';

const arr = [];
class weapons {
    constructor(name, range, pic, price, damage){
        this.name=name;
      this.range=range;
      this.pic=pic;
      this.price=price;
      this.damage=damage;
    }
}

const w1 = new weapons(
    'Ak-47 Rifle', 
    '370m',
    ak47,
    '1.2k USD',
    'Caliber: 7.62x39mm'  
    )
    arr.push(w1);
    
    const w2 = new weapons(
        'AR-15 Rifle', 
        '540m',
        ar15,
        '1.5k USD',
        'Caliber: .223 Remington or 5.56mm NATO'  
        )
    arr.push(w2);

        
        const w3 = new weapons(
            'Glock 17 Pistol', 
            '65m',
            glock,
            '500 USD',
            'Caliber: 9mm Parabellum'  
            )
    arr.push(w3);

            
const w4 = new weapons(
    'M1911 Pistol', 
    '50m',
    m1911,
    '300 USD',
    'Caliber: .45 ACP (Automatic Colt Pistol)'  
    )
    arr.push(w4);

  
    
  const w5 = new weapons(
      'Lobaev Sniper Rifle', 
      '3880m',
      lobaev,
      '45k USD',
      'Caliber: .408 Cheyenne Tactical.'  
      )
      arr.push(w5);
  
  const w6 = new weapons(
      'Katana', 
      '1.2m',
      katana,
      '106 USD',
      'Highest grade t10 carbon steel '  
      )
    arr.push(w6);
      
export {arr};
    
      
      
      