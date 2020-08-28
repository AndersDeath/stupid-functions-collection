/**
 * This is Stupid Functions Collection
 */


const buildTheList = (examplesObj, to) => {
  let body = document.querySelector('body');
  let container = document.createElement('div');
  body.appendChild(container);
  let keys = Object.keys(examplesObj);
  for(let i = 0; i < keys.length; i++) {
    let el = document.createElement('div');
    let out = `<strong>${keys[i]}</strong> - ${to === 'typeof' ? typeof(examplesObj[keys[i]]) : to(examplesObj[keys[i]])}`;
    el.innerHTML =  out;
    container.appendChild(el);
  }
}

const typesToString = (examplesObj) => {
  buildTheList(examplesObj, String)
}

const typesToBoolean = (examplesObj) => {
  buildTheList(examplesObj, Boolean)
}

const typesToNumber = (examplesObj) => {
  buildTheList(examplesObj, Number)
}

const massTypeOf = (examplesObj) => {
  buildTheList(examplesObj, 'typeof');
}

const manyManyCalls = (arg) => {
  console.log(arg);
  return (arg) => {
    return manyManyCalls(arg);
  }
}

const superIncrementor = (inc, max, start) => {
  let count = start || 0;
  return () => {
    count += (inc || 1);
    if (max !== undefined && count >= max) {
      return max;
    }
    return count;
  }
}

const superDecrementor = (dec, min,start) => {
  let count = start || 0;
  return () => {
    count -= (dec || 1);
    if (min !== undefined && count <= min) {
      return min;
    }
    return count;
  }
}


const sfc = {
  typesToString,
  typesToBoolean,
  typesToNumber,
  massTypeOf,
  manyManyCalls,
  superIncrementor,
  superDecrementor
}

window.sfc = sfc;
// console.clear()

// let inc = superDecrementor(1, -40, 5);
// let a = inc();
// let b = inc();
// let c = inc();
// let d = inc();
// let e = inc();
// let f = inc();
// let g = inc();

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)


// const a = 'String';

// const b = '';

// const c = 10;

// const d = null;

// const e = undefined;

// const f = [];

// const g = [1,2,3,4,5];

// const h = {};

// const i = {val: 1, val: 2};

// const j = function(){};

// const k = Symbol('k');

// const l = true;

// const m = false;

// let all = {a,b,c,d,e,f,g,h,i,j,k,l,m}

// window.addEventListener('load', () => {
//   // sfc.massTypeOf(all)

//   stupidCircle();
//   stupidCircle(2, 50, 'blue', 5);
//   stupidCircle(13, 30, 'green', 1);
//   stupidCircle(null, null, null, 7);
//   stupidCircle(123,3,'yellow', 15);
//   stupidCircle(1, 60,'green', 0.1);
// })


function stupidCircle(top, left, color, speed) {
  let body = document.querySelector('body');
  let circle = document.createElement('div');

  circle.style.height = '40px';
  circle.style.width  = '40px';
  circle.offsetLeft = '20px';
  circle.offsetTop = '20px'
  circle.style.borderRadius = '40px'
  circle.style.position = 'fixed';
  circle.style.zIndex = '1'
  circle.style.backgroundColor = color || 'red'
  circle.style.top = top || 0;
  circle.style.left = left || 0;
  let inc = true;
  let bounce = true;
  setInterval(() => {
    let s = circle.getBoundingClientRect();
    if(s.top === window.innerHeight - s.height) {
      bounce = false
    }
    if(s.top === 0) {
      bounce = true;
    }
    if(s.x + s.width >= window.innerWidth) {
      inc = false;
    }
    if(s.x < 0) {
      inc = true
    }
    if(inc === true) {
      circle.style.left = circle.getBoundingClientRect().left + 1 + 'px';
    } else {
      circle.style.left = circle.getBoundingClientRect().left - 1 + 'px';
    }
    if(bounce === true) {
      circle.style.top = s.top + 1 + 'px';
    } else {
      circle.style.top = s.top - 1 + 'px';
    }
  }, (speed || 10))
  body.appendChild(circle);
}
