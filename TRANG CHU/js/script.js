
document.querySelector("#next").onclick = function () {
    let lists = document.querySelectorAll('.item');
    for(let i=0;i<lists.length;i++){
        console.log(lists[i].querySelector("img").getAttribute("src"));
    }
    console.log("----------------")
    // console.log(lists[0]);
    document.getElementById('slide').appendChild(lists[0]); 
    for(let i=0;i<lists.length;i++){
        console.log(lists[i].querySelector("img").getAttribute("src"));
    }
    console.log("----------------")
};

document.querySelector("#prev").onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length-1]); // prepend đưa phần tử cuối lên đầu
};

document.querySelectorAll('.item').forEach((item) => {
    item.onclick = function() {
        let lists = document.querySelectorAll('.item'); // Lấy danh sách tất cả item
        let slide = document.getElementById('slide');
        let clickedIndex = Array.from(lists).indexOf(this); // Xác định vị trí của ảnh được click

        console.log("Ảnh được click là item thứ:", clickedIndex + 1);
        slide.appendChild(lists[clickedIndex-1]);

    };
});




