import React, { useState } from "react";
import { useAdminOperations } from "../../components/Hooks/adminHooks";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { TextField } from "../../components/ui/TextField";
import { getPaymentLinkData } from "../../firestoreConfig";
import { toast } from "react-toastify";

const OpenDialogPaymentLink = ({ open, handleDialog, data }) => {
  const [paymentFormdata, setPaymentFormdata] = useState({
    agreedPrice: "",
  });
  const [disableButton, setDisableButton] = useState(false);
  const handleChange = (field) => (event) => {
    setPaymentFormdata((prevFormdata) => ({
      ...prevFormdata,
      ...data,
      [field]: event.target.value,
    }));
  };
  const handleSubmit = async () => {
    setDisableButton(true);
    const response = await getPaymentLinkData(paymentFormdata);
    console.log(response);
    if (!response) {
      toast.error("Server error occured");
      setDisableButton(false);
    }
    handleDialog();
    toast.success("Payment link send successfully");
  };

  return (
    <div className="flex justify-center container max-w-screen-lg">
      <Dialog open={open} handler={handleDialog} size="sm">
        <DialogHeader>
          <h1 className="text-xl font-bold text-center">
            Generate Payment Link:
          </h1>
        </DialogHeader>
        <DialogBody>
          <div className="overflow-x-auto">
            <TextField
              label={"Enter Price to generate the payment link:"}
              value={paymentFormdata.agreedPrice}
              onChange={handleChange("agreedPrice")}
              type="number"
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="red"
            onClick={handleDialog}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            disabled={disableButton}
            onClick={handleSubmit}
          >
            <span>Send Payment Link</span>
          </Button>
          <p>
            Note: After the price is added, the enrollment detials of the
            specific user will be move to other table
          </p>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

const PaymentConfirm = () => {
  const {
    enrollmentData,
    paymentDialog,
    handlePaymentDialog,
    existingPaymentData,
  } = useAdminOperations();
  const handleDate = (request_date) => {
    const reqDate = new Date(
      request_date.seconds * 1000 + request_date.nanoseconds / 1000000
    ).toLocaleDateString();
    return reqDate;
  };

  return (
    <div className="p-10">
      <OpenDialogPaymentLink
        open={paymentDialog}
        handleDialog={handlePaymentDialog}
        data={existingPaymentData}
      />
      <h1 className="text-center text-xl font-bold mb-2">
        Send Payment Link To Enroll Users
      </h1>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>User Mobile Number</th>
            <th>User Enrolled Course</th>
            <th>Payment Status</th>
            <th>Enrollment requested Date</th>
            <th>Send Payment Link</th>
          </tr>
        </thead>
        <tbody>
          {enrollmentData
            ?.filter(
              (data) =>
                data.price_agreed == "" && data.payment_status == "registered"
            )
            .map((data) => (
              <tr>
                <th>{data.userName}</th>
                <th>{data.userEmail}</th>
                <th>{data.userMobile}</th>
                <th>{data.course_name}</th>
                <th>{data.payment_status}</th>
                <th>{handleDate(data.request_date)}</th>
                <th>
                  <Button
                    variant="gradient"
                    className="bg-primary"
                    onClick={() => handlePaymentDialog(data)}
                  >
                    Click Here to Send Payment Link to User
                  </Button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentConfirm;
