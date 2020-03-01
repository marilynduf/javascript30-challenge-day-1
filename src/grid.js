function resizeGridItem(item){
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
    allItems = document.getElementsByClassName("day");
    for(i = 0; i < allItems.length; i++){
        resizeGridItem(allItems[i]);
    }
}

function resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
}

window.onload = resizeAllGridItems(); //rafraîchie la grille on load
window.addEventListener("resize", resizeAllGridItems); //rafraîchie la grille quand window est resize


