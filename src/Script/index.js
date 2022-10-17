window.addEventListener("load", function () {
//    window.scrollTo({left:0, top:0, behavior:"smooth"} )

    //==================
    // 해쉬태크 복사
    //==================
    let hashtagCopy=document.querySelector("button[name='hashTag']");
    hashtagCopy.addEventListener("click", function copyTap(){
        let tag=`#크니쁘니와친구들그림공모전참여인증\n#크니쁘니와친구들그림공모전\n#크니쁘니#오가닉#유기농주스#유기농과일워터 `;
        //navigator.clipboardAPI 사용
        navigator.clipboard.writeText(tag)
    .then( () => {
            console.log("복사성공");
        });
    });
    //----제이쿼리버전-----
    // var clipboard = new ClipboardJS('.hashtag_copy');
    // clipboard.on('success', function(e) { 
    //    alert('복사되었습니다.'); 
    // });


    //=================
    //  카카오톡친추
    //=================
    Kakao.init('c089c8172def97eb00c07217cae17495');
    console.log(Kakao.isInitialized()); //접근은 가능한데(true), addChannel 실행이 안된다
    function addChannel() {
        console.log("확인");
        Kakao.Channel.addChannel({
        channelPublicId: '_XMpUj',
        });
    }

    //form(get)으로 보낸 값을 확인하는 URLSearchParams() 사용 
    const searchParams = new URLSearchParams(location.search);
    for (const param of searchParams) {
        console.log(param);
    }

});