// app/director/page.tsx
import { FaLinkedin, FaTwitter, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { IoMdPhonePortrait } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

export default function ManagingDirectorPage() {
  const director = {
    name: "Alexandra Chen",
    title: "Managing Director",
    company: "Global Innovations Inc.",
    bio: `With over 15 years of executive experience in the technology sector, Alexandra Chen has successfully led our company through remarkable growth and digital transformation. Her visionary leadership and commitment to innovation have positioned us as industry pioneers.

Prior to joining Global Innovations, Alexandra served as Vice President of Strategy at TechFuture, where she spearheaded initiatives that drove a 40% increase in market share. She holds an MBA from Stanford University and is a frequent speaker at international business conferences.

Under her leadership, our company has expanded to three new markets, launched award-winning products, and maintained a 95% employee satisfaction rate for five consecutive years.`,
    imageUrl: "/director-profile.jpg", // Replace with your image path
    email: "alexandra.chen@globalinnovations.com",
    phone: "+1 (415) 555-0199",
    location: "San Francisco, CA",
    linkedin: "https://www.linkedin.com/in/alexandrachen",
    twitter: "https://twitter.com/alexchen_md",
    achievements: [
      "Named 'Tech Leader of the Year' 2023",
      "Led company to 300% revenue growth in 5 years",
      "Established industry-leading sustainability program"
    ]
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Company Leadership</h1>
          <p className="mt-3 text-xl text-gray-600">Meet our Managing Director</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-2/5 bg-gradient-to-b from-indigo-100 to-blue-100 flex flex-col items-center p-8">
              <img
                className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
                src={director.imageUrl}
                alt={`Portrait of ${director.name}`}
              />
              <h2 className="mt-6 text-2xl font-bold text-gray-900">{director.name}</h2>
              <p className="text-indigo-600 font-medium">{director.title}</p>
              <p className="text-gray-600 mt-1">{director.company}</p>

              {/* Social Links */}
              <div className="mt-6 flex space-x-4">
                {director.linkedin && (
                  <a
                    href={director.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                )}
                {director.twitter && (
                  <a
                    href={director.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="h-6 w-6" />
                  </a>
                )}
                <a
                  href={`mailto:${director.email}`}
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-3/5 p-8 md:p-10">
              {/* Bio */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Professional Profile</h3>
                <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                  {director.bio}
                </p>
              </div>

              {/* Achievements */}
              {director.achievements && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Key Achievements</h3>
                  <ul className="mt-4 space-y-2">
                    {director.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact Information */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <FaEnvelope className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <a
                      href={`mailto:${director.email}`}
                      className="ml-3 text-gray-700 hover:text-indigo-600 transition-colors"
                    >
                      {director.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <IoMdPhonePortrait className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <a
                      href={`tel:${director.phone.replace(/\s+/g, '')}`}
                      className="ml-3 text-gray-700 hover:text-indigo-600 transition-colors"
                    >
                      {director.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MdLocationOn className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">{director.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <span className="ml-3 text-gray-700">{director.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}