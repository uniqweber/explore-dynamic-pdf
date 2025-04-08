import prescription from "./utils/data/prescription.json";
import { FaDownload } from "react-icons/fa";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen   flex items-center justify-center p-6 font-nato">
      <div className="max-w-4xl flex flex-col justify-between w-full h-[1100px] mx-auto bg-white  rounded-2xl shadow-2xl p-10">
        <div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
            <img src={prescription.doctor.logo} alt="Logo" className="size-24 rounded-md" />
            <div className="text-center flex-1">
              <h1 className="text-3xl font-extrabold text-indigo-700">{prescription.doctor.name}</h1>
              <p className="text-sm text-gray-700 font-medium">{prescription.doctor.qualification}</p>
              <p className="text-sm text-gray-600">{prescription.doctor.chamber}</p>
              <p className="text-sm text-gray-600">মোবাইল: {prescription.doctor.mobile}</p>
            </div>

            <img src={prescription.doctor.qr_code} alt="Logo" className="size-24 object-cover " />
          </div>

          <div className="grid grid-cols-2 text-sm text-gray-700 mb-5">
            <p className="">
              <span className="font-semibold text-gray-800">নাম:</span> {prescription.patient.name}
            </p>
            <p className="">
              <span className="font-semibold text-gray-800">বয়স:</span> {prescription.patient.age}
            </p>
            <p className="">
              <span className="font-semibold text-gray-800">লিঙ্গ:</span> {prescription.patient.gender}
            </p>
            <p className="">
              <span className="font-semibold text-gray-800">ওজন:</span> {prescription.patient.weight}
            </p>
            <p className="">
              <span className="font-semibold text-gray-800">উচ্চতা:</span> {prescription.patient.height}
            </p>
            <p className="">
              <span className="font-semibold text-gray-800">তারিখ:</span> {prescription.patient.date}
            </p>
          </div>

          <div className="mb-6 text-sm text-gray-800  ">
            <h3 className="text-base font-semibold mb-1 text-indigo-600">রোগীর বর্ণনা</h3>
            <p className="text-gray-700">{prescription.summary.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4 border-b border-gray-200 pb-1">ঔষধ</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              {prescription.medicine.map((tab, index) => (
                <li key={index}>
                  <span className="font-semibold text-gray-800">❖ {tab.medicine}</span> – {tab.instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="mb-6 bg-green-50 border border-green-200 p-4 rounded-md">
            <h3 className="text-base font-semibold text-green-700 mb-2">পরামর্শসমূহ</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {prescription.advice.map((ad, index) => (
                <li key={index}>{ad}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200 text-sm text-gray-700">
            <div>
              <p className="text-xs text-gray-500">© ২০২৫ ডাঃ আনিক রহমান | প্রেসক্রিপশন শুধুমাত্র ব্যক্তিগত ব্যবহারের জন্য</p>
            </div>
            <div className="text-right">
              <p className="mb-1">....................................................</p>
              <p>ডাঃ আনিক রহমান</p>
              <p className="text-xs">স্বাক্ষর</p>
            </div>
          </div>
        </div>
      </div>
      {/* download pdf  */}
      <button className="absolute top-5 right-5 bg-indigo-600 text-white text-sm font-sans h-8 px-4 rounded-md inline-flex items-center justify-center gap-1.5">
        <FaDownload className="text-xs"/>
        <span>Download PDF</span>
      </button>
    </div>
  );
};

export default App;
