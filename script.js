// Function untuk mengambil data dari form
function handleGetFormData() {
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  return {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status
  };
}

// Function untuk memeriksa apakah sebuah string berisi hanya angka
function isNumber(inputString) {
  return !isNaN(inputString);
}

// Function untuk memeriksa apakah checkbox dengan id "status" dicentang
function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

// Function untuk melakukan validasi data form
function validateFormData(formData) {
  if (formData.name !== '' && formData.city !== '' && formData.email !== '' && isNumber(formData.zipCode) && checkboxIsChecked(formData)) {
      console.log('form terisi');
      return true;
  } else {
      console.log('tidak terisi');
      return false;
  }
}

// Function untuk menangani proses submit form
function submit() {
  const formData = handleGetFormData();
  if (validateFormData(formData)) {
    document.getElementById('warning').textContent = "";
  } else {
    document.getElementById('warning').textContent = "Periksa form anda sekali lagi";
  }
}

// Menghubungkan function submit dengan form
document.querySelector('form').addEventListener("submit", event => {
event.preventDefault();
submit();
})