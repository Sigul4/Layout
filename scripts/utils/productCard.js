export default function productCard(data) {
  const { category, imgUrl, name, price, orderInfo, storage } = data;

  const icon =
    orderInfo.inStock !== 0
      ? "https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-340x340.png"
      : "https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-340x340.png";

  return `<li class="card block"> 
                <div class="card__main">
                    <img class="card__img" src="https://ilounge.ua/files/products/apple-macbook-pro-13-1-256gb-silver-2020-myda2_2.1000x.jpeg" alt="mac">
                    <h2 class="card__title">${name}</h2>
                    <div class="card__info">
                        <div class="card__availability">
                            <img class="availability-logo" src="${icon}" alt="">
                            <p class="availability-text"><strong>${orderInfo.inStock}</strong> left in stock</p>
                        </div>
                        <p class="card__price">Price: <strong>${price}</strong>$</p>
                        <button class="button block">Add to cart</button>
                    </div>
                </div>
                <div class="card__footer">
                    <img class="like-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png" alt="">
                    <p class="card__reviews"><strong>${orderInfo.reviews}</strong> Positive reviews Above average</p>
                    <p class="card__orders"><strong>${storage}</strong> orders</p>
                </div>
            </li>
    `;
}
