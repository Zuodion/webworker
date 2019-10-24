onmessage = (e) => {
    let num = factorialize(e.data)
    while (num > 1) num--;
    postMessage(num)
}
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }