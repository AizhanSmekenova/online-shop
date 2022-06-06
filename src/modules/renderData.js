const renderData = (goods) => {

	const goodsWrapper = document.querySelector('.goods');
	localStorage.setItem('goods', JSON.stringify(goods));
	goodsWrapper.innerHTML = '';
	goods.forEach((elem) => {
		goodsWrapper.insertAdjacentHTML('beforeend', `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
								<div class="card" data-key="${elem.id}">
                                ${elem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
									<div class="card-img-wrapper">
										<span class="card-img-top"
											style="background-image: url('${elem.img}')"></span>
									</div>
									<div class="card-body justify-content-between">
										<div class="card-price">${elem.price} ₽</div>
										<h5 class="card-title">${elem.title}</h5>
										<button class="btn btn-primary">В корзину</button>
									</div>
								</div>
							</div>
        `)
	});
}

export default renderData