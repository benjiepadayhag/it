let places = document.querySelectorAll(".place-list li");
let active = "bg.jpg";

places.forEach((e)=>{
    e.addEventListener ("mouseenter",(event) => {
        places.forEach ((e) => {
            e.classlist.remove("active");
        } );

        event.target.classlist.add("active");
        active = event.target.getAttribute('data-img')
        let banner = document.querySelector('.banner');
        banner.style.backgroundImage =`url('${active}')';
    } );
});