const btn = document.querySelector('button');
const result = document.querySelector('.result');

document.addEventListener("DOMContentLoaded", () => {
	storageItem = localStorage.getItem('myJSON')
	if (localStorage) {
		showResult(JSON.parse(localStorage.getItem('myJSON')));
	} else {
		showResult(JSON.parse(localStorage.getItem('response.json')));
	}
});

const useRequest = (url, cb) => {
	return fetch(url)
		.then((response) => {
			const result = response.json();
			console.log('response.json', result)
			return result;
		})
		.then((data) => {
			localStorage.setItem('myJSON', JSON.stringify(data));
			localStorage.setItem('myPage', page);
			localStorage.setItem('myLimit', limit);
			
			showResult(data);
		})
		.catch(() => {
			console.log("error");
		});
}

function showError(msg) {
	elem = document.createElement('p');
	elem.textContent = msg;
	result.before(elem);
	elem1 = document.createElement('br');
	result.before(elem1);
}

const showResult = (data) => {
	let cards = '';
	data.forEach((item) => {
		const cardBlock = `
			<div class="card">
				<img class="image" src="${item.download_url}" alt="" width="200" />
				<p>${item.author}</p>
			</div>
			`;
		cards += cardBlock;
	})
	result.innerHTML = cards;
	result.style.display = 'block';
}

btn.addEventListener("click", async () => {
	let page = document.querySelector('.page').value;
	let limit = document.querySelector('.limit').value;
	const pageError = isNaN(page) || page < 1 || page > 10;
	const limitError = isNaN(limit) || limit < 1 || limit > 10;

	if (pageError && limitError) {
		showError('Номер страницы и лимит вне диапазона от 1 до 10');
	} else if (pageError) {
		showError('Номер страницы вне диапазона от 1 до 10');
	} else if (limitError) {
		showError('Лимит вне диапазона от 1 до 10');
	} else {
		await useRequest(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`, showResult);
		let localStorage
	}
});