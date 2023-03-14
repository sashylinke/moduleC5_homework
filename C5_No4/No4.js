const btn = document.querySelector('.j-btn');
const inputWidth = document.querySelector(".width");
const inputHeight = document.querySelector(".height");
const result = document.querySelector(".result");

// f возвращает fetch
const useRequest = (width, height) => {
    return fetch(`https://picsum.photos/${width}/${height}`)
    	.then((response) => {
			return response;
		})
		.then(data => data.url)
        .catch(() => {
            console.log('error')
        });
}

btn.addEventListener('click', async () => {
	val = Number(inputWidth.value);
    val1 = Number(inputHeight.value);
	if (val < 100 || val > 300 || isNaN(val) || isNaN(val1) || val1 < 100 || val1 > 300) {
       result.textContent = 'Одно из чисел вне диапазона от 100 до 300';
    } else {
        const requestResult = await useRequest(val, val1);
        image = document.createElement('img');
        image.src = requestResult;
        result.append(image);   
    }
})
