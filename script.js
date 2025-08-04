document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); 
  
  const requiredFields = [
      "firstName", "lastName", "address1", "city", "zip",
      "phone", "email", "monthlyCredit", "months",
      "honorName", "acknowledge", "honorAddress",
      "honorCity", "honorZip", "publicationName", "comments"
  ];

  for (let i = 0; i < requiredFields.length; i++) {
      const field = document.getElementById(requiredFields[i]);
      if (!field.value.trim()) {
          alert("Please fill out the " + requiredFields[i] + " field.");
          field.focus();
          return;
      }
  }

  window.location.href = "thankyou.html";
});
