import React from "react";
import PaymentItem from "./PaymentItem";
import payment1 from "../assets/images/payments/payment-1.png";
import payment2 from "../assets/images/payments/payment-2.png";
import payment3 from "../assets/images/payments/payment-3.png";

const paymentData1 = [
  {
    name: "Smith Rans",
    course: "Fundamentals of Web Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$345",
    status: "Accepted",
    date: "4 JAN 2023",
    imgsrc: payment1,
  },
  {
    name: "Toms Kid",
    course: "Introduction to UI/UX Design Course",
    invoiceNo: "Invoice #249801",
    amountPaid: "$345",
    status: "Accepted",
    date: "4 JAN 2023",
    imgsrc: payment2,
  },
  {
    name: "Tomide Williams",
    course: "App Web Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$345",
    status: "Accepted",
    date: "4 JAN 2023",
    imgsrc: payment3,
  },
  {
    name: "Adeolu Babs",
    course: "Fundamentals of Web Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$345",
    status: "Declined",
    date: "4 JAN 2023",
    imgsrc: payment1,
  },
  {
    name: "Chuks Emeka",
    course: "App Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$580",
    status: "Pending",
    date: "4 JAN 2023",
    imgsrc: payment3,
  },
  {
    name: "Ben Bush",
    course: "App Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$580",
    status: "Pending",
    date: "4 JAN 2023",
    imgsrc: payment3,
  },
];

const paymentData2 = [
  {
    name: "Ben Bush",
    course: "App Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$580",
    status: "Pending",
    date: "4 JAN 2023",
    imgsrc: payment3,
  },
  {
    name: "Tomide Williams",
    course: "App Web Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$345",
    status: "Accepted",
    date: "4 JAN 2023",
    imgsrc: payment3,
  },
  {
    name: "Toms Kid",
    course: "Introduction to UI/UX Design Course",
    invoiceNo: "Invoice #249801",
    amountPaid: "$345",
    status: "Accepted",
    date: "4 JAN 2023",
    imgsrc: payment2,
  },
  {
    name: "Smith Rans",
    course: "Fundamentals of Web Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$345",
    status: "Accepted",
    date: "4 JAN 2023",
    imgsrc: payment1,
  },
  {
    name: "Adeolu Babs",
    course: "Fundamentals of Web Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$345",
    status: "Declined",
    date: "4 JAN 2023",
    imgsrc: payment1,
  },
  {
    name: "Chuks Emeka",
    course: "App Development",
    invoiceNo: "Invoice #249801",
    amountPaid: "$580",
    status: "Pending",
    date: "4 JAN 2023",
    imgsrc: payment3,
  },
];

function PaymentList(props) {
  return (
    <>
      {props.prevPage && <PaymentItem paymentData={paymentData1} />}
      {props.nextPage && <PaymentItem paymentData={paymentData2} />}
    </>
  );
}

export default PaymentList;
