export const DoctorInfo = ({doctor}: {doctor: {logo: string; name: string; qualification: string; chamber: string; mobile: string}}) => {
  return (
    <div className="flex items-start gap-3">
      <img src={doctor.logo} alt="Logo" className="size-22 rounded-md" />
      <div className="">
        <h1 className="text-xl font-bold text-emerald-600">{doctor.name}</h1>
        <p className="text-sm text-gray-700 font-medium">{doctor.qualification}</p>
        <p className="text-sm text-gray-700">{doctor.chamber}</p>
        <p className="text-sm text-gray-700">মোবাইল: {doctor.mobile}</p>
      </div>
    </div>
  );
};

export const PatientInfo = ({placeholder, title}: {placeholder: string; title: string | number}) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="font-semibold text-gray-800 ">{placeholder}:</span>
      <span className="w-full border-b border-dashed  border-gray-300 inline-block">{title}</span>
    </div>
  );
};

export const PatientDisease = ({summary}: {summary: string}) => {
  return (
    <div className="mb-6 text-sm text-gray-800  ">
      <h3 className="text-base font-semibold mb-1 text-emerald-600">রোগীর বর্ণনা</h3>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
};

export const PrescribeMedicine = ({medicines}: {medicines: {medicine: string; instruction: string}[]}) => {
  return (
    <ul className="space-y-2 text-gray-700 text-sm">
      {medicines.map((tab, index) => (
        <li key={index}>
          <span className="font-semibold text-gray-800">❖ {tab.medicine}</span> – {tab.instruction}
        </li>
      ))}
    </ul>
  );
};

export const DoctorAdvises = ({advices}: {advices: string[]}) => {
  return (
    <div className="mb-6 bg-emerald-50 border border-emerald-200 p-4 rounded-md">
      <h3 className="text-base font-semibold text-emerald-600 mb-2">পরামর্শসমূহ</h3>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {advices.map((ad, index) => (
          <li key={index}>{ad}</li>
        ))}
      </ul>
    </div>
  );
};

export const PrescriptionFooter = ({doctorName}: {doctorName: string}) => {
  return (
    <div className="flex items-center justify-between pt-6 border-t border-gray-200 text-sm text-gray-700">
      <div>
        <p className="text-xs text-gray-500">© ২০২৫ {doctorName} | প্রেসক্রিপশন শুধুমাত্র ব্যক্তিগত ব্যবহারের জন্য</p>
      </div>
      <div className="text-right">
        <p className="mb-1">....................................................</p>
        <p>{doctorName}</p>
        <p className="text-xs">স্বাক্ষর</p>
      </div>
    </div>
  );
};
