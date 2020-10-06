// $(document).ready(function(){
//     $('.slider').slick({
//         slidesToShow: 3,
//         centerMode: true,
//     });
// });

$('.center').slick({
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 3,
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