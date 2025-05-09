// PaymentHistory.jsx
import React from 'react';

const Subscription = () => {
    const paymentData = [
        { paymentDate: '26 October 2024', startDate: '26 Sep 2024', endDate: '26 Oct 2024', amount: '$30' },
        { paymentDate: '26 October 2024', startDate: '26 Sep 2024', endDate: '26 Oct 2024', amount: '$30' },
        { paymentDate: '26 October 2024', startDate: '26 Sep 2024', endDate: '26 Oct 2024', amount: '$30' },
        { paymentDate: '26 October 2024', startDate: '26 Sep 2024', endDate: '26 Oct 2024', amount: '$30' },
        { paymentDate: '26 October 2024', startDate: '26 Sep 2024', endDate: '26 Oct 2024', amount: '$30' },
      ];
    
      return (
        <div className="p-6 bg-white rounded-[20px] border border-gray-250">
          <h2 className="text-[20px] font-semibold text-black-150 mb-6">Payment History</h2>
          <div className="space-y-4">
            {paymentData.map((payment, index) => (
              <div
                key={index}
                className="py-4 rounded-md border-b border-gray-250"
              >
                <div className="grid grid-cols-4 gap-4 text-sm font-medium">
                  <div>
                    <div className="font-semibold text-sm text-black-150">Payment Date</div>
                    <div className="text-gray-350 mt-1">{payment.paymentDate}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-black-150">Subscription Start Date</div>
                    <div className="text-gray-350 mt-1">{payment.startDate}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-black-150">Subscription End Date</div>
                    <div className="text-gray-350 mt-1">{payment.endDate}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-black-150">Amount Paid</div>
                    <div className="text-gray-350 mt-1">{payment.amount}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Subscription;