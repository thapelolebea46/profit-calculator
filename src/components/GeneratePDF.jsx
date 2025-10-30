import jsPDF from "jspdf";
import "jspdf-autotable"; // important: this attaches autoTable to jsPDF

export const GeneratePDF = (businessName, items) => {
  const doc = new jsPDF();

  // Title
  businessName = businessName + " profit";

  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(businessName, doc.internal.pageSize.getWidth() / 2, 20, {
    align: "center",
  });

  // Table settings
  const startY = 40;
  const cellHeight = 10;
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;

  const columns = ["Item", "Buy", "Sell", "Qty", "Total Cost", "Profit"];
  const colWidth = (pageWidth - margin * 2) / columns.length;

  // Draw header
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  columns.forEach((col, i) => {
    doc.rect(margin + i * colWidth, startY, colWidth, cellHeight);
    doc.text(col, margin + i * colWidth + colWidth / 2, startY + 7, {
      align: "center",
    });
  });

  // Draw rows
  doc.setFont("helvetica", "normal");
  let currentY = startY + cellHeight;
  let overallSpend = 0;
  let overallProfit = 0;
  let totalItems = 0;

  items.forEach((item) => {
    const totalCost = item.buy * item.quantity;
    const profit = item.sell * item.quantity - totalCost;

    overallSpend += totalCost;
    overallProfit += profit;
    totalItems += parseInt(item.quantity);

    const row = [
      item.name,
      `R${item.buy}`,
      `R${item.sell}`,
      item.quantity,
      `R${totalCost}`,
      `R${profit}`,
    ];

    row.forEach((text, i) => {
      // Optional: alternating row colors
      if (items.indexOf(item) % 2 === 0) {
        doc.setFillColor(230, 240, 255);
        doc.rect(margin + i * colWidth, currentY, colWidth, cellHeight, "F");
      }

      doc.rect(margin + i * colWidth, currentY, colWidth, cellHeight);
      doc.text(`${text}`, margin + i * colWidth + colWidth / 2, currentY + 7, {
        align: "center",
      });
    });

    currentY += cellHeight;
  });

  // Totals at bottom
  currentY += 10;
  doc.setFont("helvetica", "bold");
  doc.text(`Total Items: ${totalItems}`, pageWidth / 2, currentY, {
    align: "center",
  });
  doc.text(
    `Total Buying Amount: R${overallSpend}`,
    pageWidth / 2,
    currentY + 7,
    { align: "center" }
  );
  doc.text(`Total Profit: R${overallProfit}`, pageWidth / 2, currentY + 14, {
    align: "center",
  });

  // Save PDF
  doc.save(`${businessName}.pdf`);
};
