import Image from 'next/image';
import FadeIn from '../../../components/animations/FadeIn';

const images = [
  { src: 'https://placehold.co/600x400/FFF/333?text=Image+1', alt: 'A serene cow in a field, representing Gau Seva.' },
  { src: 'https://placehold.co/600x400/FFF/333?text=Image+2', alt: 'An elderly person smiling, representing the Old Age Home seva.' },
  { src: 'https://placehold.co/600x400/FFF/333?text=Image+3', alt: 'A group of volunteers working together.' },
  { src: 'https://placehold.co/600x400/FFF/333?text=Image+4', alt: 'A close-up of a cow, highlighting the importance of animal welfare.' },
  { src: 'https://placehold.co/600x400/FFF/333?text=Image+5', alt: 'An elderly person reading a book in a peaceful environment.' },
  { src: 'https://placehold.co/600x400/FFF/333?text=Image+6', alt: 'Volunteers distributing food to those in need.' },
  { src: 'https://placehold.co/600x400/FFF/333?text=Image+7', alt: 'A beautiful sunset over the landscape of the seva sansthan.' },
  { src: 'https://placehold.co/600x400/FFF/333?text=Image+8', alt: 'A happy child, representing the future generation benefiting from the seva.' },
  { src: 'https://placehold.co/600x400/FFF/333?text=Image+9', alt: 'A traditional Indian lamp, symbolizing hope and light.' },
];

export default function GalleryPage() {
  return (
    <div className="bg-[#FFFCF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Header Section */}
        <FadeIn direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-red-900 mb-4">
              सेवा गैलरी (Our Gallery)
            </h1>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              हमारे सेवा कार्यों की कुछ झलकियाँ। यह तस्वीरें हमारे संकल्प और आपके सहयोग की कहानी कहती हैं।
            </p>
          </div>
        </FadeIn>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {images.map((image, index) => (
            <FadeIn key={index} delay={0.1} direction="up">
              <div className="group relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-5">
                  <p className="text-white text-base font-bold drop-shadow-md">
                    {image.alt}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Call to Action */}
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mt-16 md:mt-24">
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              इस कहानी का हिस्सा बनें
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              आपका सहयोग हमें इन जैसे और भी पलों को बनाने में मदद करता है।
            </p>
            <a 
              href="/donate"
              className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold rounded-full shadow-lg transition-transform hover:-translate-y-1"
            >
              अभी दान करें (Donate Now)
            </a>
          </div>
        </FadeIn>
        
      </div>
    </div>
  );
}