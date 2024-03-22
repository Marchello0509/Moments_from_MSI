import axios from "axios"

const mainEl = {
    btnAdd: document.querySelector('#btnAdd'),
    modal: document.querySelector('#modal'),
    btnClose: document.querySelector('#btnClose'),
    btnAddImg: document.querySelector('#btnAddImg'),
    btnPost: document.querySelector('#btnPost'),
    comText: document.querySelector('#comText'),
    inputText: document.querySelector('#inputText'),
    blockPost: document.querySelector('#blockPost'),
}

console.log(mainEl)

const token = localStorage.getItem("userToken")

let postArr = []

const renderCom = (arr) => {
    axios
    .get(`http://localhost:4000/posts/list?token=${token}`)
    .then((res) => {
        mainEl.blockPost.innerHTML = ''
        res.data.forEach((item) => {
            mainEl.blockPost.innerHTML += `
                <div idPost = "${item.id}" class="main_block2_forpost_forms">
                    <div class="main_block2_forpost_forms_ms">
                        <div class="main_block2_forpost_forms_ms_user">
                            <img src="./src/img/download 2.png" alt="userlogo">
                            <p id="userName" class="main_block2_forpost_forms_ms_user_nickname">UserName</p>
                        </div>
                        <div class="main_block2_forpost_forms_ms_forcom">
                            <div class="main_block2_forpost_forms_ms_forcom_com">
                                <p id="comText" class="main_block2_forpost_forms_ms_forcom_com_text">${item.text}</p>
                            </div>
                        </div>
                        <div class="main_block2_forpost_forms_ms_forlikes">
                            <div class="main_block2_forpost_forms_ms_forlikes_likes">
                                <p id="disText" class="main_block2_forpost_forms_ms_forlikes_likes_dislp">${item.count}</p>
                                <button idPost = "${item.id}" id="disBtn" class="main_block2_forpost_forms_ms_forlikes_likes_dislbtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4.00008 1.99999L10.6667 1.99999L10.6667 10.6667L6.00008 15.3333L5.16675 14.5C5.08897 14.4222 5.02508 14.3167 4.97508 14.1833C4.92508 14.05 4.90008 13.9222 4.90008 13.8L4.90008 13.5667L5.63341 10.6667L2.00008 10.6667C1.64453 10.6667 1.33342 10.5333 1.06675 10.2667C0.800082 10 0.666749 9.68888 0.666748 9.33333L0.666748 8C0.666748 7.92222 0.675082 7.83888 0.691748 7.75C0.708415 7.66111 0.733415 7.57777 0.766748 7.5L2.76675 2.79999C2.86675 2.57777 3.03341 2.38888 3.26675 2.23333C3.50008 2.07777 3.74453 1.99999 4.00008 1.99999ZM12.0001 10.6667L12.0001 1.99999L14.6667 1.99999L14.6667 10.6667L12.0001 10.6667Z" fill="#6F0808"/>
                                    </svg>
                                </button>
                                <p id="plusText" class="main_block2_forpost_forms_ms_forlikes_likes_likep">${item.pluscount}</p>
                                <button idPost = "${item.id}" id="plusBtn" class="main_block2_forpost_forms_ms_forlikes_likes_likebtn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                        <path d="M11.25 13.125H5V5L9.375 0.625L10.1562 1.40625C10.2292 1.47917 10.2891 1.57812 10.3359 1.70312C10.3828 1.82812 10.4062 1.94792 10.4062 2.0625V2.28125L9.71875 5H13.125C13.4583 5 13.75 5.125 14 5.375C14.25 5.625 14.375 5.91667 14.375 6.25V7.5C14.375 7.57292 14.3672 7.65104 14.3516 7.73438C14.3359 7.81771 14.3125 7.89583 14.2812 7.96875L12.4062 12.375C12.3125 12.5833 12.1562 12.7604 11.9375 12.9062C11.7188 13.0521 11.4896 13.125 11.25 13.125ZM3.75 5V13.125H1.25V5H3.75Z" fill="#00482E"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
            `    
        })
        const disBtn = document.querySelectorAll('#disBtn')
        const plusBtn = document.querySelectorAll('#plusBtn')
        disBtn.forEach(btnDis => {
            btnDis.addEventListener("click", () => {
                const idCandidate = btnDis.getAttribute("idPost")
                const newList = postArr.map(mapItem => {
                    if (mapItem.id == idCandidate) {
                        mapItem.count -= 1
                    }
                    return mapItem
                })
                renderCom(newList)
            })
        })
        plusBtn.forEach(plusBtn => {
            plusBtn.addEventListener("click", ( )=> {
                const idCandidate = plusBtn.getAttribute("idPost")
                const newList = postArr.map(mapItem => {
                    if (mapItem.id == idCandidate) {
                        mapItem.pluscount += 1
                    }
                    return mapItem
                })
                renderCom(newList)
            })
        })
    })
}

mainEl.btnAdd.addEventListener('click', () => {
    mainEl.modal.style.display = "flex"
})

mainEl.btnClose.addEventListener('click', () => {
    mainEl.modal.style.display = "none"
})

mainEl.btnAddImg.addEventListener('click', () => {
    alert('Coming soon')
})

const renderPost = () => {
    const cPost = {
        cText: mainEl.inputText,
        cLikes: {
            cDis: document.querySelectorAll("#disText"),
            cPlus: document.querySelectorAll("#plusText")
        }
    }
    const likesData = {
        likesCount: cPost.cLikes.cPlus.length,
        dislikesCount: cPost.cLikes.cDis.length
    }
    axios.post(`http://localhost:4000/posts/create`, {
        token: localStorage.getItem("userToken"),
        text: cPost.cText,
        likes: likesData 
    })
    .then((res) => {
        console.log(res.data)
        renderCom()
    })
}

mainEl.btnPost.addEventListener('click', () => {
    renderPost()
    // mainEl.inputText.value = ""
    // renderCom(postArr)
})