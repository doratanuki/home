$.scrollify({
    section : ".scrollify",//1ページスクロールさせたいエリアクラス名
    interstitialSection: ".first-screen,footer",
    standardScrollElements : ".about",
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 500, // スクロール時の速度
    offset: 0
});

