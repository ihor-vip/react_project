// Взяти масив usersList.
//     Створити компонент,котрий характеризує юзера.
//     Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
// Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
// Вкладеність компонентів : App->Users->User->Address->Geo
// Вивести всі об'єкти з масиву
//
//
// let usersList = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//       }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   },
//   {
//     id: 2,
//     name: 'Ervin Howell',
//     username: 'Antonette',
//     email: 'Shanna@melissa.tv',
//     address: {
//       street: 'Victor Plains',
//       suite: 'Suite 879',
//       city: 'Wisokyburgh',
//       zipcode: '90566-7771',
//       geo: {
//         lat: '-43.9509',
//         lng: '-34.4618'
//       }
//     },
//     phone: '010-692-6593 x09125',
//     website: 'anastasia.net',
//     company: {
//       name: 'Deckow-Crist',
//       catchPhrase: 'Proactive didactic contingency',
//       bs: 'synergize scalable supply-chains'
//     }
//   },
//   {
//     id: 3,
//     name: 'Clementine Bauch',
//     username: 'Samantha',
//     email: 'Nathan@yesenia.net',
//     address: {
//       street: 'Douglas Extension',
//       suite: 'Suite 847',
//       city: 'McKenziehaven',
//       zipcode: '59590-4157',
//       geo: {
//         lat: '-68.6102',
//         lng: '-47.0653'
//       }
//     },
//     phone: '1-463-123-4447',
//     website: 'ramiro.info',
//     company: {
//       name: 'Romaguera-Jacobson',
//       catchPhrase: 'Face to face bifurcated interface',
//       bs: 'e-enable strategic applications'
//     }
//   },
//   {
//     id: 4,
//     name: 'Patricia Lebsack',
//     username: 'Karianne',
//     email: 'Julianne.OConner@kory.org',
//     address: {
//       street: 'Hoeger Mall',
//       suite: 'Apt. 692',
//       city: 'South Elvis',
//       zipcode: '53919-4257',
//       geo: {
//         lat: '29.4572',
//         lng: '-164.2990'
//       }
//     },
//     phone: '493-170-9623 x156',
//     website: 'kale.biz',
//     company: {
//       name: 'Robel-Corkery',
//       catchPhrase: 'Multi-tiered zero tolerance productivity',
//       bs: 'transition cutting-edge web services'
//     }
//   },
//   {
//     id: 5,
//     name: 'Chelsey Dietrich',
//     username: 'Kamren',
//     email: 'Lucio_Hettinger@annie.ca',
//     address: {
//       street: 'Skiles Walks',
//       suite: 'Suite 351',
//       city: 'Roscoeview',
//       zipcode: '33263',
//       geo: {
//         lat: '-31.8129',
//         lng: '62.5342'
//       }
//     },
//     phone: '(254)954-1289',
//     website: 'demarco.info',
//     company: {
//       name: 'Keebler LLC',
//       catchPhrase: 'User-centric fault-tolerant solution',
//       bs: 'revolutionize end-to-end systems'
//     }
//   },
//   {
//     id: 6,
//     name: 'Mrs. Dennis Schulist',
//     username: 'Leopoldo_Corkery',
//     email: 'Karley_Dach@jasper.info',
//     address: {
//       street: 'Norberto Crossing',
//       suite: 'Apt. 950',
//       city: 'South Christy',
//       zipcode: '23505-1337',
//       geo: {
//         lat: '-71.4197',
//         lng: '71.7478'
//       }
//     },
//     phone: '1-477-935-8478 x6430',
//     website: 'ola.org',
//     company: {
//       name: 'Considine-Lockman',
//       catchPhrase: 'Synchronised bottom-line interface',
//       bs: 'e-enable innovative applications'
//     }
//   },
//   {
//     id: 7,
//     name: 'Kurtis Weissnat',
//     username: 'Elwyn.Skiles',
//     email: 'Telly.Hoeger@billy.biz',
//     address: {
//       street: 'Rex Trail',
//       suite: 'Suite 280',
//       city: 'Howemouth',
//       zipcode: '58804-1099',
//       geo: {
//         lat: '24.8918',
//         lng: '21.8984'
//       }
//     },
//     phone: '210.067.6132',
//     website: 'elvis.io',
//     company: {
//       name: 'Johns Group',
//       catchPhrase: 'Configurable multimedia task-force',
//       bs: 'generate enterprise e-tailers'
//     }
//   },
//   {
//     id: 8,
//     name: 'Nicholas Runolfsdottir V',
//     username: 'Maxime_Nienow',
//     email: 'Sherwood@rosamond.me',
//     address: {
//       street: 'Ellsworth Summit',
//       suite: 'Suite 729',
//       city: 'Aliyaview',
//       zipcode: '45169',
//       geo: {
//         lat: '-14.3990',
//         lng: '-120.7677'
//       }
//     },
//     phone: '586.493.6943 x140',
//     website: 'jacynthe.com',
//     company: {
//       name: 'Abernathy Group',
//       catchPhrase: 'Implemented secondary concept',
//       bs: 'e-enable extensible e-tailers'
//     }
//   },
//   {
//     id: 9,
//     name: 'Glenna Reichert',
//     username: 'Delphine',
//     email: 'Chaim_McDermott@dana.io',
//     address: {
//       street: 'Dayna Park',
//       suite: 'Suite 449',
//       city: 'Bartholomebury',
//       zipcode: '76495-3109',
//       geo: {
//         lat: '24.6463',
//         lng: '-168.8889'
//       }
//     },
//     phone: '(775)976-6794 x41206',
//     website: 'conrad.com',
//     company: {
//       name: 'Yost and Sons',
//       catchPhrase: 'Switchable contextually-based project',
//       bs: 'aggregate real-time technologies'
//     }
//   },
//   {
//     id: 10,
//     name: 'Clementina DuBuque',
//     username: 'Moriah.Stanton',
//     email: 'Rey.Padberg@karina.biz',
//     address: {
//       street: 'Kattie Turnpike',
//       suite: 'Suite 198',
//       city: 'Lebsackbury',
//       zipcode: '31428-2261',
//       geo: {
//         lat: '-38.2386',
//         lng: '57.2232'
//       }
//     },
//     phone: '024-648-3804',
//     website: 'ambrose.net',
//     company: {
//       name: 'Hoeger LLC',
//       catchPhrase: 'Centralized empowering task-force',
//       bs: 'target end-to-end models'
//     }
//   }
// ];


import './App.css';
import User from "./components/user/User";
import Address from "./components/user/Address";
import Geo from "./components/user/Geo";

function App() {


  return (

      <div className={'mainbox'}>

          <div className={'box'}>
              <User
                  pId={'1'}
                  pName={'Leanne Graham'}
                  pUsername={'Bret'}
                  pEmail={'Sincere@april.biz'}
                  pPhone={'1-770-736-8031 x56442'}
                  pWebsite={'hildegard.org'}
                  pCompanyName={'Romaguera-Crona'}
                  pCompanyCatchPhrase={'Multi-layered client-server neural-net'}
                  pCompanyBs={'harness real-time e-markets'}
              />
              <Address
                  pStreet={'Kulas Light'}
                  pSuite={'Apt. 556'}
                  pCity={'Gwenborough'}
                  pZipcode={'92998-3874'}
              />
              <Geo
                  pLat={'-37.3159'}
                  pLng={'81.1496'}
              />
          </div>


          <div className={'box'}>
              <User
                  pId={'2'}
                  pName={'Ervin Howell'}
                  pUsername={'Antonette'}
                  pEmail={'Shanna@melissa.tv'}
                  pPhone={'010-692-6593 x09125'}
                  pWebsite={'anastasia.net'}
                  pCompanyName={'Deckow-Crist'}
                  pCompanyCatchPhrase={'Proactive didactic contingency'}
                  pCompanyBs={'synergize scalable supply-chains'}
              />
              <Address
                  pStreet={'Victor Plains'}
                  pSuite={'Suite 879'}
                  pCity={'Wisokyburgh'}
                  pZipcode={'90566-7771'}
              />
              <Geo
                  pLat={'-43.9509'}
                  pLng={'-34.4618'}
              />
          </div>



          <div className={'box'}>
              <User
                  pId={'3'}
                  pName={'Clementine Bauch'}
                  pUsername={'Samantha'}
                  pEmail={'Nathan@yesenia.net'}
                  pPhone={'1-463-123-4447'}
                  pWebsite={'ramiro.info'}
                  pCompanyName={'ramiro.info'}
                  pCompanyCatchPhrase={'Face to face bifurcated interface'}
                  pCompanyBs={'e-enable strategic applications'}
              />
              <Address
                  pStreet={'Douglas Extension'}
                  pSuite={'Suite 847'}
                  pCity={'McKenziehaven'}
                  pZipcode={'59590-4157'}
              />
              <Geo
                  pLat={'-68.6102'}
                  pLng={'-47.0653'}
              />
          </div>


          <div className={'box'}>
              <User
                  pId={'4'}
                  pName={'Patricia Lebsack'}
                  pUsername={'Karianne'}
                  pEmail={'Julianne.OConner@kory.org'}
                  pPhone={'493-170-9623 x156'}
                  pWebsite={'kale.biz'}
                  pCompanyName={'Robel-Corkery'}
                  pCompanyCatchPhrase={'Multi-tiered zero tolerance productivity'}
                  pCompanyBs={'transition cutting-edge web services'}
              />
              <Address
                  pStreet={'Hoeger Mall'}
                  pSuite={'Apt. 692'}
                  pCity={'South Elvis'}
                  pZipcode={'53919-4257'}
              />
              <Geo
                  pLat={'29.4572'}
                  pLng={'-164.2990'}
              />
          </div>


          <div className={'box'}>
              <User
                  pId={'5'}
                  pName={'Chelsey Dietrich'}
                  pUsername={'Kamren'}
                  pEmail={'Lucio_Hettinger@annie.ca'}
                  pPhone={'(254)954-1289'}
                  pWebsite={'demarco.info'}
                  pCompanyName={'Keebler LLC'}
                  pCompanyCatchPhrase={'User-centric fault-tolerant solution'}
                  pCompanyBs={'revolutionize end-to-end systems'}
              />
              <Address
                  pStreet={'Skiles Walks'}
                  pSuite={'Suite 351'}
                  pCity={'Roscoeview'}
                  pZipcode={'33263'}
              />
              <Geo
                  pLat={'-31.8129'}
                  pLng={'62.5342'}
              />
          </div>


          <div className={'box'}>
              <User
                  pId={'6'}
                  pName={'Mrs. Dennis Schulist'}
                  pUsername={'Leopoldo_Corkery'}
                  pEmail={'Karley_Dach@jasper.info'}
                  pPhone={'1-477-935-8478 x6430'}
                  pWebsite={'ola.org'}
                  pCompanyName={'Considine-Lockman'}
                  pCompanyCatchPhrase={'Synchronised bottom-line interface'}
                  pCompanyBs={'e-enable innovative applications'}
              />
              <Address
                  pStreet={'Norberto Crossing'}
                  pSuite={'Apt. 950'}
                  pCity={'South Christy'}
                  pZipcode={'23505-1337'}
              />
              <Geo
                  pLat={'-71.4197'}
                  pLng={'71.7478'}
              />
          </div>


          <div className={'box'}>
              <User
                  pId={'7'}
                  pName={'Kurtis Weissnat'}
                  pUsername={'Elwyn.Skiles'}
                  pEmail={'Telly.Hoeger@billy.biz'}
                  pPhone={'210.067.6132'}
                  pWebsite={'elvis.io'}
                  pCompanyName={'Johns Group'}
                  pCompanyCatchPhrase={'Configurable multimedia task-force'}
                  pCompanyBs={'generate enterprise e-tailers'}
              />
              <Address
                  pStreet={'Rex Trail'}
                  pSuite={'Suite 280'}
                  pCity={'Howemouth'}
                  pZipcode={'58804-1099'}
              />
              <Geo
                  pLat={'24.8918'}
                  pLng={'21.8984'}
              />

          </div>


          <div className={'box'}>
              <User
                  pId={'8'}
                  pName={'Nicholas Runolfsdottir V'}
                  pUsername={'Maxime_Nienow'}
                  pEmail={'Sherwood@rosamond.me'}
                  pPhone={'586.493.6943 x140'}
                  pWebsite={'jacynthe.com'}
                  pCompanyName={'Abernathy Group'}
                  pCompanyCatchPhrase={'Implemented secondary concept'}
                  pCompanyBs={'e-enable extensible e-tailers'}
              />
              <Address
                  pStreet={'Ellsworth Summit'}
                  pSuite={'Suite 729'}
                  pCity={'Aliyaview'}
                  pZipcode={'45169'}
              />
              <Geo
                  pLat={'-14.3990'}
                  pLng={'-120.7677'}
              />
          </div>


          <div className={'box'}>
              <User
                  pId={'9'}
                  pName={'Glenna Reichert'}
                  pUsername={'Delphine'}
                  pEmail={'Chaim_McDermott@dana.io'}
                  pPhone={'(775)976-6794 x41206'}
                  pWebsite={'conrad.com'}
                  pCompanyName={'Yost and Sons'}
                  pCompanyCatchPhrase={'Switchable contextually-based project'}
                  pCompanyBs={'aggregate real-time technologies'}
              />
              <Address
                  pStreet={'Dayna Park'}
                  pSuite={'Suite 449'}
                  pCity={'Bartholomebury'}
                  pZipcode={'76495-3109'}
              />
              <Geo
                  pLat={'24.6463'}
                  pLng={'-168.8889'}
              />
          </div>


          <div className={'box'}>
              <User
                  pId={'10'}
                  pName={'Clementina DuBuque'}
                  pUsername={'Moriah.Stanton'}
                  pEmail={'Rey.Padberg@karina.biz'}
                  pPhone={'024-648-3804'}
                  pWebsite={'ambrose.net'}
                  pCompanyName={'Hoeger LLC'}
                  pCompanyCatchPhrase={'Centralized empowering task-force'}
                  pCompanyBs={'target end-to-end models'}
              />
              <Address
                  pStreet={'Kattie Turnpike'}
                  pSuite={'Suite 198'}
                  pCity={'Lebsackbury'}
                  pZipcode={'31428-2261'}
              />
              <Geo
                  pLat={'-38.2386'}
                  pLng={'57.2232'}
              />
          </div>


      </div>
  );
}

export default App;
