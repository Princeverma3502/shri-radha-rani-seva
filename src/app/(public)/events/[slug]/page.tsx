import EventDetailsClient from "./EventDetailsClient";

// MOCK DATA
const mockEventData = {
  title: "श्रीमद् भागवत कथा ज्ञान यज्ञ",
  location: "श्री राधा रानी मंदिर प्रांगण, वृंदावन, उत्तर प्रदेश",
  dates: "15 अक्टूबर - 21 अक्टूबर 2026",
  time: "दोपहर 2:00 बजे से सायं 6:00 बजे तक",
  vachak: "पूज्य श्री मृदुल कृष्ण शास्त्री जी",
  description: "श्री राधा रानी सेवा संस्थान द्वारा आयोजित भव्य संगीतमय श्रीमद् भागवत कथा में सपरिवार पधारकर धर्म लाभ उठाएं।",
  days: [
    { day: 1, title: "कलश यात्रा, गोकर्ण आख्यान", status: "booked" },
    { day: 2, title: "सृष्टि वर्णन, वराह एवं कपिल अवतार", status: "available" },
    { day: 3, title: "सती चरित्र, ध्रुव चरित्र, प्रह्लाद चरित्र", status: "available" },
    { day: 4, title: "गजेंद्र मोक्ष, वामन अवतार, राम अवतार, कृष्ण जन्मोत्सव", status: "booked" },
    { day: 5, title: "बाल लीला, माखन चोरी, गोवर्धन पूजा", status: "available" },
    { day: 6, title: "रास पंचाध्यायी, रुक्मणी विवाह", status: "available" },
    { day: 7, title: "सुदामा चरित्र, परीक्षित मोक्ष, व्यास पूजन", status: "available" },
  ]
};

// This tells Next.js which pages to build at compile time
export async function generateStaticParams() {
  return [{ slug: 'shrimad-bhagwat-katha' }];
}

export default function EventDetailsPage() {
  // We pass the data into the Client Component
  return <EventDetailsClient mockEventData={mockEventData} />;
}