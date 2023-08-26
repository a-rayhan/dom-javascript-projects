const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

// const accessKey = '1oBBIaqnrsFGIZCX-HROkLDXI7a5SU8MsIitEtTddlw';

let keyword = '';
let page = 1;

async function serachImages() {
    keyword = searchBox.value;
    // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = '';
    }

    data.results.map((result) => {
        const img = document.createElement('img');
        img.src = result.urls.small;

        const a = document.createElement('a');
        a.href = result.links.html;
        a.target = '_blank';

        a.appendChild(img);
        searchResult.appendChild(a);
    })

    showMoreBtn.style.display = 'block';
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    serachImages();
})

showMoreBtn.addEventListener('click', () => {
    page++;
    serachImages();
})
