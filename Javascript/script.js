const selectBtn = document.querySelector('.select_btn'),
      country = document.querySelectorAll('.country');


      selectBtn.addEventListener('click', () =>{
        selectBtn.classList.toggle('open');
      })

      country.forEach(country =>{
        country.addEventListener('click', () =>{
            country.classList.toggle('checked');
        })
      })