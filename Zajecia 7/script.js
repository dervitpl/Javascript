const asyncAdd = async (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(a+b)
      }, 100)
    })
}

const addMultiple = async (...numbers) => {
    let sum = 0;
    for (const number of numbers) {
      sum = await asyncAdd(sum, number);
    }
    return sum;
  }

  const measureTime = func => {
    const start = performance.now();
    func();
    const end = performance.now();
    return end - start;
  }

  const data = Array(100).fill().map(Math.random);
const time = measureTime(() => addMultiple(...data));
console.log(`Czas wykonania: ${time} ms`);
