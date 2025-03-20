const container = document.querySelector(".main-parent");

let data = [];
document.addEventListener("DOMContentLoaded", () => {
  const res = fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&s"
  )
    .then((res) => res.json())
    .then((res) => {
      data = res;
      for (let i in data) {
        container.innerHTML += `<div class="parent">
            <div class="img-child"><img class="img-child-1" src=${data[i].image} alt=""></div>
            <div class="div-child">
                <div class="div-child-1">
                    <h3>${data[i].name}</h3>
                    <h3>${data[i].current_price}</h3>
                </div>
                <div class="div-child-2">
                    <p>${data[i].symbol}</p>
                    <p class="change-p">${data[i].price_change_percentage_24h}%</p>
                </div>
            </div>
        </div>`;
      }
    });
});
