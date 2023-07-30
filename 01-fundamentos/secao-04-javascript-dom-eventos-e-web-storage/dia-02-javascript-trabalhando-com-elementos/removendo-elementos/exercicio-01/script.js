// Remova a tag h2, filha do elemento where-are-you
const parent = document.getElementById('parent');
const allChild = parent.childNodes;

for (let index = 0; index < allChild.length; index += 1) {
  if (allChild[index].id === 'where-are-you') {
    allChild[index].removeChild(allChild[index].firstElementChild);
  }
}