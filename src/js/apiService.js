import refs from "./refs.js"
const apiKey = `18623369-889f6d1cb3a21a0bcc2be87ce`;
const baseUrl = `https://pixabay.com/api/`;



export default {
    _searchQ: "",
    page: 1,
    perPage: 6,
    getFetch() {
        let url = `${baseUrl}videos/?key=${apiKey}&q=${this._searchQ}&page=${this.page}&per_page=${this.perPage}`;
        return fetch(url).then(res => res.json())
    },
    get searchQ() {
        return this._searchQ
    },
    set searchQ(newSearch) {
        return this._searchQ = newSearch
    },
    setPage() {
        return this.page++;
    },
    resetPage() {
        return this.page = 1;
    },

}