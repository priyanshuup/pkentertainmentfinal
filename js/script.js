
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
console.log('navMenu', navMenu)

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

const videoframediv = document.getElementById("videocontent");

// Create a loader element dynamically
const loader = document.createElement("div");
loader.className = "loader";
loader.innerHTML = "Loading..."; // You can customize the loader text

// Append the loader to the document
document.body.appendChild(loader);

// Fetch data from the API for Blogs
fetch("https://jh-fgnk.onrender.com/api/v1/blogs")
    .then((response) => response.json())
    .then((data) => {
        // Hide the loader once data is fetched
        loader.style.display = "none";

        const fetchingData = data.blogsfinds;
        console.log(fetchingData);

        if (fetchingData.length > 0) {
            const firstItem = fetchingData[0]; // Access the first element

            // Create and populate the <iframe> for the YouTube video
            const videoIframe = document.createElement("iframe");
            videoIframe.width = "560";
            videoIframe.height = "500";
            videoIframe.src = `${fetchingData[0].url}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&vq=hd1080`;
            videoIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            videoIframe.loading = "lazy"; // Add lazy loading

            const div = document.createElement("div");
            div.classList.add("videoevent-div");
            // div.style.backgroundColor = "green"; // Set background color to transparent

            div.appendChild(videoIframe);
            videoframediv.appendChild(div);
        } else {
            console.log("No Data Found");
        }
    })
    .catch((error) => {
        // Hide the loader in case of an error
        loader.style.display = "none";
        console.log(error);
    });

    // Javascript for video slider navigation 
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");
    
    var sliderNav = function(manual){
        btns.forEach((btn)=>{
            btn.classList.remove("active");
        });
    
        slides.forEach((slide)=>{
            slide.classList.remove("active");
        });
    
        contents.forEach((content)=>{
            content.classList.remove("active");
        });
    
        btns[manual].classList.add("active");
        slides[manual].classList.add("active");
        contents[manual].classList.add("active");
    }
    
    btns.forEach((btn, i)=>{
        btn.addEventListener("click", () =>{
            sliderNav(i);
        });
    });
    
    // Function to automatically call sliderNav every 2 seconds
    function autoSlider() {
        let currentSlide = 0;
    
        // Call the sliderNav function initially
        sliderNav(currentSlide);
    
        setInterval(() => {
            // Increment the current slide index
            currentSlide = (currentSlide + 1) % btns.length;
    
            // Call the sliderNav function with the new index
            sliderNav(currentSlide);
        }, 5000); // 2000 milliseconds = 2 seconds
    }
    
    // Call the autoSlider function to start the automatic sliding
    autoSlider();
    

    // Swiper Js
// Swiper Js

function showLoader() {
    const loaderContainer = document.getElementById("loaderContainer");
    loaderContainer.style.display = "flex";
  }
  
  function hideLoader() {
    const loaderContainer = document.getElementById("loaderContainer");
    loaderContainer.style.display = "none";
  }
  
  function initSwiper() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: false,
      center:false,
      fade: "true",
      loop: true,
      grabCursor: 'true',
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        }
      },
    });
  }
  
  const dataContainer = document.getElementById("image-container");
  const loaderContainer = document.getElementById("loaderContainer");
  
  // Show loader before fetching data
  showLoader();
  
  // Fetch data from the API for Blogs
  fetch("https://jh-fgnk.onrender.com/api/v1/blogs")
    .then((response) => response.json())
    .then((data) => {
      const fetchoriginals = data.blogsfinds;
      console.log(fetchoriginals);
  
      fetchoriginals.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("swiper-slide");
  
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("imagediv");
  
        // Create and populate the <iframe> for the YouTube video
        const videoIframe = document.createElement("iframe");
        videoIframe.width = "560";
        videoIframe.height = "315";
        videoIframe.src = `${item.url}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`; // Assuming the 'title' property contains the YouTube video URL
        videoIframe.title = item.heading; // You can set the title of the video as the iframe title
        videoIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        // videoIframe.allowfullscreen = true;
  
        imageDiv.appendChild(videoIframe);
        div.appendChild(imageDiv);
  
        const paragraph = document.createElement("h4");
        paragraph.textContent = item.heading;
        div.appendChild(paragraph);
  
        const heading = document.createElement("p");
        heading.textContent = item.description;
        div.appendChild(heading);
  
        const playbutton = document.createElement("button");
        playbutton.innerText = "Play"
        div.appendChild(playbutton)
        dataContainer.appendChild(div);
      });
  
      // Initialize swiper after dynamic elements are added
      initSwiper();
  
      // Hide loader after data is fetched and processed
      hideLoader();
    })
    .catch((error) => {
      console.error("Error:", error);
      // Hide loader on error (optional)
      hideLoader();
    });
    
  
  
  const eventsmaindata = document.getElementById("video-div")
  
  // Fetch data from the API for Events
  
  fetch("https://jh-fgnk.onrender.com/api/v1/events")
  .then((response)=> response.json())
  .then((data)=>{
    const eventsdataApi = data.eventsfinds
    console.log(eventsdataApi)
    // const eventsdata = document.createElement('div')
    // eventsdata.classList.add("eventsvideodiv")
    
    const videodivevent = document.createElement('div')
    videodivevent.classList.add("videoevent-div")
  
  
    // Create and populate the <iframe> for the YouTube video
    const videoIframeevents = document.createElement("iframe");
    videoIframeevents.width = "560";
    videoIframeevents.height = "515";
    videoIframeevents.src = `https://www.youtube.com/embed/${eventsdataApi[0].url}?autoplay=1&mute=1&loop=1&playlist=${eventsdataApi[0].url}&vq=hd1080`; // Assuming the 'title' property contains the YouTube video URL
    console.log(videoIframeevents.src)
    videoIframeevents.title = eventsdataApi[0].heading; // You can set the title of the video as the iframe title
    videoIframeevents.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    // videoIframe.allowfullscreen = true;
  
    const eventsheading = document.createElement("h4")
    eventsheading.textContent = eventsdataApi[0].heading
    eventsheading.classList.add("events-h1")
    
    const eventspara = document.createElement("p")
    eventspara.textContent = eventsdataApi[0].description
    eventspara.classList.add("eventspara-p")
    
    
    eventsmaindata.appendChild(videodivevent)
    eventsmaindata.appendChild(eventsheading);
    eventsmaindata.appendChild(eventspara);
    videodivevent.appendChild(videoIframeevents)
  })
  
  
  // Fetch data from the API for Rents
  
  const rentsdata = document.getElementById("rentalapidata");
  
  fetch("https://jh-fgnk.onrender.com/api/v1/rents")
  .then((response) => response.json())
  .then((data) => {
    const rentsapidata = data.rentsFind;
    console.log(rentsapidata);
  
    rentsapidata.forEach((item) => {
  
      const rentsdiv = document.createElement("div");
      rentsdiv.classList.add("rentsdiv");
  
      const imagedivRent = document.createElement("div");
      imagedivRent.classList.add("imagedivRent");
      
      const imgrent = document.createElement("img");
      imgrent.src = item.url;
      // console.log(`dekho bhaiya image ${item.url}`);
  
      const headingRent = document.createElement("h4");
      headingRent.textContent = item.heading;
      console.log(item.heading);
  
      const paraRent = document.createElement("p");
      paraRent.textContent = item.description;
  
      rentsdiv.appendChild(imagedivRent);
      imagedivRent.appendChild(imgrent);
      rentsdiv.appendChild(headingRent);
      rentsdiv.appendChild(paraRent);
      rentsdata.appendChild(rentsdiv);
    });
  
  })
  .catch((error) => {
    console.log(error);
  });
  
  
  // Rents option menu 
  
  const Rentalbutton = document.querySelector(".explorerentals");
  const rentalapi = document.querySelector("#rentalapi");
  const closerental = document.querySelector("#rentalapi .ri-close-fill");
  const closebooking = document.querySelector("#booking");
  const formbtn = document.querySelector(".ri-question-answer-fill")
  const form = document.querySelector(".container")
  const booknow = document.querySelector(".explorenbook button")
  
  
    Rentalbutton.addEventListener("click", () => {
      rentalapi.classList.toggle("active");
    });
    closerental.addEventListener("click", () => {
      rentalapi.classList.remove("active");
    });
  
    const toggleFormActive = () => {
      form.classList.toggle("active");
  };
  
  formbtn.addEventListener("click", toggleFormActive);
  booknow.addEventListener("click", toggleFormActive);
  
    closebooking.addEventListener("click", () => {
      form.classList.remove("active");
    });