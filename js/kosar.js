function showOne() {
    let x = document.getElementById('box-1');
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function showTwo() {
    let y = document.getElementById('box-2');
    if (y.style.display === "none") {
        y.style.display = "flex";
    } else {
        y.style.display = "none";
    }
}

function showThree() {
    let z = document.getElementById('box-3');
    if (z.style.display === "none") {
        z.style.display = "flex";
    } else {
        z.style.display = "none";
    }
}

$('.center').slick({
  centerMode: true,
  // centerPadding: '60px',
  slidesToShow: 1,
  initialSlide: 1,
  // responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 3
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: true,
  //         centerPadding: '40px',
  //         slidesToShow: 1
  //       }
  //     }
  //   ]
  responsive: [
          {
            breakpoint: 940,
            settings: {
              arrows: true,
              centerMode: true,
              // centerPadding: '40px',
              slidesToShow: 1
            }
          },
      ]
});