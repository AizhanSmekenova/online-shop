
const getData = (str) => {

    return fetch(`https://test-f1033-default-rtdb.firebaseio.com/goods.json`)
        .then(res => res.json())
}


export default getData