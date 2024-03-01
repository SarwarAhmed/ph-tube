const btnContainer = document.getElementById('btn-container');
const cardContainer = document.getElementById('card-container');

let selectedCategory = 1000;

const fetchCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories';
    fetch(url)
        .then(res => res.json())
        .then(({ data }) => {
            data.forEach((card) => {
                console.log(card);
                const newBtn = document.createElement('button');
                newBtn.className = 'btn  btn-ghost bg-slate-700 text-white text-lg';
                newBtn.innerText = card.category;
                newBtn.addEventListener('click', () => fetchDataByCategory(card.category_id));
                btnContainer.appendChild(newBtn);
            });
        });
}

const fetchDataByCategory = (categoryID) => {
    selectedCategory = categoryID;

    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryID}`;
    fetch(url)
        .then(res => res.json())
        .then(({ data }) => {
            cardContainer.innerHTML = '';

            data.forEach((video) => {
                const newCard = document.createElement('div');
                newCard.innerHTML = `
                <div class="card w-full bg-base-100 shadow-xl">
                    <figure class="overflow-hidden h-72">
                        <img class="w-full" src="./images/smells.jpg" alt="Shoes" />
                        <h6 class="absolute bottom-[40%] right-12">0 hr</h6>
                    </figure>
                    <div class="card-body">
                        <div class="flex space-x-4 justify-start items-start">
                            <div>
                                <img class="w-12 h-12 rounded-full" src="./images/smells.jpg" alt="Shoes" />
                            </div>
                            <div>
                                <h2 class="card-title">Laugh At My Pain</h2>
                                <div class="flex mt-3">
                                    <p class="">Author Name</p>
                                    <img class="w-6 h-6" src="./images/verify.png" alt="">
                                </div>
                                <p class="mt-3">100k Views</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
                cardContainer.appendChild(newCard);
            });
        });
}


fetchCategories();
fetchDataByCategory(selectedCategory);
