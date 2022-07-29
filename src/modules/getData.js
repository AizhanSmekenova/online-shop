
const getData = (str) => {

    return fetch(`https://online-shop-af643-default-rtdb.firebaseio.com/goods.json`)
        .then(res => res.json())
}


export default getData
