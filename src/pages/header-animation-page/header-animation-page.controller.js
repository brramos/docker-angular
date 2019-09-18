function HeaderAnimationController() {
    var demos = [];
    var cloudsuit = {
        one : {
            bg: "http://caraujo_pens.surge.sh/images/ZnkfwAR.jpg",
            bm: "none"
        },
        two : {
            bg: "http://caraujo_pens.surge.sh/images/ONBXKkS.jpg",
            bm: "lighten"
        },
        three : {
            bg: "http://caraujo_pens.surge.sh/images/qKNpn9G.png",
            bm: "multiply"
        }
    };
    demos.push(cloudsuit);

    var urbansky = {
        one : {
            bg: "http://caraujo_pens.surge.sh/images/l1MS7kk.jpg",
            bm: "none"
        },
        two : {
            bg: "http://caraujo_pens.surge.sh/images/6QBLNy6.jpg",
            bm: "multiply"
        },
        three : {
            bg: "http://caraujo_pens.surge.sh/images/bmnzJRs.png",
            bm: "none"
        }
    };
    demos.push(urbansky);

    var knowledge = {
        one : {
            bg: "http://caraujo_pens.surge.sh/images/YpTSfYD.jpg",
            bm: "none"
        },
        two : {
            bg: "http://caraujo_pens.surge.sh/images/ziAdjNM.jpg",
            bm: "multiply"
        },
        three : {
            bg: "http://caraujo_pens.surge.sh/images/dnfONso.png",
            bm: "none"
        }
    };
    demos.push(knowledge);

    var container = document.getElementById("container");
    var active;
    var applyDemo = function(number){
        var go = demos[number-1];
        container.innerHTML = "";
        var f1 = document.createElement("div");
        f1.setAttribute("id", "f1");
        var style = "background-image: url(" + go.one.bg + "); mix-blend-mode: " + go.one.bm + ";";
        f1.setAttribute("style", style);
        container.appendChild(f1);

        var f2 = document.createElement("div");
        f2.setAttribute("id", "f2");
        var style = "background-image: url(" + go.two.bg + "); mix-blend-mode: " + go.two.bm + ";";
        f2.setAttribute("style", style);
        container.appendChild(f2);

        var f3 = document.createElement("div");
        f3.setAttribute("id", "f3");
        var style = "background-image: url(" + go.three.bg + "); mix-blend-mode: " + go.three.bm + ";";
        f3.setAttribute("style", style);
        container.appendChild(f3);
        active = number;

        var headerAnimation = document.querySelector('.header-animation');
        headerAnimation.setAttribute("data-demo", number);
    };
    applyDemo(1);

    // $('.demos').on('click', 'a', function(event) {
    //     event.preventDefault();
    //     var t = this;
    //
    //     if(active == t.getAttribute("data-go")) return;
    //
    //     $(container).fadeOut({
    //         duration: 1000,
    //         complete: function(){
    //             applyDemo(t.getAttribute("data-go"));
    //             $(container).fadeIn(1000);
    //         }
    //     });
    // });
}

module.exports = [HeaderAnimationController];