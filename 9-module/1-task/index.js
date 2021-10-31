export default function promiseClick(button) {
  return new Promise((resolve) => {
    button.addEventListener('click', (event) => {
      resolve(event);      
    }, { once: true });
  });
}
// а почему вот этот код не проходит тест, вроде делает такой же функционал?( ошибка в тесте Async function did not complete within 5000ms)
// из за длинной цепочки? 

//   export default function promiseClick(button) {
//   return new Promise((resolve) => {
//     resolve(button);
//   }).then((button) => {
//     return new Promise(resolve => {
//       button.addEventListener('click', (event) => {
//         resolve(event);      
//       }, { once: true });
//     });
//   });
// }
