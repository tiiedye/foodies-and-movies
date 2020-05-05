//AJAX call by name
$(".foodBtn").on("click", function() {
    var name = $(".foodInput").val();
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response); 
    })
})

//AJAX call by category
$(".dropdown-item").on("click", function() {
    var category = $(this).attr("data-name");
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);

        // Results shown here
        var results = response.meals;
        $("#foodResults").empty();
        var ul = $("<ul>").addClass("mealList list-group");

        for (i=0; i<results.length; i++) {
            //area for food item - if clicked, popup recipe
            var li = $("<li>").addClass("mealItem list-group-item flex-fill");
            //append image
            var mealImg = $("<img>");
            mealImg.attr("src", results[i].strMealThumb);
            mealImg.attr("id", "listImage");
            li.append(mealImg);
            //append name
            var mealName = $("<div>").addClass("mealName");
            mealName.text(results[i].strMeal);
            mealName.attr("id", results[i].idMeal);
            li.append(mealName);
            
            ul.append(li);
        }

        //Rows of items with 2 columns each
        // for (i=0; i<results.length/2; i++) {
        //     var ul = $("<ul>").addClass("mealList list-group list-group-horizontal");
        //     for (j=0; j<2; j++) {
        //         var li = $("<li>").addClass("mealItem list-group-item flex-fill");
        //         //append image
        //         var mealImg = $("<img>");
        //         mealImg.attr("src", results[i].strMealThumb);
        //         mealImg.attr("id", "listImage");
        //         li.append(mealImg);
        //         //append name
        //         var mealName = $("<div>").addClass("mealName");
        //         mealName.text(results[i].strMeal);
        //         mealName.attr("id", results[i].idMeal);
        //         li.append(mealName);
        //     }
        //     ul.append(li);
        // }

        $("#foodResults").append(ul);

    })
    
    $(".mealItem").on("click", function() {
        console.log("click");
        var id = $(this).attr("id");
        var queryURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(queryURL);
            console.log(response);
            //modal pop-up here
        })
    })
})



