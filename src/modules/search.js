import getData from './getData';
import renderData from './renderData';
import { searchFilter } from './filters';

const search = () => {
    const searchInpEl = document.querySelector('.search-wrapper_input');
    searchInpEl.addEventListener("input", (event) => {
        const value = event.target.value;
        getData().then((data) => {
            renderData(searchFilter(data, value))
        })
    })
}

export default search