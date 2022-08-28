function shrink(){
    document.querySelector(".right-arrow").click();
    document.querySelector(".left-arrow").click();
    document.querySelector(".pagination-dot.active").click();
}
function slides() {
    window.addEventListener("resize", function(event){
        if(window.innerWidth < 814 && window.category_item_per_page != category_item_per_page_mobile){
            window.category_item_per_page = category_item_per_page_mobile;
            shrink();
        }
            
        if(window.innerWidth > 815 && window.innerWidth < 1199 && window.category_item_per_page != category_item_per_page_tablet){
            window.category_item_per_page = category_item_per_page_tablet;
            shrink();
        }
            
        if(window.innerWidth > 1200 && window.category_item_per_page != category_item_per_page_desktop){
            window.category_item_per_page = category_item_per_page_desktop;
            shrink();
        }
    });
    const brandItems = [
        {
            "image" : "src/static/brands/1.svg",
            "alt": "1"
        },
        {
            "image" : "src/static/brands/2.svg",
            "alt": "2"
        },
        {
            "image" : "src/static/brands/3.svg",
            "alt": "3"
        },
        {
            "image" : "src/static/brands/4.svg",
            "alt": "4"
        },
        {
            "image" : "src/static/brands/5.svg",
            "alt": "5"
        },
        {
            "image" : "src/static/brands/6.svg",
            "alt": "6"
        },
    ];
    const categoryItems = [
        {
            "backgroundImage" : "src/static/categorySlide/1.png",
            "backgroundAlt" : "1. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/1.jpg",
            "thumbAlt" : "1. Category Thumb Image",
            "content" : "Chubbicorns"
        },
        {
            "backgroundImage" : "src/static/categorySlide/2.jpg",
            "backgroundAlt" : "2. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/2.jpg",
            "thumbAlt" : "2. Category Thumb Image",
            "content" : "Grifters by XCOPY"
        },
        {
            "backgroundImage" : "src/static/categorySlide/3.jpg",
            "backgroundAlt" : "3. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/3.gif",
            "thumbAlt" : "3. Category Thumb Image",
            "content" : "Chubbiverse Frens"
        },
        {
            "backgroundImage" : "src/static/categorySlide/4.png",
            "backgroundAlt" : "4. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/4.png",
            "thumbAlt" : "4. Category Thumb Image",
            "content" : "Turtles"
        },
        {
            "backgroundImage" : "src/static/categorySlide/5.avif",
            "backgroundAlt" : "5. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/5.avif",
            "thumbAlt" : "5. Category Thumb Image",
            "content" : "Isekai Meta"
        },
        {
            "backgroundImage" : "src/static/categorySlide/6.png",
            "backgroundAlt" : "6. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/6.png",
            "thumbAlt" : "6. Category Thumb Image",
            "content" : "Subscapes by Matt Deslaurier"
        },
        {
            "backgroundImage" : "src/static/categorySlide/7.avif",
            "backgroundAlt" : "7. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/7.avif",
            "thumbAlt" : "7. Category Thumb Image",
            "content" : "Prime Ape Planet PAP"
        },
        {
            "backgroundImage" : "src/static/categorySlide/8.png",
            "backgroundAlt" : "8. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/8.png",
            "thumbAlt" : "8. Category Thumb Image",
            "content" : "merge."
        },
        {
            "backgroundImage" : "src/static/categorySlide/9.jpg",
            "backgroundAlt" : "9. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/9.png",
            "thumbAlt" : "9. Category Thumb Image",
            "content" : "Sappy Seals"
        },
        {
            "backgroundImage" : "src/static/categorySlide/10.png",
            "backgroundAlt" : "10. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/10.png",
            "thumbAlt" : "10. Category Thumb Image",
            "content" : "Kanpai Pandas"
        },
        {
            "backgroundImage" : "src/static/categorySlide/11.jpg",
            "backgroundAlt" : "11. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/11.gif",
            "thumbAlt" : "11. Category Thumb Image",
            "content" : "Elemental by Fang Lijun"
        },
        {
            "backgroundImage" : "src/static/categorySlide/12.jpg",
            "backgroundAlt" : "12. Category Background",
            "thumbImage" : "src/static/categorySlide/thumb/12.png",
            "thumbAlt" : "12. Category Thumb Image",
            "content" : "Lil Pudgys"
        }
    ];
    function autoplayBrandFunc(){
        let j = 0;
        if(brandItems.length - item_per_page <= actives){
            while(j < brandItems.length){
                brandList.children[j].style = 'width: '+brandLeft+'%; margin-left: '+(j*brandLeft )+'%;';
                j++;
            }
            actives = 0;
        }else{
            while(j < brandItems.length){
                let marginlleft = parseFloat(brandList.children[j].style.marginLeft.split("px")[0]) - brandLeft;
                brandList.children[j].style = 'width: '+brandLeft+'%; margin-left: '+marginlleft+'%;';
                j++;
            }
            actives++;
        }
    }
    class Slide{
        constructor(element, options){
            if(options["type"] == "brand"){
                window.brandList = document.querySelector(element);
                let i = 0;
                window.actives = 0;
                window.brandLeft = 100 / options["item_per_page"];
                window.item_per_page = options["item_per_page"];
                while(i < brandItems.length){
                    let item = document.createElement('div');
                    item.style = 'margin-left: '+(brandLeft*i)+'%; width: '+brandLeft+'%;';
                    item.id = 'item-'+(i+1);
                    item.className = 'brand-item';
                    let image = document.createElement('img');
                    image.src = brandItems[i]["image"];
                    image.alt = brandItems[i]["alt"];
                    brandList.appendChild(item);
                    item.appendChild(image);
                    i++;
                }
                if(options["autoplay"]){
                    window.autoplay_ms = options["autoplay_ms"];
                    setInterval(function(){
                        autoplayBrandFunc(autoplay_ms);
                    },autoplay_ms);
                }
            }else if(options["type"] == "category"){
                window.categoryList = document.querySelector(element);
                window.categoryListe = document.createElement('div');
                categoryListe.className = 'categoryList';
                categoryList.appendChild(categoryListe);
                if(options["autoplay"]){
                    window.autoplay_ms = options["autoplay_ms"];
                    setInterval(function(){
                        autoplayCategoryFunc(autoplay_ms);
                    },autoplay_ms);
                }
                let j = 0;
                window.category_item_per_page_desktop =  options["item_per_page"]["desktop"];
                window.category_item_per_page_tablet =  options["item_per_page"]["tablet"];
                window.category_item_per_page_mobile =  options["item_per_page"]["mobile"];
                (window.innerWidth > 1200) ? window.category_item_per_page = category_item_per_page_desktop : (window.innerWidth > 815) ? window.category_item_per_page = category_item_per_page_tablet : window.category_item_per_page = category_item_per_page_mobile;
                window.categoryActives = 0;
                window.categoryLeft = 100 / window.category_item_per_page;
                window.categoryHeight = categoryListe.clientWidth / window.category_item_per_page; 
                
                if(options["arrows"]){
                    let leftArrow = document.createElement('span');
                    leftArrow.className = 'left-arrow';
                    leftArrow.innerHTML = options["arrow_style"]["arrow_left"];
                    categoryListe.appendChild(leftArrow);
                    let rightArrow = document.createElement('span');
                    while(j < categoryItems.length){
                        let item = document.createElement('div');
                        item.style = 'margin-left:' + (categoryLeft*j)+'%; width: '+categoryLeft+'%;';
                        item.id = 'item-'+(j+1);
                        item.className = 'category-item';
                        let backgroundImage = document.createElement('img');
                        backgroundImage.src = categoryItems[j]["backgroundImage"];
                        backgroundImage.alt = categoryItems[j]["backgroundAlt"];
                        let bottom = document.createElement('div');
                        bottom.className = 'item-bottom';
                        let thumbImageDiv = document.createElement('div');
                        thumbImageDiv.className = 'thumb';
                        let thumbImage = document.createElement('img');
                        thumbImage.src = categoryItems[j]["thumbImage"];
                        thumbImage.alt = categoryItems[j]["thumbAlt"];
                        let bottomText = document.createElement('span');
                        bottomText.className = 'bottomText';
                        bottomText.innerHTML = categoryItems[j]["content"];
                        categoryListe.appendChild(item);
                        item.appendChild(backgroundImage);
                        item.appendChild(bottom);
                        bottom.appendChild(thumbImageDiv);
                        bottom.appendChild(bottomText);
                        thumbImageDiv.appendChild(thumbImage);
                        j++;
                    }
                    rightArrow.className = 'right-arrow';
                    rightArrow.innerHTML = options["arrow_style"]["arrow_right"];
                    categoryListe.appendChild(rightArrow);
                }else{
                    while(j < categoryItems.length){
                        let item = document.createElement('div');
                        item.style = 'margin-left:' + (categoryLeft*j)+'%; width: '+categoryLeft+'%;';
                        item.id = 'item-'+(j+1);
                        item.className = 'category-item';
                        let backgroundImage = document.createElement('img');
                        backgroundImage.src = categoryItems[j]["backgroundImage"];
                        backgroundImage.alt = categoryItems[j]["backgroundAlt"];
                        let bottom = document.createElement('div');
                        bottom.className = 'item-bottom';
                        let thumbImageDiv = document.createElement('div');
                        thumbImageDiv.className = 'thumb';
                        let thumbImage = document.createElement('img');
                        thumbImage.src = categoryItems[j]["thumbImage"];
                        thumbImage.alt = categoryItems[j]["thumbAlt"];
                        let bottomText = document.createElement('span');
                        bottomText.className = 'bottomText';
                        bottomText.innerHTML = categoryItems[j]["content"];
                        categoryListe.appendChild(item);
                        item.appendChild(backgroundImage);
                        item.appendChild(bottom);
                        bottom.appendChild(thumbImageDiv);
                        bottom.appendChild(bottomText);
                        thumbImageDiv.appendChild(thumbImage);
                        j++;
                    }
                }
                if(options["autoplay"]){
                    window.categoryAutoplay_ms = options["autoplay_ms"];
                    setInterval(function(){
                        autoplayCategoryFunc(categoryAutoplay_ms);
                    },categoryAutoplay_ms);
                }
                if(options["pagination"]){
                    let pagination = document.createElement('div');
                    pagination.className = 'category-pagination';
                    categoryList.appendChild(pagination);
                    let i = 0;
                    while(i < categoryItems.length){
                        let dot = document.createElement('span');
                        (i == 0) ? dot.className = 'pagination-dot active' : dot.className = 'pagination-dot';
                        dot.id = 'dot-'+(i+1);
                        pagination.appendChild(dot);
                        i++;
                    }
                }
            }
        }
    }
    const brand = new Slide("#brands",{
        autoplay: true,
        autoplay_ms: 1500,
        item_per_page: 4,
        pagination: false,
        type: "brand"
    });
    const category = new Slide("#categories",{
        autoplay: false,
        autoplay_ms: 1500,
        item_per_page: {
            desktop: 3,
            tablet: 2,
            mobile: 1
        },
        pagination: true,
        arrows: true,
        arrow_style: {
            arrow_left: '<i class="material-icons">chevron_left</i>',
            arrow_right: '<i class="material-icons">chevron_right</i>'
        },
        type: "category"
    });
    let dotSayac = 0;
    while(dotSayac < document.querySelectorAll(".pagination-dot").length){
        let id = document.querySelectorAll(".pagination-dot")[dotSayac].id
        let el = document.querySelector("#"+id);
        window.categoryLeft = 100 / window.category_item_per_page;
        el.addEventListener("click",function(){
            if(parseInt(id.split("dot-")[1])-1 + category_item_per_page <= categoryItems.length){
                let ids = parseFloat(id.split("dot-")[1])-1;
                let k = 1;
                while(k <= categoryItems.length){
                    let categoryMarginLeft = parseFloat(categoryListe.children[k].style.marginLeft.split("%")[0]) + (ids*categoryLeft);
                    categoryListe.children[k].style = 'margin-left:' + (-ids*categoryLeft)+'%; width: '+categoryLeft+'%;';
                    k++;
                    ids--;
                }
                categoryActives = parseInt(id.split("dot-")[1])-1;
                document.querySelector(".pagination-dot.active").classList.remove("active");
                document.querySelector("#dot-"+(categoryActives+1)).classList.add("active");
            }else{
                let ids = categoryItems.length - category_item_per_page;
                let k = 1;
                while(k <= categoryItems.length){
                    let categoryMarginLeft = parseFloat(categoryListe.children[k].style.marginLeft.split("%")[0]) + (ids*categoryLeft);
                    categoryListe.children[k].style = 'margin-left:' + (-ids*categoryLeft)+'%; width: '+categoryLeft+'%;';
                    k++;
                    ids--;
                }
                categoryActives = categoryItems.length - category_item_per_page;
                document.querySelector(".pagination-dot.active").classList.remove("active");
                document.querySelector("#dot-"+(parseFloat(id.split("dot-")[1]))).classList.add("active");
            }
            
        });
        dotSayac++;
    }
    document.querySelector(".left-arrow").addEventListener("click",function(){
        window.categoryLeft = 100 / window.category_item_per_page;
        if(categoryActives < 1){
            let k = 1;
            while(k < categoryItems.length+1){
                let categoryMarginLeft = parseFloat(categoryListe.children[k].style.marginLeft.split("%")[0]) - ((categoryItems.length - category_item_per_page)*categoryLeft);
                categoryListe.children[k].style = 'margin-left:' + (categoryMarginLeft)+'%; width: '+categoryLeft+'%;';
                k++;
            }
            categoryActives = categoryItems.length-category_item_per_page;
        }else{ 
            let k = 1;
            while(k < categoryItems.length+1){
                let categoryMarginLeft = parseFloat(categoryListe.children[k].style.marginLeft.split("%")[0]) + categoryLeft;
                categoryListe.children[k].style = 'margin-left:' + (categoryMarginLeft)+'%; width: '+categoryLeft+'%;';
                k++;
            }
            categoryActives--;
        }
        document.querySelector(".pagination-dot.active").classList.remove("active");
        document.querySelector("#dot-"+(categoryActives+1)).classList.add("active");
    });
    document.querySelector(".right-arrow").addEventListener("click",function(){
        window.categoryLeft = 100 / window.category_item_per_page;
        if(categoryActives < categoryItems.length-category_item_per_page){
            let k = 1;
            while(k < categoryItems.length+1){
                let categoryMarginLeft = parseFloat(categoryListe.children[k].style.marginLeft.split("%")[0]) - categoryLeft;
                categoryListe.children[k].style = 'margin-left:' + (categoryMarginLeft)+'%; width: '+categoryLeft+'%;';
                k++;
            }
            categoryActives++;
        }else{ 
            let k = 1;
            while(k < categoryItems.length+1){
                let categoryMarginLeft = parseFloat(categoryListe.children[k].style.marginLeft.split("%")[0]) + ((categoryItems.length - category_item_per_page)*categoryLeft);
                categoryListe.children[k].style = 'margin-left:' + (categoryMarginLeft)+'%; width: '+categoryLeft+'%;';
                k++;
            }
            categoryActives = 0
        }
        document.querySelector(".pagination-dot.active").classList.remove("active");
        document.querySelector("#dot-"+(categoryActives+1)).classList.add("active");
    });
}

export default slides