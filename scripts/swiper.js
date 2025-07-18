const bnrSwiper = new Swiper('.bnr_swiper', { 
    autoplay:{delay:3000},
    effect:'fade',
    loop:true,
})
const newSwiper = new Swiper('.new_swiper', { 
    spaceBetween:60,
    navigation:{
        prevEl:'.new_swiper + .swiper-button-prev',
        nextEl:'.new_swiper ~ .swiper-button-next',
    },
    breakpoints:{
        320:{
            slidesPerView:2,
        },
        721:{
            slidesPerView:4,
        },
    }
})
const weekSwiper = new Swiper('.week_swiper', { 
    slidesPerView:5,
    spaceBetween:42.5,
    autoplay:{delay:1500},
    loop:true,
    pagination:{
        el:'.week_swiper + .swiper-pagination',
        type:'progressbar',
    }
})
const trandSwiper = new Swiper('.trand_swiper', { 
    slidesPerView:3,
    spaceBetween:50,
    loop:true,
    pagination:{
        el:'.trand_swiper + .swiper-pagination',
        type:'fraction',
    },
    navigation:{
        prevEl:'.trand_list .swiper-button-prev',
        nextEl:'.trand_list .swiper-button-next',
    },
})