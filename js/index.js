const dark_mode = document.querySelector(".dark-mode");
const ligth_mode = document.querySelector(".light-mode");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
ligth_mode.style.display = "none";
const followers_div = document.querySelector(".followers-div");
moon.addEventListener("click", () => {
  if (ligth_mode.style.display === "none") {
    ligth_mode.style.display = "flex";
    dark_mode.style.display = "none";
    document.body.classList.toggle("dark");
    // followers_div.classList.toggle("dark-follower");
  }
});
sun.addEventListener("click", () => {
  if (dark_mode.style.display === "none") {
    dark_mode.style.display = "flex";
    ligth_mode.style.display = "none";
    document.body.classList.toggle("dark");
    // followers_div.classList.toggle("dark-follower");
  }
});

const input = document.getElementById("input-user");
const search_btn = document.getElementById("search-btn");
const contant = document.querySelector(".contant");
const input_form = document.querySelector(".input-form");
const no_result = document.getElementById("no-result");
function check_user() {
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name === undefined) {
        no_result.style.display = "block";
        input_form.style.border = "1px solid #F74646";
      } else {
        console.log(data);
        contant.innerHTML = "";
        const user_information = document.createElement("div");
        if (window.innerWidth > 1023) {
          user_information.innerHTML = `
          <img src="${data.avatar_url}" alt="" class="desktop-user" />
          <div class = for-respons" style="display: flex; 
          flex-direction: column;  
          padding-left:20%";>
          <div class="user-logoname">
          <img src="${data.avatar_url}" alt="" class= user-mobile>
          <div class="user-name">
            <p class="name">${data.name}</p>
            <p id="email">@${data.login}</p>
            <p>${data.created_at}</p>
          </div>
        </div>
        <p class=user-bio>${data.bio}</p>
        <div class="followers-div">
        <div class="followers-info">
        <p class="repo-text">Repos</p>
        <p class="followers-text">followers</p>
        <p class="following-text">followimg</p>
        </div>
        <div class="followers-number">
        <p class="repo">${data.public_repos}</p>
        <p class="followers-num">${data.followers}</p>
        <p class="followimg-num">${data.following}</p>
      </div>
        </div>
        <div class="link-div">
              <div class="location-div">
                <i class="fa-solid fa-location-dot"></i>
                <p class="city">${data.location}</p>
              </div>
              <div class="github-link">
                <i class="fa-solid fa-link"></i>
                <a href="#"> <p class="user-link">${data.html_url}</p></a>
              </div>
              <div class="twitter">
                <i class="fa-brands fa-twitter" style="color: #cdcccc"></i>
                <p id="twitter-link">Not Available</p>
              </div>
              <div class="house">
                <i class="fa-solid fa-building-circle-check"></i>
                <p class="location-link">${data.login}</p>
              </div>
            </div>
       </div>
          `;
        } else if (window.innerWidth < 1023) {
          user_information.innerHTML = `
          <img src="${data.avatar_url}" alt="" class="desktop-user" />
          <div class = for-respons" style="
          gap:30px;
          display: flex; 
          flex-direction:row;>
          <div class="user-logoname">
          <img src="${data.avatar_url}" alt="" class= user-mobile>
          <div class="user-name">
            <p class="name">${data.name}</p>
            <p id="email">@${data.login}</p>
            <p>${data.created_at}</p>
          </div>
        </div>
        <p class=user-bio>${data.bio}</p>
        <div class="followers-div">
        <div class="followers-info">
        <p class="repo-text">Repos</p>
        <p class="followers-text">followers</p>
        <p class="following-text">followimg</p>
        </div>
        <div class="followers-number">
        <p class="repo">${data.public_repos}</p>
        <p class="followers-num">${data.followers}</p>
        <p class="followimg-num">${data.following}</p>
      </div>
        </div>
        <div class="link-div">
              <div class="location-div">
                <i class="fa-solid fa-location-dot"></i>
                <p class="city">${data.location}</p>
              </div>
              <div class="github-link">
                <i class="fa-solid fa-link"></i>
                <a href="#"> <p class="user-link">${data.html_url}</p></a>
              </div>
              <div class="twitter">
                <i class="fa-brands fa-twitter" style="color: #cdcccc"></i>
                <p id="twitter-link">Not Available</p>
              </div>
              <div class="house">
                <i class="fa-solid fa-building-circle-check"></i>
                <p class="location-link">${data.login}</p>
              </div>
            </div>
       </div>
          `;
        }
        contant.appendChild(user_information);
        no_result.style.display = "none";
        input_form.style.border = "none";
      }
    });
}
search_btn.addEventListener("click", (event) => {
  event.preventDefault();
  contant.innerHTML = `<span class="loader"></span>`;

  setTimeout(() => {
    contant.innerHTML = "";
    check_user();
  }, 2000);
});
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    contant.innerHTML = '<span class="loader"></span>';
    setTimeout(() => {
      contant.innerHTML = "";
      check_user();
    }, 2000);
  }
});
