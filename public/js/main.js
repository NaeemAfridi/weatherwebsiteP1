const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const cityname = document.getElementById('cityname');
const temp_real_val= document.getElementById('temp_real_val');
const tempstatus = document.getElementById('tempstatus');
const datahide = document.querySelector('.middle-layer')

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        cityname.innerText = `Please write the name befor search`;
        datahide.classList.add('data_hide');
    }   
    else{
       try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ffb6c40332918ed7f0f68714a60d1b04&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData=[data];
        cityname.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerText= arrData[0].main.temp;
        // tempstatus.innerText=arrData[0].weather[0].main;
        const tempMood =arrData[0].weather[0].main;
        //condition to check sunny or cloud
        if(tempMood=="Clear"){
            tempstatus.innerHTML=
            "<i class= 'fas fa-sun' style='color:#eccc68;'></i>";
        }else if(tempMood=="Clouds"){
            tempstatus.innerHTML=
            "<i class= 'fas fa-cloud' style='color:#f1f2f6;'></i>";
        }else if(tempMood=="Rain"){
            tempstatus.innerHTML=
            "<i class= 'fas fa-rain' style='color:#fff;'></i>";
        }else{
            tempstatus.innerHTML=
            "<i class= 'fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        datahide.classList.remove('data_hide');
       } catch {
        cityname.innerText = `Please enter the correct city name`;
        datahide.classList.add('data_hide');
       }
    } 
}
submitBtn.addEventListener('click', getInfo);