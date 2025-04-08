import {DoctorAdvises, DoctorInfo, PatientDisease, PatientInfo, PrescribeMedicine, PrescriptionFooter} from "../components/ui/PrescriptionComponent";
import prescription from "../utils/data/prescription.json";

const Prescription = () => {


  return (
    <div className="bg-gray-100 min-h-screen  flex-center p-6 font-nato">
      <div className="max-w-4xl flex-between flex-col w-full h-[1100px] mx-auto bg-white  rounded-2xl shadow-2xl p-20">
        <div>
          <div className="flex-between border-b border-gray-200 pb-4 mb-3">
            <DoctorInfo doctor={prescription.doctor} />
            <img src={prescription.doctor.qr_code} alt="Logo" className="size-22 object-cover " />
          </div>

          <div className="grid grid-cols-3 gap-x-10 gap-y-1.5 text-sm text-gray-700 mb-5">
            <PatientInfo placeholder="নাম" title={prescription.patient.name} />
            <PatientInfo placeholder="লিঙ্গ" title={prescription.patient.gender} />
            <PatientInfo placeholder="বয়স" title={prescription.patient.age} />
            <PatientInfo placeholder="ওজন" title={prescription.patient.weight} />
            <PatientInfo placeholder="উচ্চতা" title={prescription.patient.height} />
            <PatientInfo placeholder="তারিখ" title={prescription.patient.date} />
          </div>

          <PatientDisease summary={prescription.summary.description} />

          <div className="mb-6">
            <h2 className="text-base font-semibold text-emerald-600 mb-4 border-b border-gray-200 pb-1">ঔষধ</h2>
            <PrescribeMedicine medicines={prescription.medicine} />
          </div>
        </div>

        <div className="w-full">
          <DoctorAdvises advices={prescription.advice} />
          <PrescriptionFooter doctorName={prescription.doctor.name} />
        </div>
      </div>

    </div>
  );
};

export default Prescription;
