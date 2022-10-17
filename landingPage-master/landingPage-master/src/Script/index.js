window.addEventListener("load", function(){
//    window.scrollTo({left:0, top:0, behavior:"smooth"} )
    function check() {
        console.log("check");
    }
    //==================
    // 유효성 검사
    //==================
    let name=document.querySelector("input[name='name']");    
    let email=document.querySelector("input[name='email']");
    let gender=document.querySelector("input[name='gender']");
    let age=document.querySelector("input[name='age']");
    let phone=document.querySelector("input[name='phone']");
    let url=document.querySelector("input[name='url']");
    // 이메일 정규식
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    //숫자 정규표현식
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/


    function submitCheck() {
        if(name.value===null){
            alert("이름을 입력해주세요");
            name.focus();
            return false;
        }
        if(email.value===null){
            alert("이름을 입력해주세요");
            email.focus();
            return false;
        }else if(email.match(regExp)!=null){
            console.log("정규식표현 확인");
            email.focus();
        }else{
            console.log("바른형식의 이메일을 적어주세요");
            return false;
        }
        if(gender.value===null){
            alert("성별을 선택해주세요");
            gender.focus();
            return false;
        }
        if(age.value===null){
            alert("나이를 선택해주세요");
            age.focus();
            return false;
        }
        if(phone.value===null){
            alert("번호를 입력해주세요");
            phone.focus();
            return false;
        }if(url===null){
            alert("주소를 적어주세요")
        }

    } 

    //====================
    // 전화번호 자동 - 세팅(왜 안되지???)
    //====================
    const autoHyphen2 = (target) => {
        target.value = target.value
          .replace(/[^0-9]/g, '')
         .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
       }

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
    // Kakao.init('c089c8172def97eb00c07217cae17495');
    // console.log(Kakao.isInitialized()); //접근은 가능한데(true), addChannel 실행이 안된다
    // function addChannel() {
    //     console.log("확인");
    //     Kakao.Channel.addChannel({
    //     channelPublicId: '_XMpUj',
    //     });
    // }

    //form(get)으로 보낸 값을 확인하는 URLSearchParams() 사용 
    // const searchParams = new URLSearchParams(location.search);
    // for (const param of searchParams) {
    //     console.log(param);
    // }

});