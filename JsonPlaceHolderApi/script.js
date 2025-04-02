function getPostsByUserId(id, el) {
  const selectedElements = document.getElementsByClassName("selected");
  for (selected of selectedElements) {
    selected.classList.remove("selected");
  }
  el.classList.add("selected");
  var xhttp = new XMLHttpRequest();
  xhttp.responseType = "json";
  let posts = "";
  const postsElement = document.getElementById("postsId");
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";
  xhttp.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    true
  );
  xhttp.onprogress = function (e) {
    if (e.lengthComputable) {
      const percentComplete = (e.loaded / e.total) * 100;
      progressBar.style.width = percentComplete + "%";
      progressBar.textContent = Math.round(percentComplete) + "%";
    }
  };
  xhttp.onload = () => {
    if (xhttp.status >= 200 && xhttp.status < 300) {
      progressBar.style.width = "100%";
      progressBar.textContent = "100%";
      const postsArray = xhttp.response;
      postsArray.forEach((post) => {
        posts += `<div class="post">
        <h4>${post.title}</h4>
        <hr />
        <p>
            ${post.body}
        </p>
      </div>`;
      });
    } else {
      posts = "no Content ... something wrong";
    }
    postsElement.innerHTML = posts;
  };

  xhttp.send();
}
function GetAllUsers() {
  let users = "";
  var xhttp = new XMLHttpRequest();
  const usersElement = document.getElementById("usersList");
  xhttp.responseType = "json";
  xhttp.open("GET", `https://jsonplaceholder.typicode.com/users`, true);
  xhttp.onload = () => {
    if (xhttp.status >= 200 && xhttp.status < 300) {
      const usersArray = xhttp.response;
      usersArray.forEach((user) => {
        users += `<li>
            <button onclick="getPostsByUserId(${user.id} , this)">
              <h3>${user.name}</h3>
              <p>${user.email}</p>
            </button>
          </li>`;
      });
    } else {
      posts = "something wrong";
    }
    usersElement.innerHTML = users;
  };

  xhttp.send();
}
GetAllUsers();
