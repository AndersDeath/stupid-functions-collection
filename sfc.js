const typesToString = (containerId, examplesObj) => {
    let container = document.getElementById(containerId);
    let keys = Object.keys(examplesObj);
    for(let i = 0; i < keys.length; i++) {
      let el = document.createElement('div');
      el.innerHTML = `<strong>${keys[i]}</strong> - ${String(examplesObj[keys[i]])}`
      container.appendChild(el);
    }
  }

const typesToBool = (containerId, examplesObj) => {
  let container = document.getElementById(containerId);
  let keys = Object.keys(examplesObj);
  for(let i = 0; i < keys.length; i++) {
    let el = document.createElement('div');
    el.innerHTML = `<strong>${keys[i]}</strong> - ${Boolean(examplesObj[keys[i]])}`
    container.appendChild(el);
  }
}