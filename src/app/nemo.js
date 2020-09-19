const nemo = ['nemo'];
const large = new Array(1000000).fill('nemo');


function findNemo(array) {
  // let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Finding nemo');
    }
  }
  // let t1 = performance.now();
  // console.log('calling nemo took ' + (t1 - t0) + ' millisecs');
}

findNemo(large);