/** @format */
// ============================= Dynamic Data ========================================

var userData = {
  invoiceNo: "20230705/CIN/315",
  invoiceDate: "14-April-2000",
};
// Function to update the data in the HTML elements
document.querySelector("#invoiceNo").textContent = userData.invoiceNo;
document.querySelector("#invoiceDate").textContent = userData.invoiceDate;

// ============================= PDF Download ========================================
let btn = document.getElementById("btn");
function pdfCreate() {
  // Get the HTML content of the container element
  var style = document.createElement("style");
  style.innerHTML = `
    @media print {
      body {
        margin: 0;
        padding-top: 20px;
      }
      a[href]:after {
        content: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  var container = document.querySelector(".container");

  window.print();
  // Convert the container element to a PDF using html2pdf
  html2pdf()
    .set({
      margin: [20, 20, 20, 20], // Top, Right, Bottom, Left margins
      filename: "invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { dpi: 192, letterRendering: true, useCORS: true },
      jsPDF: { unit: "pt", format: "a3", orientation: "portrait" },
    })
    .from(container);
  // .save();
}
btn.addEventListener("click", pdfCreate);
// pdfCreate();
