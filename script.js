document.getElementById("patientForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("rName").innerText =
    document.getElementById("name").value;

  document.getElementById("rAge").innerText =
    document.getElementById("age").value;

  document.getElementById("rComplaint").innerText =
    document.getElementById("complaint").value;

  document.getElementById("rAddress").innerText =
    document.getElementById("address").value;

  document.getElementById("rVitals").innerText =
    document.getElementById("vitals").value;

  document.getElementById("rHistory").innerText =
    document.getElementById("history").value;

  // hide form, show report
  document.getElementById("patientForm").style.display = "none";
  document.getElementById("report").style.display = "block";
});

function downloadPDF() {
  const report = document.getElementById("report");
  html2pdf().from(report).save("Patient_Report.pdf");
}
