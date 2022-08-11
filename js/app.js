window.onload = () => {
  const app = () => {
    let playerImages = [
      "https://i.imgur.com/joAIWUl.jpg",
      "https://i.imgur.com/qd3cMYn.jpg",
      "https://i.imgur.com/iNg94e0.jpg",
      "https://i.imgur.com/GDRDEnF.jpg",
      "https://i.imgur.com/HWuudhA.jpg",
      "https://i.imgur.com/ViTB5nD.jpg",
      "https://i.imgur.com/mnzkx6Y.jpg",
      "https://i.imgur.com/CnV0Hbo.jpg",
      "https://i.imgur.com/alQRfsX.jpg",
      "https://i.imgur.com/ZvnKFva.jpg",
      "https://i.imgur.com/mPrwgun.jpg",
      "https://i.imgur.com/2xPTPLP.jpg",
      "https://i.imgur.com/uNJHoJL.png",
      "https://i.imgur.com/StSUf9w.jpg",
      "https://i.imgur.com/UTGGfP7.jpg",
      "https://i.imgur.com/beOVgC2.jpg",
      "https://i.imgur.com/zigSjQW.jpg",
      "https://i.imgur.com/msGVQVG.jpg",
      "https://i.imgur.com/iOsSkWv.jpg",
      "https://i.imgur.com/yDeLJoG.jpg",
      "https://i.imgur.com/8cKFMyU.jpg",
      "https://i.imgur.com/IHSs2cd.jpg",
      "https://i.imgur.com/Zyd9N6J.jpg",
      "https://i.imgur.com/Rylvzy6.jpg",
      "https://i.imgur.com/t0G8y0Z.jpg",
    ];

    const shuffleArray = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      };
    };

    shuffleArray(playerImages);

    let images = document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
      if (images[i].dataset.replaced === undefined) {
        images[i].src = playerImages[i];
        images[i].dataset.replaced = true;
      };
      if (!playerImages[i]) {
        images[i].src = playerImages[Math.floor(Math.random() * playerImages.length)];
        images[i].dataset.replaced = true;
      };
    };
  };
  app();
};
