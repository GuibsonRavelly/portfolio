const navLnk = document.querySelectorAll('header nav a');
const logoLnk = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

const activePage = () =>{
const barBox=document.querySelector('.bars-box');
const header=document.querySelector('header');

header.classList.remove('active');
   setTimeout(() =>{
    header.classList.add('active');
   }, 1000)


   navLnk.forEach(link =>{
    link.classList.remove('active');
   })

   barBox.classList.remove('active');
   setTimeout(() =>{
    barBox.classList.add('active');
   }, 1000)

   sections.forEach(sections =>{
    sections.classList.remove('active');
   });

}

navLnk.forEach((link,idx) =>{
    link.addEventListener('click', () =>{
        if (!link.classList.contains('acitve')){
            activePage();

            link.classList.add('active');

            setTimeout(() =>{
                sections[idx].classList.add('active');
            }, 1000)
        }
    })
})

const resumeBtns = document.querySelectorAll('.resume-btn');


resumeBtns.forEach((btn, idx) =>
{
    btn.addEventListener('click',() =>{
        const resumeDeatils =document.querySelectorAll('.resume-detail')
        resumeBtns.forEach(btn =>{
            btn.classList.remove('active')
        });
        btn.classList.add('active')


        resumeDeatils.forEach(detail =>{
            detail.classList.remove('active')
        });

        resumeDeatils[idx].classList.add('active');
    })
})

logoLnk.addEventListener('click' , ()=>{
    if(!navLnk[0].classList.contains('active')){
        activePage();


        navLnk[0].classList.add('active')

        setTimeout(() =>{
            sections[0].classList.add('active');
        }, 1000)
    }
})

const arrowRigth = document.querySelector('.portfolio-box .navigation .arrow-rigth')
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left')


let index = 0;

const activePortfolio = () =>{
    const imgSlide= document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% -  ${index *2}rem))`
    portfolioDetails.forEach(detail =>{ 
        detail.classList.remove('active')
    })
    portfolioDetails[index].classList.add('active')
}

arrowRigth.addEventListener('click', () =>{
    if(index <2 ){
        index++;
        arrowLeft.classList.remove('disabled')
    }
    else{
        index = 3
        arrowRigth.classList.add('disabled')
    }

    activePortfolio();
})

arrowLeft.addEventListener('click', () =>{
    if(index > 1 ){
        index--;
        arrowRigth.classList.remove('disabled')
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled')
    }

    activePortfolio();
})