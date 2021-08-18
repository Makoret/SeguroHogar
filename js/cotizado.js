setTimeout(function () {
    (keys = Object.keys(localStorage)), (i = keys.length);
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i)) {
            localStorage.key;
            console.log($(".grid-item").index(i));
        }
    }

    for (const key in localStorage) {
        if (Object.hasOwnProperty.call(localStorage, key)) {
            // const element = localStorage[key];
            // $(".grid-item").index(key.toggleClass("grid-item-selected"));
            console.log(typeof document.querySelectorAll(".grid-item")[key]);
            document.querySelectorAll(".grid-item")[key].className += " grid-item-selected";
        }
    }

    var images = [
        `seguro_img_1.jpg`,
        `seguro_img_2.jpg`,
        `seguro_img_3.jpg`,
        `seguro_img_4.jpg`,
        `seguro_img_5.jpg`,
        `seguro_img_6.jpg`,
        `seguro_img_7.jpg`,
        `seguro_img_8.jpg`,
        `seguro_img_9.jpg`,
        `seguro_img_10.jpg`,
        `seguro_img_11.jpg`,
        `seguro_img_12.jpg`,
    ];

    refreshData();

    $(".reset").on("click", function () {
        localStorage.clear();
        $(".grid-item").removeClass("grid-item-selected");
        refreshData();
    });

    $(".save").on("click", function () {
        let dataToSend = $("#cost").text();
        console.log(`${user}`);
        console.log(`${dataToSend}`);
        $("body").load("send.html");
        localStorage.clear();
        setTimeout(function () {
            $("span").append(`El costo total seria ${dataToSend}.\n Gracias por tu compra ${user}!`);
            $(".aceptar").on("click", function (params) {
                window.location.reload();
            });
        }, 500);
    });

    $(".grid-item").click(function (e) {
        e.preventDefault();
        let index = $(".grid-item").index(this);
        console.log($(this).children($(".subtitulo")).children($("h4")).children($("span")).text());
        $(this).toggleClass("grid-item-selected");
        if (this.classList.contains("grid-item-selected")) {
            localStorage.setItem(
                `${index}`,
                `${$(this).children($(".subtitulo")).children($("h4")).children($("span")).text()}`
            );
        } else {
            localStorage.removeItem(`${index}`);
        }
        refreshData();
    });
    $(".grid-item").hover(
        function imageChanger() {
            console.log($(".image-container").text());
            $(".image-container").html(`
            <img src="images\\${images[$(".grid-item").index(this)]}">`);
        },
        function e() {
            $(".image-container").html(`
            <img src="images\\seguro_hogar.jpg">`);
        }
    );

    function refreshData() {
        $("#cost").text(0);
        let newVal = 0;
        Object.keys(localStorage).forEach((key) => {
            newVal += parseInt(localStorage.getItem(key));
        });
        $("#cost").text(newVal);
    }
}, 400);
