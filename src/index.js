function linearSearch(list, item) {
  return list.some(a => a === item) ? list : [];
}

console.log(linearSearch([2, 6, 7, 90, 103], 90));
