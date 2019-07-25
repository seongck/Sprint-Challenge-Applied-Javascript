// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(obj) {
  const header = document.createElement('div');
  header.classList.add('header');

  const date = document.createElement('span');
  date.classList.add('date');
  date.innerText = obj.date;

  const heading = document.createElement('h1');
  heading.innerText = obj.heading;

  const temp = document.createElement('span');
  temp.classList.add('temp');
  temp.innerText = obj.temp;

  header.appendChild(date);
  header.appendChild(heading);
  header.appendChild(temp);

  return header;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header({
  date: 'MARCH 28, 2019',
  heading: 'Lambda Times',
  temp: '98°'
}));
