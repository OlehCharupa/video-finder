import apiService from "./apiService.js";
import refs from "./refs.js";
import template from "../templates/template.hbs";
import "@babel/polyfill";
import debounce from "lodash.debounce";

const loadMoreButton = document.createElement("button")
loadMoreButton.textContent = "Load More ..."
loadMoreButton.classList.add("loadmore-button")

loadMoreButton.addEventListener("click", loadMore)


refs.videoSearch.addEventListener("input", debounce(e => {
    // e.preventDefault();
    refs.videoList.innerHTML = ""
    apiService.resetPage()
    apiService._searchQ = e.target.value
    rengeApi()
    refs.videoSearch.value = ""
}, 1000))



function rengeApi() {
    apiService.getFetch().then(data => renderList(data.hits))
    refs.body.insertAdjacentElement("beforeend", loadMoreButton)

}

function renderList(data) {
    const item = template(data)
    refs.videoList.insertAdjacentHTML("beforeend", item)
}

function loadMore() {
    apiService.setPage();
    apiService.getFetch().then(data => renderList(data.hits))
}

