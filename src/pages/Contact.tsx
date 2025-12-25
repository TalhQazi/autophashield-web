import Section from '../components/Section'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgvnzqdp';

export default function Contact() {
  return (
    <main className="pt-14 sm:pt-20 md:pt-24">
      <Section title="Get in Touch">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xl text-gray-700 leading-relaxed">
            Whether you're a research institution, clinical lab, manufacturer, distributor, or interested in pre-ordering — we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-green mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-brand-gray rounded-lg">
                  <div className="text-brand-orange text-2xl mt-1">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-700">P.O. Box 52, Detroit, ME 04929</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-brand-gray rounded-lg">
                  <div className="text-brand-orange text-2xl mt-1">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">(207) 947-1999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-brand-gray rounded-lg">
                  <div className="text-brand-orange text-2xl mt-1">✉️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:nathan@membershipauto.com" className="text-brand-green hover:text-brand-orange transition-colors underline">
                      nathan@membershipauto.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-green/5 to-brand-orange/5 p-6 rounded-xl border border-brand-green/20">
              <h3 className="text-xl font-bold text-brand-green mb-4">Partnership Opportunities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Research institutions for biomarker validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Clinical labs for testing partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Manufacturing partners for production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Distributors and supplement platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-orange mt-1">•</span>
                  <span>Healthcare professionals and clinicians</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-brand-green mb-2">Send Us a Message</h3>
            <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you shortly.</p>

            <form className="space-y-5" method="POST" action={FORMSPREE_ENDPOINT}>
              <input type="hidden" name="_subject" value="[AutophaShield Contact] New submission" />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your interest in AutophaShield™..."
                  required
                  rows={5}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="bg-brand-gray p-4 rounded-lg">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="preorder_interest"
                    value="yes"
                    className="h-5 w-5 mt-0.5 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I'm interested in <strong>pre-ordering AutophaShield™</strong> or exploring partnership opportunities
                  </span>
                </label>
              </div>

              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              {FORMSPREE_ENDPOINT ? (
                <button
                  type="submit"
                  formAction={FORMSPREE_ENDPOINT + '?redirect=' + encodeURIComponent('/thank-you')}
                  className="w-full px-8 py-4 rounded-lg bg-brand-orange text-white font-bold text-lg shadow-lg hover:shadow-xl hover:bg-brand-orange/90 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message →
                </button>
              ) : (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
                  <p className="text-sm font-semibold text-red-600">⚠️ Form endpoint not configured</p>
                  <p className="text-xs text-red-500 mt-1">Add VITE_FORMSPREE_ENDPOINT to .env file</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>

      {/* Additional CTA Section */}
      <Section background="muted">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-brand-green mb-4">
            Ready to Join the Longevity Revolution?
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            AutophaShield™ represents a breakthrough in cellular health optimization. Let's discuss how we can work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nathan@membershipauto.com"
              className="inline-flex items-center px-6 py-3 bg-brand-green text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-brand-green/90 transition-all transform hover:-translate-y-1"
            >
              Email Us Directly
            </a>
            <a
              href="tel:+12079471999"
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-brand-green text-brand-green font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-brand-green hover:text-white transition-all transform hover:-translate-y-1"
            >
              Call Us: (207) 947-1999
            </a>
          </div>
        </div>
      </Section>
    </main>
  )
}


