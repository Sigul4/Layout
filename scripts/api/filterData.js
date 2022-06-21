// export default function filterData(data, obj) {
//     data.map((obj) => keys.reduce((acc, key) => {
//         console.log(obj[key])
//         acc[key] = obj[key];
//         console.log(acc[key])
//         return acc;
//       }, {}));
// }

const coolObj = {
};

export default function filterData(data, innerParam, innerValue) {
  let result
  let counterOfResultValues = 0
  // console.log(data[0],coolObj,innerParam, innerValue)
  coolObj.innerParam = innerValue.toLowerCase();
  
  // console.log(data[0],coolObj,innerParam, innerValue)
  data.reduce((acc, element, indexOfElem) =>
    Object.values(coolObj).map((collElem, index) => {
      
      console.log(Object.entries(element))
      console.error(indexOfElem)
      console.error(data.length)
      console.log("Что сравнили", element[`${innerParam}`]);
      console.log("С чем сравнили", collElem);
      console.log("В категории", innerParam);

      if (`${element[`${innerParam}`]}`.toLowerCase() == collElem.toLowerCase()) {
        console.log("Аккумулятор", acc);
        acc[counterOfResultValues++] = element;
        console.log("Аккумулятор", acc);
        result = acc;
      }
    }), {});
    return result
}
