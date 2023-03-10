// js 기능 (jquery 구현)
// 1. banner 스와이퍼 (pc = 2개, 1200이하 = 1개) 
// 2. top-btn 클릭시 상단이동 x
// 3. 돋보기 아이콘 클릭시 검색창 생기면서 sub-menu 열림 x
// 4. scroll event haed 컬러 변경 x

const header = $(".header");
const topBtn = $(".top-btn");
const search = $(".search");
const searchBox = $(".search-box");
const xBtn = $(".x-btn");
const searchInput = $(".search-input");
const mHamBtn = $(".ham-btn");
const mMenu = $(".m-menu-box");
const MfooterBtnBox = $(".f-head-box");
const MfooterBtn = $(".f-head-box span");
const MfooterContent = $("contants"); 

$(window).on("scroll",()=>{
    const wt = $(window).scrollTop();
    const sec1ScrollTop = $(".sec-1").offset().top

    // >=에서 부등호는 항상 같다의 왼쪽에 위치해있어야함
    if(wt >= sec1ScrollTop){
        // 헤드태그 안에있는 아이들 색상변경 + 탑버튼 나타나게 함
        header.addClass("color");
        topBtn.fadeIn()
    }else{
        header.removeClass("color");
        topBtn.fadeOut()
    }
    
});

topBtn.on("click",()=>{
    $("html, body").animate({scrollTop : 0}, 300);
});

search.on("click",()=>{
    header.fadeOut()
    setTimeout(()=>{
        searchBox.fadeIn();
    },500);
    setTimeout(()=>{
        searchInput.addClass("action");
    },700);
    
});

xBtn.on("click",()=>{
    header.fadeIn();
    searchBox.fadeOut();
    searchInput.removeClass("action");
});

const swp = ()=>{
    var swiper1 = new Swiper(".swiper-left", {
        autoplay : {
            delay:3500,
            disableOnInteraction: false
        },
        slidesPerView : 1,
        slidesPerGroup : 1,
        loop: true,
    
        //스와이퍼 터치 막아주는 속성api
        allowTouchMove:false,
        direction: "vertical"
    });
    
    var swiper2 = new Swiper(".swiper-right", {
        autoplay : {
            delay:3500,
            disableOnInteraction: false
        },
        slidesPerView : 1,
        slidesPerGroup : 1,
        loop: true,
        allowTouchMove:false,
    });
}

  mHamBtn.on("click",()=>{
    mHamBtn.toggleClass("on");
    mMenu.toggleClass("active");
});

MfooterBtnBox.on("click",(e)=>{
    $(e.target.children[1]).toggleClass("rotate");
    $(e.target).siblings(".contants").slideToggle();
    
});

swp();