document.addEventListener("DOMContentLoaded", function(e){
   let configId = document.querySelector("#id i") //아이디 옆에 톱니 아이콘
   let idText = document.querySelector("#id span") //아이디 텍스트필드(span)

    configId.addEventListener("click", function(e){
        idText.textContent = prompt("아이디을 입력해 주세요")
    })
    
   let profileEditButton = document.querySelector("#profile_info button") // 프로필 편집 버튼 (버튼)
   let userInfo = document.querySelector("#userInfo") // 이름 적는 strong
   let summary = document.querySelector("#summary") // 직업 적는 span
   let profileDetail = document.querySelector("#profileDetail") // 외부 링크가 담긴 p
    let changed = false


    //프로필 정보 수정
    profileEditButton.addEventListener("click", function(e){
        if(changed) {
            let _userInfo = userInfo.querySelector("input").value
            let _summary = summary.querySelector("input").value
            let _profileDetail = profileDetail.querySelector("input").value
            let changed = false

            userInfo.innerHTML = _userInfo
            summary.innerHTML = _summary

            if(_profileDetail.startsWith("https")) {
                profileDetail.innerHTML = "<a href=" + _profileDetail + ">" + _profileDetail + "</a>"
            }

            e.target.textContent = "프로필 편집"
            changed = false



        }
        else {
            let _userInfo = userInfo.textContent
            let _summary = summary.textContent
            let _profileDetail = profileDetail.textContent

            userInfo.innerHTML = "<input value=" + _userInfo + "></input>"
            summary.innerHTML = "<input value=" + _summary + "></input>"
            profileDetail.innerHTML = "<input value=" + _profileDetail + "></input>"

            e.target.textContent = "프로필 편집 완료"
            changed = true
        }
    })

    let profile_pic = document.querySelector("#profile_pic .circle_pic") // 프로필 이미지(img) 
    profile_pic.addEventListener("mouseover", function(e){
        e.target.style.filter = "grayscale(50%)"
    }) 

    profile_pic.addEventListener("mouseleave", function(e){
        e.target.style.filter = "grayscale(0%)"
    }) 

    profile_pic.addEventListener("click", function(e){
        e.target.setAttribute("src", prompt("url 입력"))
    })

})