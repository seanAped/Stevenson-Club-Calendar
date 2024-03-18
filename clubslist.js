var clubs = [
    {
        name: "Club 1",
        info: "Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.Information about Club 1.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhggqngUOrWqA7Cf2P1-WQaVdLGrhmEkLeMw&usqp=CAU",
        clubHref: "https://www.d125.org/"
    },
    {
        name: "Club 2",
        info: "Information about Club 2.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhggqngUOrWqA7Cf2P1-WQaVdLGrhmEkLeMw&usqp=CAU",
        clubHref: "https://www.d125.org/"
    },
    {
        name: "Club 3",
        info: "Information about Club 3.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhggqngUOrWqA7Cf2P1-WQaVdLGrhmEkLeMw&usqp=CAU",
        clubHref: "https://www.d125.org/"
    },
    {
        name: "Club 1",
        info: "Information about Club 1.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhggqngUOrWqA7Cf2P1-WQaVdLGrhmEkLeMw&usqp=CAU",
        clubHref: "https://www.d125.org/"
    },
    {
        name: "Club 2",
        info: "Information about Club 2.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhggqngUOrWqA7Cf2P1-WQaVdLGrhmEkLeMw&usqp=CAU",
        clubHref: "https://www.d125.org/"
    },
    {
        name: "Club 3",
        info: "Information about Club 3.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhggqngUOrWqA7Cf2P1-WQaVdLGrhmEkLeMw&usqp=CAU",
        clubHref: "https://www.d125.org/"
    },
];

var clubsListContainer = document.querySelector('.clubsListContainer');

function displayAllClubs() {
    clubsListContainer.innerHTML = '';

    clubs.forEach(function (club) {
        var clubBox = document.createElement("div");
        clubBox.className = "clubBox";

        var title = document.createElement("h3");
        title.textContent = club.name;

        var img = document.createElement("img");
        img.src = club.img;
        img.alt = club.name + " Image";
        img.className = "clubImage";

        var infoParagraph = document.createElement("p");
        infoParagraph.textContent = club.info;

        var clubLink = document.createElement("a");
        clubLink.href = club.clubHref;
        clubLink.target = "_blank";
        clubLink.appendChild(clubBox);

        clubBox.appendChild(img);
        clubBox.appendChild(title);
        clubBox.appendChild(infoParagraph);

        clubsListContainer.appendChild(clubLink);
    });
}

displayAllClubs();

function searchAndShowClub(clubName) {
    if (clubName.trim() === "") {
        displayAllClubs();
        return;
    }

    clubsListContainer.innerHTML = '';

    clubs.forEach(function (club) {
        if (club.name.toLowerCase().includes(clubName.toLowerCase())) {
            var clubBox = document.createElement("div");
            clubBox.className = "clubBox";

            var title = document.createElement("h3");
            var titleText = club.name;
            var index = titleText.toLowerCase().indexOf(clubName.toLowerCase());

            if (index !== -1) {
                var matchingPart = titleText.substring(index, index + clubName.length);
                var remainingPart = titleText.substring(index + clubName.length);

                title.innerHTML = titleText.substring(0, index) + "<span style='color: red; font-weight: bold;'>" + matchingPart + "</span>" + remainingPart;
            } else {
                title.textContent = club.name;
            }

            var img = document.createElement("img");
            img.src = club.img;
            img.alt = club.name + " Image";
            img.className = "clubImage";

            var infoParagraph = document.createElement("p");
            infoParagraph.textContent = club.info;

            var clubLink = document.createElement("a");
            clubLink.href = club.clubHref;
            clubLink.target = "_blank";
            clubLink.appendChild(clubBox);

            clubBox.appendChild(img);
            clubBox.appendChild(title);
            clubBox.appendChild(infoParagraph);

            clubsListContainer.appendChild(clubLink);
        }
    });
}

var clubSearchInput = document.getElementById("clubSearchInput");

clubSearchInput.addEventListener("input", function () {
    var clubSearchInputValue = clubSearchInput.value;
    searchAndShowClub(clubSearchInputValue);
});