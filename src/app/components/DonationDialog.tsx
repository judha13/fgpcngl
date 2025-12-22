'use client';

import { useState } from 'react';

interface DonationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const donationAmounts = [
  { value: 4000, label: '₹4,000' },
  { value: 2500, label: '₹2,500' },
  { value: 2000, label: '₹2,000' },
  { value: 1200, label: '₹1,200' },
  { value: 900, label: '₹900' },
  { value: 450, label: '₹450' },
];

const bankDetails = {
  bankName: 'Bank of Baroda',
  accountName: 'Full Gospel Pentecostal Church',
  accountNumber: '24420100006711',
  ifscCode: 'BARB0NAGCOI',
  branch: 'Nagercoil',
  upiId: 'fullg95665711@barodampay',
};

export default function DonationDialog({ isOpen, onClose }: DonationDialogProps) {
  const [isMonthly, setIsMonthly] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(4000);
  const [customAmount, setCustomAmount] = useState('');
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showTransferInfo, setShowTransferInfo] = useState(false);

  if (!isOpen) return null;

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className={`bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${!showTransferInfo ? 'grid grid-cols-1 md:grid-cols-2' : ''} shadow-2xl`}>

          {!showTransferInfo ? (
            <>
          {/* Left Column - Information */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col justify-between">
            <div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl mb-6"
              >
                ✕
              </button>

              <div className="flex justify-center mb-8">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <i className="fas fa-heart text-4xl text-[#84373D]"></i>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-[#222831] mb-6 font-montserrat">
                Full Gospel Pentecostal Church
              </h2>

              <p className="text-gray-700 text-center mb-8 leading-relaxed">
                Our mission is to serve and spread the Gospel of Jesus Christ through love, faith, and service. Your generous donations support our ministry, community outreach, and spiritual growth programs.
              </p>

              <div className="text-sm text-gray-600 text-center italic">
                Your contributions help us serve the community and advance God&apos;s kingdom.
              </div>
            </div>

            <div className="text-xs text-gray-500 text-center mt-8">
              <p>Contributions support our ministry work</p>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <i className="fas fa-shield-alt text-green-500 text-lg"></i>
                <h3 className="text-2xl font-bold text-[#222831] font-montserrat">Secure donation</h3>
              </div>

              {/* Give Once / Monthly Toggle */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                    !isMonthly
                      ? 'bg-white text-[#84373D] border-2 border-[#84373D]'
                      : 'bg-gray-100 text-gray-600 border-2 border-transparent'
                  }`}
                >
                  Give once
                </button>
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                    isMonthly
                      ? 'bg-[#84373D] text-white border-2 border-[#84373D]'
                      : 'bg-gray-100 text-gray-600 border-2 border-transparent'
                  }`}
                >
                  <i className="fas fa-heart text-pink-400 mr-2"></i>Monthly
                </button>
              </div>

              {/* Donation Amounts Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount.value}
                    onClick={() => {
                      setSelectedAmount(amount.value);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-2 rounded-lg font-semibold text-sm transition ${
                      selectedAmount === amount.value && !customAmount
                        ? 'bg-[#84373D] text-white'
                        : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-[#84373D]'
                    }`}
                  >
                    {amount.label}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="flex gap-2 mb-6">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) setSelectedAmount(0);
                  }}
                  placeholder="Enter custom amount"
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#84373D] font-semibold text-lg"
                />
                <select className="px-3 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#84373D] bg-white font-semibold">
                  <option>INR</option>
                </select>
              </div>

              {/* Display Amount */}
              <div className="text-center mb-8">
                <p className="text-gray-600 text-sm mb-1">Total amount</p>
                <p className="text-3xl font-bold text-[#84373D] font-montserrat">
                  ₹{finalAmount.toLocaleString()}
                </p>
              </div>

              {/* Bank Details Toggle */}
              <button
                onClick={() => setShowBankDetails(!showBankDetails)}
                className="w-full text-sm text-blue-600 hover:text-blue-800 underline mb-4 text-center"
              >
                {showBankDetails ? 'Hide' : 'View'} Bank Transfer Details
              </button>

              {showBankDetails && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm space-y-2 border-l-4 border-[#84373D]">
                  <div>
                    <p className="text-gray-600 font-semibold">Bank</p>
                    <p className="text-gray-800">{bankDetails.bankName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Account Name</p>
                    <p className="text-gray-800">{bankDetails.accountName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Account Number</p>
                    <p className="text-gray-800 font-mono">{bankDetails.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">IFSC Code</p>
                    <p className="text-gray-800 font-mono">{bankDetails.ifscCode}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Branch</p>
                    <p className="text-gray-800">{bankDetails.branch}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">UPI ID</p>
                    <p className="text-gray-800 font-mono">{bankDetails.upiId}</p>
                  </div>
                </div>
              )}

              {/* Donate Button */}
              <button
                onClick={() => setShowTransferInfo(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition text-lg"
              >
                {isMonthly ? 'Donate monthly' : 'Donate now'}
              </button>
            </div>
          </div>
            </>
          ) : (
            <div className="p-8 w-full">
              <button
                onClick={() => setShowTransferInfo(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl mb-6"
              >
                ✕
              </button>

              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-bank text-3xl text-blue-600"></i>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-[#222831] mb-2 font-montserrat">
                Bank Transfer Details
              </h2>

              <p className="text-center text-gray-600 mb-8">
                Online donation feature is coming soon. Please use manual bank transfer.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg space-y-4 mb-8">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Bank Name</p>
                  <p className="text-lg text-gray-900 font-semibold">{bankDetails.bankName}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Account Name</p>
                  <p className="text-lg text-gray-900 font-semibold">{bankDetails.accountName}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Account Number</p>
                  <p className="text-lg text-gray-900 font-mono font-semibold">{bankDetails.accountNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">IFSC Code</p>
                  <p className="text-lg text-gray-900 font-mono font-semibold">{bankDetails.ifscCode}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Branch</p>
                  <p className="text-lg text-gray-900 font-semibold">{bankDetails.branch}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">UPI ID</p>
                  <p className="text-lg text-gray-900 font-mono font-semibold">{bankDetails.upiId}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowTransferInfo(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition"
                >
                  Back
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
