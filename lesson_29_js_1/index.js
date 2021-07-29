export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My foto");
  imgElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  containerElem.append(imgElem);

  const imageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };
  imgElem.addEventListener("load", imageLoaded);

  imgElem.addEventListener("error", () => callback("Image load is failed..."));
};

export const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = imgElem;
  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `${width} x ${height}`;
};

addImage(
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
  onImageLoaded
);