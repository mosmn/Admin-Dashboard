function updateState() {
    var postcode = document.getElementById("postcode").value;
    if (postcode == "35000") {
      document.getElementById("state").value = "Selangor";
    } else if (postcode == "50000") {
      document.getElementById("state").value = "Kuala Lumpur";
    } else if (postcode == "80000") {
      document.getElementById("state").value = "Johor";
    }
  }
  document.getElementById("postcode").addEventListener("change", updateState);
