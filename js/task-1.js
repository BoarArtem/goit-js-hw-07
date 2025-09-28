const liItems = document.querySelectorAll(".item")
const sumLiItems = liItems.length
console.log("Number of categories:", sumLiItems)

liItems.forEach((item) => {
    const liTitle = item.querySelector("h2").textContent;
    const liTitleItem = item.querySelectorAll("ul li").length

    console.log("Category:", liTitle);
    console.log("Element:", liTitleItem)
})
