$(function () {
    // 🔄 화면 리사이즈 시 #front 높이 맞추기
    function resizeFront() {
        var h = $(window).height();
        // $("#front").height(h);
    }

    $(window).on("resize", resizeFront);
    resizeFront();

    // ⬇️ 아래로 스크롤 버튼 (#click_arr 클릭 시 #contents로 이동)
    $("#front #click_arr").on("click", function () {
        const conTop = $("#contents").offset().top;
        $("html, body").stop().animate({ scrollTop: conTop }, 600, "easeOutQuad");
    });

    // 🌀 스무스 휠 효과 적용
    $("html, body").smoothWheel();
});
