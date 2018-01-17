function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list li');

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n);
  }
}

function deepestChild() {
  const deepestNode = document.querySelectorAll('#grand-node div').length - 1;
  return document.querySelectorAll('#grand-node div')[deepestNode];

}
