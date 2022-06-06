import getData from "./getData";
import postData from "./postData";
import renderData from "./renderData";
const load = () => {
    const cartBtn = document.getElementById('cart');
    getData().then((data) => { renderData(data) })

}

export default load;