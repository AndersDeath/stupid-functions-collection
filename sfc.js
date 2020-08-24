const buildTheList = (examplesObj, to) => {
  let body = document.querySelector('body');
  let container = document.createElement('div');
  body.appendChild(container);
  let keys = Object.keys(examplesObj);
  for(let i = 0; i < keys.length; i++) {
    let el = document.createElement('div');
    el.innerHTML = `<strong>${keys[i]}</strong> - ${to(examplesObj[keys[i]])}`
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

const sfc = {
  typesToString,
  typesToBoolean,
  typesToNumber
}

window.sfc = sfc;