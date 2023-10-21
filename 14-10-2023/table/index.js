const allInput = document.getElementById("allCheck");

allInput.addEventListener("change", (e) => {
  document.querySelectorAll(".select").forEach((select) => {
    select.checked = e.target.checked;
  });
});

// $("#allCheck").change(function () {
//   console.log(this.checked);
//   $(".select").prop("checked", this.checked);
// });
