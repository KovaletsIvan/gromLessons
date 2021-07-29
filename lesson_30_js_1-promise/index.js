const addImage = (imgSrc) => {
  const p = new Promise((resolve, redject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'my foto');
    imgElem.src = imgSrc;
    const container = document.querySelector('.page');
    container.append(imgElem);

    const onloadImage = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };
    imgElem.addEventListener('load', onloadImage);
    imgElem.addEventListener('error', () => redject('Image load is failed...'));
  });

  return p;
};

const imgSrc =
  'https://p.bigstockphoto.om/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const result = addImage(imgSrc);

result.then((value) => {
  const { width, height } = value;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width}x${height}`;
});

result.catch((value) => console.log(value));
