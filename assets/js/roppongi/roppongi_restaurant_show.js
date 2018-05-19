var restaurant = restaurant || {};
restaurant.pickFlg = false;

function pickRandomRestaurant() {
    if(!restaurant.pickFlg) return false;
    var list = restaurant.arr;
    var random = list[parseInt(Math.random() * list.length)];
    $(".js-random-name").text(random.name);
    $(".js-random-address").text(random.address);
    $(".js-random-btn").data("src", random.tabelogImg)
                       .data("url", random.tabelogUrl);
    setTimeout("pickRandomRestaurant()", 50);
}

function showRestaurantList() {
    if($(".js-list-wrap").html().trim()) return false;
    var content = $("#list-item")[0].content,
        link = $(".js-item-link", content),
        img = $(".js-item-img", content),
        name = $(".js-item-name", content),
        fragment = document.createDocumentFragment();
    restaurant.arr.forEach(function(data) {
        link.attr("href", data.tabelogUrl);
        img.css("background-image", "url(" + data.tabelogImg + ")");
        name.text(data.name);
        var clone = document.importNode(content, true);
        fragment.appendChild(clone);
    });
    $(".js-list-wrap").append(fragment);
}

$(function(){
    restaurant.pickFlg = true;
    pickRandomRestaurant();

    $(".js-random-btn").on("click", function(){
        if(restaurant.pickFlg) {
            restaurant.pickFlg = false;
            $(this).text("Try Again");
            $(".js-random-link").attr("href", $(this).data("url"));
            $(".js-random-photo").show().attr("src", $(this).data("src"));
        }
        else {
            restaurant.pickFlg = true;
            $(this).text("STOP");
            $(".js-random-photo").hide().attr("src", "");
            pickRandomRestaurant();
        }
    });

    $(".js-random-tab").on("click", function(){
        if($(this).hasClass("chosen-tab")) return false;
        $(this).addClass("chosen-tab");
        $(".js-list-tab").removeClass("chosen-tab");

        $(".js-list-wrap").hide();
        $(".js-random-wrap").show();

        restaurant.pickFlg = true;
        pickRandomRestaurant();
    })

    $(".js-list-tab").on("click", function(){
        if($(this).hasClass("chosen-tab")) return false;
        $(this).addClass("chosen-tab");
        $(".js-random-tab").removeClass("chosen-tab");
 
        restaurant.pickFlg = false; 
        $(".js-random-btn").text("STOP");
        $(".js-random-photo").hide().attr("src", "");

        showRestaurantList();
        $(".js-random-wrap").hide();
        $(".js-list-wrap").show();
    })
});



