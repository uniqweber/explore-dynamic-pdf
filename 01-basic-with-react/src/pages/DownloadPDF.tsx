import {Page, Text, View, Document, PDFViewer, PDFDownloadLink, Image} from "@react-pdf/renderer";
import {Button} from "../components/ui/Button";
import prescriptionData from "../utils/data/prescription.json";
import {styles} from "./PdfStyles";

export const MyPDF = () => {
  if (!prescriptionData?.doctor || !prescriptionData?.summary) {
    return <Text>Invalid prescription data</Text>;
  }
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
          <View>
            <View style={[styles.flex, styles.itemsCenter, styles.justifyBetween, styles.borderBottom, styles.marginBottom, styles.paddingBottom]}>
              <View style={[styles.flex, styles.itemsCenter, styles.gap12]}>
                <Image src={prescriptionData?.doctor?.logo || "/images/placeholder.jpeg"} style={[styles.imgSize, styles.roundedMd]} />
                <View>
                  <Text style={[styles.textEmerald, styles.fontBold, styles.textBase]}>{prescriptionData?.doctor?.name || ""}</Text>
                  <Text style={[styles.fontMedium, styles.textGrayDark, styles.textXs, styles.fontSans]}>
                    {prescriptionData?.doctor?.qualification || ""}
                  </Text>
                  <Text style={[styles.textXs, styles.fontSans, styles.textGrayDark]}>{prescriptionData?.doctor?.chamber || ""}</Text>
                  <Text style={[styles.textXs, styles.fontSans, styles.textGrayDark]}>মোবাইল:{prescriptionData?.doctor?.mobile || ""}</Text>
                </View>
              </View>
              <Image src={prescriptionData?.doctor?.qr_code || "qr-code.png"} style={[styles.imgSize]} />
            </View>
            <View style={[styles.marginBottom]}>
              <View style={[styles.flex, ]}>
                <View style={[styles.flex, {gap: 6, width: "33%"}]}>
                  <Text style={[styles.textGrayDark, styles.fontMedium]}>নাম:</Text>
                  <Text>{prescriptionData.patient.name}</Text>
                </View>
                <View style={[styles.flex, {gap: 6, width: "33%"}]}>
                  <Text style={[styles.textGrayDark, styles.fontMedium]}>লিঙ্গ:</Text>
                  <Text>{prescriptionData.patient.gender}</Text>
                </View>
                <View style={[styles.flex, {gap: 6, width: "33%"}]}>
                  <Text style={[styles.textGrayDark, styles.fontMedium]}>বয়স:</Text>
                  <Text>{prescriptionData.patient.age}</Text>
                </View>
              </View>
              <View style={[styles.flex]}>
                <View style={[styles.flex, {gap: 6, width: "33%"}]}>
                  <Text style={[styles.textGrayDark, styles.fontMedium]}>ওজন:</Text>
                  <Text>{prescriptionData.patient.weight}</Text>
                </View>
                <View style={[styles.flex, {gap: 6, width: "33%"}]}>
                  <Text style={[styles.textGrayDark, styles.fontMedium]}>উচ্চতা:</Text>
                  <Text>{prescriptionData.patient.height}</Text>
                </View>
                <View style={[styles.flex, {gap: 6, width: "33%"}]}>
                  <Text style={[styles.textGrayDark, styles.fontMedium]}>তারিখ:</Text>
                  <Text>{prescriptionData.patient.date}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.summary, styles.marginBottom]}>
              <Text style={[styles.textEmerald, styles.fontSemibold, styles.textXs, {marginBottom: 3}]}>রোগীর বর্ণনা</Text>
              <Text style={[styles.textGrayLight]}>{prescriptionData.summary.description}</Text>
            </View>
            <View>
              <Text style={[styles.textEmerald, styles.fontSemibold, styles.textSm, styles.borderBottom, {paddingBottom: 5, marginBottom: 14}]}>
                ঔষধ
              </Text>
              <View>
                {prescriptionData.medicine.map((med, index) => (
                  <View key={index} style={[styles.flex, styles.itemsCenter, styles.fontSans, {marginBottom: 8}]}>
                    <View style={{width: 6, height: 6, backgroundColor: "#1f2937", marginRight: 7, transform: "rotate(45deg)"}}></View>
                    <Text style={[styles.fontMedium, styles.textGrayDark]}>{med.medicine}</Text>
                    <Text style={{marginLeft: 5}}> - {med.instruction}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View>
            <View style={[styles.borderBottom, styles.paddingBottom, {marginBottom: 16}]}>
              <View style={[styles.summary]}>
                <Text style={[styles.textEmerald, styles.fontSemibold, styles.textSm, {marginBottom: 8}]}>পরামর্শসমূহ</Text>
                <View>
                  {prescriptionData.advice.map((ad, index) => (
                    <View key={index} style={[styles.flex, styles.itemsCenter, {marginBottom: 5}]}>
                      <View style={{width: 4, height: 4, backgroundColor: "#374151", marginRight: 7, borderRadius: 4}}></View>
                      <Text style={[styles.fontMedium, styles.textGrayLight]}>{ad}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
            <View style={[styles.flex, styles.justifyBetween, {alignItems: "flex-end"}]}>
              <Text style={{fontSize: 10}}>© ২০২৫ {prescriptionData.doctor.name} | প্রেসক্রিপশন শুধুমাত্র ব্যক্তিগত ব্যবহারের জন্য</Text>

              <View style={{alignItems: "flex-end"}}>
                <Text style={[styles.fontSans, styles.textGrayLight]}>..................................................</Text>
                <Text style={[styles.fontMedium, styles.textGrayDark]}>{prescriptionData.doctor.name}</Text>
                <Text style={{fontSize: 10}}>স্বাক্ষর</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const DownloadPDF = () => {
  return (
    <div className="w-full ">
      <PDFViewer width="100%" height="100%">
        <MyPDF />
      </PDFViewer>
      <div>
        <PDFDownloadLink document={<MyPDF />} fileName="Prescription">
          <Button />
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default DownloadPDF;
