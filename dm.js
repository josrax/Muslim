const editable = document.querySelector(".editable"),
  placeholder = document.querySelector(".placeholder"),
  readonly = document.querySelector(".readonly"),
  counter = document.querySelector(".counter"),
  button = document.querySelector("button"),
  wrapper = document.querySelector(".wrapper");

wrapper.onmouseover = () => {
  button.classList.add("active");
  console.log(wrapper);
  input.focus();
};
document.addEventListener("Load", () => {
  input.focus();
  button.classList.add("active");
});

const form = document.querySelector("form"),
  area = document.querySelector("textarea");

wrapper.onmouseover = () => {
  area.focus();
  button.classList.add("active");
};
button.onclick = (e) => {
  button.innerText = "Sending...";
  console.log();
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;

      if (response === "" || null || undefined) {
        button.style.background = "red";
        response = "Empty Message";
        setTimeout(() => {
          button.innerText = "SEND";
          button.style.background = "#1da1f2";
        }, 3000);
      } else if (response.length > 10) {
        button.style.background = "red";
        response = "failed";
        setTimeout(() => {
          response = "SEND";
          button.style.background = "#1da1f2";
        }, 3000);
      }
      console.log(response);
      button.innerText = response;
      setTimeout(() => {
        button.innerText = "SEND";
        button.style.background = "#1da1f2";
      }, 2000);
    } else {
      console.log("failed");
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
};
