"use client";

import React, { useState } from "react";
import jsPDF from "jspdf";
import { Download, Loader2 } from "lucide-react";

const AdmissionReceipt = ({ registration }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const generatePDF = async () => {
    if (!registration) return;

    setIsDownloading(true);

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();

      // Background
      pdf.setFillColor(2, 6, 23);
      pdf.rect(0, 0, 210, 297, "F");

      // Header Logo Block
      pdf.setFillColor(234, 88, 12);
      pdf.roundedRect(20, 20, 18, 18, 3, 3, "F");

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      pdf.text("N", 27, 32);

      pdf.setFontSize(22);
      pdf.text("NEXEA ACADEMY", 45, 32);

      pdf.setFontSize(9);
      pdf.setTextColor(234, 88, 12);
      pdf.text("OFFICIAL CERTIFICATION OF ENROLLMENT", 45, 38);

      // Divider
      pdf.setDrawColor(60, 60, 60);
      pdf.line(20, 45, 190, 45);

      // Issued To
      pdf.setTextColor(150, 150, 150);
      pdf.setFontSize(9);
      pdf.text("ISSUED TO", 20, 65);

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(32);
      pdf.setFont("helvetica", "bold");
      pdf.text(registration.name.toUpperCase(), 20, 80);

      // Program Track
      pdf.setFontSize(10);
      pdf.setTextColor(150, 150, 150);
      pdf.text("PROGRAM TRACK", 20, 105);

      pdf.setFontSize(16);
      pdf.setTextColor(230, 230, 230);
      pdf.text(registration.track.name, 20, 115);

      // Enrollment Date
      pdf.setFontSize(10);
      pdf.setTextColor(150, 150, 150);
      pdf.text("ENROLLMENT DATE", 20, 130);

      const date = new Date(registration.createdAt).toLocaleDateString(
        "en-US",
        { month: "long", day: "numeric", year: "numeric" },
      );

      pdf.setFontSize(16);
      pdf.setTextColor(230, 230, 230);
      pdf.text(date, 20, 140);

      // Payment Status Card
      pdf.setFillColor(15, 23, 42);
      pdf.roundedRect(120, 95, 70, 45, 5, 5, "F");

      pdf.setFontSize(9);
      pdf.setTextColor(150, 150, 150);
      pdf.text("TUITION STATUS", 125, 110);

      pdf.setFontSize(20);
      pdf.setTextColor(16, 185, 129);
      pdf.setFont("helvetica", "bold");
      pdf.text("PAID FULL", 125, 122);

      pdf.setFontSize(9);
      pdf.setTextColor(180, 180, 180);
      pdf.text(`Ref: ${registration.paymentReference}`, 125, 132);
      pdf.text(
        `RECEIPT ID: NX-${new Date(registration.createdAt).getFullYear()}-${registration._id.toString().slice(-4)}`.toUpperCase(),
        125,
        138,
      );

      // Next Steps
      pdf.setFillColor(10, 15, 25);
      pdf.roundedRect(20, 165, 170, 70, 6, 6, "F");

      pdf.setTextColor(234, 88, 12);
      pdf.setFontSize(12);
      pdf.text("ADMISSION NEXT STEPS", 25, 178);

      pdf.setTextColor(210, 210, 210);
      pdf.setFontSize(10);

      pdf.text(
        "1. Join the private Nexea Discord using your registered email.",
        25,
        192,
      );

      pdf.text(
        "2. Follow Nexea on X for ecosystem updates and pioneer news.",
        25,
        202,
      );

      pdf.text(
        `3. Orientation call invitation will be sent to ${registration.email}.`,
        25,
        212,
      );

      // Footer
      pdf.setDrawColor(60, 60, 60);
      pdf.line(20, 255, 190, 255);

      pdf.setTextColor(120, 120, 120);
      pdf.setFontSize(8);

      pdf.text(
        "AUTHENTICATED DIGITAL ADMISSION • NEXeA ACADEMY",
        pageWidth / 2,
        265,
        { align: "center" },
      );

      pdf.save(`Nexea_Admission_${registration.name.split(" ")[0]}.pdf`);
    } catch (error) {
      console.error("PDF Error:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isDownloading}
      className="w-full cursor-pointer py-4 bg-orange-600/10 border border-orange-500/20 rounded-2xl flex items-center justify-center gap-3 font-bold hover:bg-orange-600 hover:text-white transition-all group active:scale-[0.98]"
    >
      {isDownloading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <>
          <Download
            size={18}
            className="group-hover:-translate-y-1 transition-transform"
          />
          Download Admission Receipt
        </>
      )}
    </button>
  );
};

export default AdmissionReceipt;
