import { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => {
    window.location.href =
      "intent://yourdomain.com/paymentsuccess#Intent;scheme=https;package=your.android.package.name;end";
  }, []);

  return <p>Redirecting to App...</p>;
};

export default PaymentSuccess;
