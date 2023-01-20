


//sidebar

$('.aaa').animate({ 'left': '-240' }, 0);
$('.k').html('<i class="fa-solid fa-bars fa-2x w-100"></i>')

$('.k').click(function () {
    if ($('.aaa').css("left") == '0px') {
        $('.aaa').animate({ 'left': '-240' }, 500);
        $('.i').toggle(1000)
        $('.j').animate({ 'top': '100%' }, 2000)
        $('.k').html('<i class="fa-solid fa-bars fa-2x w-100"></i>')
    } else {
        $('.aaa').animate({ 'left': '0' }, 500, function () {
            $('.i').toggle(1495)
            $('.j').animate({ 'top': '40px' }, 1500)
        });
        $('.k').html('<i class="fa-solid fa-close fa-2x w-100"></i>')
    }
})








/////////////////////////////////////////////////////////Calling///////////////////////////////////////////////////////////////////////



let hHome = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
let cCategories = 'https://www.themealdb.com/api/json/v1/1/categories.php';
let aArea = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
let iIngredient = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
let cData;



async function getCategories(c) {

    let fApi = await fetch(c);
    cData = await fApi.json();

}




function getMeal() {
    $('.hhj').click(async function () {
        let a = Array.from($('.hhj'))
        let z = a.indexOf(this)
        $('.pp').html(`
<div class='col-md-4'><div><img class='w-100' src='${cData.meals[z].strMealThumb}' alt=''/><h2 class='text-center mt-3'>${cData.meals[z].strMeal}</h2></div></div>
<div class='col-md-8'><div><h2>Instructions</h2><p class='text-muted'>${cData.meals[z].strInstructions}</p>
<p class='text-muted'><span class="fw-bold">Area:</span> ${cData.meals[z].strArea}</p>
<p class='text-muted'><span class="fw-bold">Category:</span> ${cData.meals[z].strCategory}</p>
<p class='text-muted fs-3'>Recipes : </p>
<div class='d-flex flex-wrap g-5'><button class='btn btn-secondary rounded me-2'>${cData.meals[z].strMeasure1} ${cData.meals[z].strIngredient1}</button><button class='btn btn-secondary rounded'>${cData.meals[z].strMeasure2} ${cData.meals[z].strIngredient2}</button></div>
<p class='text-muted fs-3 mt-3'>tags : </p>
<button class=''btn-secondary mb-3>${cData.meals[z].strTags}</button>
<div class="d-flex mt-4">
<a href='${cData.meals[z].strSource}' target="_blank" class="btn btn-success me-2">Source</a>
<a href='${cData.meals[z].strYoutube}' target="_blank" class="btn btn-danger">Youtube</a>
</div>
</div></div>
`)
        $('.zx').html('')
        $('.gg').html("")
        $('.kl').html('')

    })
}



function getAll(bn){
    let html = "";
    for (let i = 0; i<cData.meals.length; i++) {
        html += `<div class="col-md-3 hhj">
 <div class="position-relative overflow-hidden z">
 <img class="w-100" src="${cData.meals[i].strMealThumb}" alt="">
 <div class="position-absolute top-0 bottom-0 start-0 end-0 d-flex ps-3 align-items-center bg-white bg-opacity-50 rounded text-black vv">
 <p class="fs-2">${cData.meals[i].strMeal}</p>
 </div>
 </div>
 
 </div>`
    }
    document.querySelector(`.${bn}`).innerHTML = html;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










//home

document.addEventListener('DOMContentLoaded', async function () {
    await getCategories(hHome);

    getAll('kl')
    getMeal()
    $('.zx').html('')
    $('.gg').html("")
}
)





//category

$('.c').click(async function () {
    await getCategories(cCategories);
    let html = "";
    for (let i = 0; i < 14; i++) {
        html += `<div class="col-md-3 zzzz">
<div class="position-relative overflow-hidden z">
<img class="w-100" src="${cData.categories[i].strCategoryThumb}" alt="">
<div class="position-absolute top-0 bottom-0 start-0 end-0 d-flex ps-3 align-items-center bg-white bg-opacity-50 rounded text-black vv">
<p class="fs-2">${cData.categories[i].strCategory}</p>
</div>
</div>

</div>`
    }
    document.querySelector('.row').innerHTML = html;
   await getCategoryMeal()
    $('.zx').html('');
    $('.gg').html("");
    $('.pp').html('');
})




async function getCategoryMeal(){
   
    $('.zzzz').click(async function () {
        let a = Array.from($('.zzzz'))
        let z = a.indexOf(this)
   let pP = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cData.categories[z].strCategory}`
   await getCategories(pP);
     getAll('row')
     getMeal()

    })}






//area

$('.ar').click(async function () {
    await getCategories(aArea);
    let html = "";
    for (let i = 0; i < 27; i++) {
        html += `<div class="col-md-3 zzzz">
<div class="z px-3 text-center zz">
<i class="fa-solid fa-city f text-danger mb-2 opacity-50"></i>
<h2>${cData.meals[i].strArea}</h2>
</div>

</div>`
    }
    document.querySelector('.row').innerHTML = html;
    getAreaMeal()
    $('.zx').html('');
    $('.gg').html("");
    $('.pp').html('');
})




async function getAreaMeal(){
   
    $('.zzzz').click(async function () {
        let a = Array.from($('.zzzz'))
        let z = a.indexOf(this)
   let pP = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cData.meals[z].strArea}`
   await getCategories(pP);
   getAll('row')
   getMeal()

    })}






//ingredient

$('.ingr').click(async function () {
    await getCategories(iIngredient);

    let html = "";
    for (let i = 0; i < 20; i++) {
        html += `<div class="col-md-3 zzzz">
            <div class="text-center z">
            <i class="fa-solid fa-bowl-food f text-success mb-2"></i>
            <h4>${cData.meals[i].strIngredient}</h4>
            <p class='ll'>${cData.meals[i].strDescription}</p>
            </div>
            
            </div>`
    }
    document.querySelector('.row').innerHTML = html;
    getIngredientMeal()
    $('.zx').html('');
    $('.gg').html("");
    $('.pp').html('');
})




async function getIngredientMeal(){
   
    $('.zzzz').click(async function () {
        let a = Array.from($('.zzzz'))
        let z = a.indexOf(this)
   let pP = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${cData.meals[z].strIngredient}`
   await getCategories(pP);
   getAll('row')
   getMeal()

    })}







//search

$('.s').click(async function () {
    $('.gg').html("<input class='w form-control bg-black text-warning text-center nn' type='text' placeholder='Search by Name'/><input class='w form-control bg-black text-warning text-center fl' type='text' placeholder='Search by First Letter'/>");
    $('.kl').html("");
    $('.zx').html('');
    $('.pp').html('');


    $('.fl').keydown(function (e) {
        getFirst(e)
    })


    $('.nn').keydown(function (e) {
        getName(e)
    }
    )


})

async function getFirst(e) {

    let vV = /^([a-z]|[0-9])$/i
    if (vV.test(e.key) == true) {
        document.querySelector('.fl').value = '';
        var c = `https://www.themealdb.com/api/json/v1/1/search.php?f=${e.key}`
        await getCategories(c)
        getAll('row')
        getMeal()
    } else if (e.key == 'Backspace') {
        document.querySelector('.kl').innerHTML = '';
    }
}

async function getName(e) {
    var c = `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.querySelector('.nn').value}`
    await getCategories(c)
    getAll('row');
    getMeal();


    if (e.key == "Backspace") {
        var c = `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.querySelector('.nn').value}`
        await getCategories(c)
        getAll('row');
        getMeal();
    }
}






//form

$('.cu').click(async function () {
    $('.pp').html('')
    $('.gg').html("")
    $('.kl').html("")
    $('.zx').html(` <h2 class="text-center mb-5">Contact Us...</h2>
        <div class="col-md-6">
            <div>
            <input class='bg-black hh text-center text-warning form-control name m' placeholder="Enter your Name" type="text">
            <p  id='name' class='d-none p-3 text-warning rounded bg-danger'>Special Characters and Numbers not allowed</p>
            </div>
            </div>
            
        <div class="col-md-6">
            <div>
            <input class='bg-black hh text-center text-warning form-control email m' placeholder="Email" type="email">
            <p  id='email' class='d-none p-3 text-warning rounded bg-danger'>Enter valid email. *Ex: xxx@yyy.zzz</p>
            </div>
            </div>
            
        <div class="col-md-6">
            <div>
            <input class='bg-black hh text-center text-warning form-control phone m' placeholder="Phone" type="number">
            <p  id='phone' class='d-none p-3 text-warning rounded bg-danger'>Enter valid Phone Number</p>
            </div>
            </div>
            
        <div class="col-md-6">
            <div>
            <input class='bg-black hh text-center text-warning form-control age m' placeholder="Age" type="number">
            <p  id='age' class='d-none p-3 text-warning rounded bg-danger'>Enter valid Age</p>
            </div>
            </div>
            
        <div class="col-md-6">
            <div>
            <input class='bg-black hh text-center text-warning form-control password m' placeholder="Passsword" type="password">
            <p  id='password' class='d-none p-3 text-warning rounded bg-danger'>Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
            </div>
            </div>
            
        <div class="col-md-6">
            <div>
            <input class='bg-black hh text-center text-warning form-control repassword m' placeholder="Re-Password" type="password">
            <p  id='repassword' class='d-none p-3 text-warning rounded bg-danger '>Enter valid Re-Password</p>
            </div>
            </div>
            <button class="btn btn-outline-danger w2 m-auto mt-5 disabled">Submit</button>
     `)
    getRgx()
})






function getRgx() {

    $('.name').keydown(function (e) {
        let nName = document.querySelector('#name');
        let nName0 = document.querySelector('.name');
        let nName1 = /^[a-z]$/i;

        if (nName1.test(e.key) == false && e.key != "Backspace" && e.key != "CapsLock") {
            e.preventDefault();
            nName.classList.remove('d-none')
        } else {
            nName.classList.add('d-none')

        }
    })




    $('.age').keydown(function (e) {
        let aAge = document.querySelector('#age');
        let aAge0 = document.querySelector('.age');
        let aAge1 = /^[0-9]$/i;

        if (aAge1.test(e.key) == false && e.key != "Backspace") {
            e.preventDefault();
            aAge.classList.remove('d-none')
        } else if (aAge0.value.length > 2 && e.key != "Backspace") {
            e.preventDefault();
        } else if (aAge0.value.length >= 2 && e.key != "Backspace") {
            aAge.classList.remove('d-none')
        } else {
            aAge.classList.add('d-none')
        }
    })



    let eEmail0 = document.querySelector('.email');
    let eEmail1 = /^[a-z]{3,}@[a-z]{3,}.[a-z]{3,}$/ig;
    $('.email').keyup(function (e) {
        let eEmail = document.querySelector('#email');


        if (eEmail1.test(eEmail0.value) == false) {
            eEmail.classList.remove('d-none')
        } else {
            eEmail.classList.add('d-none')
        }
    })




    $('.phone').keyup(function (e) {
        let pPhone = document.querySelector('#phone');
        let pPhone0 = document.querySelector('.phone');
        let pPhone1 = /^(011|010|012|015)[0-9]{1,}/i;

        if (pPhone1.test(pPhone0.value) == false || pPhone0.value.length != 11) {
            pPhone.classList.remove('d-none')
        } else {
            pPhone.classList.add('d-none')
        }
    })




    $('.password').keyup(function (e) {
        let pPassword = document.querySelector('#password');
        let pPassword0 = document.querySelector('.password');
        let pPassword1 = /([a-z][0-9]|[0-9][a-z])/i;

        if (pPassword1.test(pPassword0.value) == false || pPassword0.value.length < 8) {
            pPassword.classList.remove('d-none')
        } else {
            pPassword.classList.add('d-none')
        }
    })



    $('.repassword').keyup(function (e) {
        let rRepassword = document.querySelector('#repassword');
        let rRepassword0 = document.querySelector('.repassword');

        if (document.querySelector('.password').value != rRepassword0.value) {
            rRepassword.classList.remove('d-none')
            document.querySelector('button').classList.add('disabled')
        } else {
            rRepassword.classList.add('d-none')
            document.querySelector('button').classList.remove('disabled')
        }
    })
}


