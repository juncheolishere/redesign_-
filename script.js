const start = document.getElementById("start");
// 시작애니메이션 (화면 생성)
setTimeout(()=>{
    start.children[0].style.transition = "0.5s";
    start.children[0].style.transform = "translateY(100%)";
},250)
setTimeout(()=>{
    start.children[1].style.transition = "0.5s";
    start.children[1].style.transform = "translateY(100%)";
},500)
setTimeout(()=>{
    start.children[2].style.transition = "0.5s";
    start.children[2].style.transform = "translateY(100%)";
},750)
setTimeout(()=>{
    start.parentNode.removeChild(start)
},1250)

const mainSection = document.getElementById("mainSection");


const showAnimation = () => {
    const sum = mainSection.children[0].children[0].children.length + 1;
    for (let i = 0; i < sum ; i ++)
    {
        if (i == sum-1)
        {
            setTimeout(()=>{
                mainSection.children[0].children[1].children[0].children[1].style.transform = "translateX(0%)";
            },1250+250*i)
            setTimeout(()=>{
                mainSection.children[0].children[1].children[0].children[0].style.visibility = "visible";
            },1250+250*i+500)
            setTimeout(()=>{
                mainSection.children[0].children[1].children[0].children[1].style.transform = "translateX(105%)";
            },1250+250*sum+500*i)
            setTimeout(()=>{
                mainSection.children[1].style.transform = "translateX(0%)";
            },1250+250*i)
        }
        else
        {
            setTimeout(()=>{
                mainSection.children[0].children[0].children[i].children[1].style.transform = "translateX(0%)";
            },1250+250*i)
            setTimeout(()=>{
                mainSection.children[0].children[0].children[i].children[0].style.visibility = "visible";
            },1250+250*i+500)
            setTimeout(()=>{
                mainSection.children[0].children[0].children[i].children[1].style.transform = "translateX(105%)";
            },1250+250*sum+500*i)
        }

        
    }

}
showAnimation();

(function() {
    const level1 = document.getElementById("level1");
    const borderBottom = 1;
    const level1H = parseFloat(getComputedStyle(level1).height.split("p")[0])
                    + parseFloat(getComputedStyle(level1).paddingTop.split("p")[0])
                    + parseFloat(getComputedStyle(level1).paddingBottom.split("p")[0])
                    + borderBottom;
    const movingSpan = document.getElementsByClassName("movingSpan");
    // 컨트롤러 선언
    let controller = new ScrollMagic.Controller(
        {
            globalSceneOptions: {
                duration: level1H*1+"px"
        }}
    );

    // 씬 선언
    let scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
                    .addTo(controller)
                    .on("progress", function (e) {
                        movingSpan[0].style.transform = "translateX("+(100-e.progress.toFixed(3)*100)+"%)"
                    });
    let scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
                    .addTo(controller)
                    .on("progress", function (e) {
                        movingSpan[1].style.transform = "translateX("+(100-e.progress.toFixed(3)*100)+"%)"
                    });
    let scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3"})
                    .addTo(controller)
                    .on("progress", function (e) {
                        movingSpan[2].style.transform = "translateX("+(100-e.progress.toFixed(3)*100)+"%)"
                        if (e.progress.toFixed(3) == 1)
                        {
                            document.getElementById("leehee").style.opacity="1";
                            document.getElementById("leehee").style.transform="translateY(0%)";
                        }
                        else
                        {
                            document.getElementById("leehee").style.opacity="0";
                            document.getElementById("leehee").style.transform="translateY(100%)";
                        }
                    });
}())

