function submit() {

  Username = document.getElementById("name").value;  
  localStorage.setItem("Username" , Username);

  window.location = "nextpage.html"

}