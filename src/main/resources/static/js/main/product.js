const productForm = document.forms.namedItem('product');

const mainImage = document.querySelector('.main-image-container > img');
const subImageButtons = document.querySelectorAll('.sub-image-container > button');
const mainImageSrc = mainImage.src;

const productOptionUl = document.getElementById('product-option-ul');

const buyButton = document.querySelector('.buy-btn');
const cartButton = document.querySelector('.cart-btn');
const heartButton = document.querySelector('.heart-btn');


/// 상품 이미지 변경하기
subImageButtons.forEach(subImageButton => {
    subImageButton.onmouseenter = () => {
        const imageTag = subImageButton.querySelector('img');
        mainImage.src = imageTag.src;
    }
    subImageButton.onmouseleave = () => {
        mainImage.src = mainImageSrc;
    }
});


////// 상품을 카트에 추가하기
cartButton.onclick = () => {
    // 추가된 옵션이 있다면 추가된 옵션들의 id를 배열로 수집한다
    const productOptions = productOptionUl.getElementsByTagName('li');
    const options = [...productOptions].map(productOption => {
        const no = productOption.id;
        const amount = +productOption.querySelector('input').value;
        return { 
            no: no,
            amount: amount
        };
    });

    const requestBody = {
        no: productForm.id,
        options: options
    }
    
    console.log(requestBody);
    // 장바구니 담기 POST 요청 전송
    // fetch(``, {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(requestBody)
    // })
}















