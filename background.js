const images = ["IMG_1688.JPG", "IMG_1761.JPG", "IMG_2403.JPG", "IMG_2468.JPG", "IMG_2613.JPG", "IMG_2721.JPG", "IMG_2743.JPG", "IMG_3825.JPG", "IMG_5603.JPG", "IMG_9453.JPG"];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);




// createElement를 써서 html에 파일이 만들어졌기 때문에 굳이 console.log안해도 ok 
// 아니 애초 console탭에 log해도 웹엔 안 보임
// prepend 레이어맨앞 append 레이어맨뒤


// linear-gradient : 선형 그러데이션을 만들어주는 CSS 함수입니다. 참고 자료
// Math.floor() : 주어진 숫자의 소수점 이하를 내림해서 반환하는 함수입니다. 참고 자료
// Math.random() : 0에서 1보다 작은 범위의 난수를 반환하는 함수입니다. 참고 자료
// length : 배열의 길이(요소의 개수)를 반환하는 프로퍼티입니다. 참고 자료