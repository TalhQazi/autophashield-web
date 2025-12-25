import { Link } from 'react-router-dom'
import Section from '../components/Section'

export default function ThankYou() {
  return (
    <main className="pt-14 sm:pt-20 md:pt-24">
      <Section>
        <div className="max-w-2xl mx-auto text-center py-12">
          {/* Success Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Thank You Message */}
          <h1 className="text-5xl font-black text-brand-green mb-4">Thank You!</h1>
          <p className="text-2xl text-gray-800 font-semibold mb-8">Your message has been received.</p>

          {/* Details */}
          <div className="bg-gradient-to-r from-brand-green/5 to-brand-orange/5 border-2 border-brand-green/20 rounded-xl p-8 mb-8">
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="text-brand-orange text-xl mt-1">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">We'll respond shortly</h3>
                  <p className="text-gray-700">Our team will reply from <strong>nathan@membershipauto.com</strong> within 1–2 business days.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-brand-orange text-xl mt-1">📧</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Check your inbox</h3>
                  <p className="text-gray-700">If you don't see our email, please check your spam or promotions folder.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-brand-orange text-xl mt-1">🔒</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Your information is safe</h3>
                  <p className="text-gray-700">We respect your privacy and will never share your information with third parties.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-gray-600 mb-6">While you wait, explore more about AutophaShield™:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-brand-green text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-brand-green/90 transition-all transform hover:-translate-y-1"
              >
                ← Back to Home
              </Link>
              <Link
                to="/science"
                className="inline-flex items-center px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-brand-orange/90 transition-all transform hover:-translate-y-1"
              >
                Explore the Science
              </Link>
              <Link
                to="/ingredients"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-brand-green text-brand-green font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-brand-green hover:text-white transition-all transform hover:-translate-y-1"
              >
                View Ingredients
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}


