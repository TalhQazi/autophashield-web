import Section from '../components/Section'
import HowToCycleSection from '../components/HowToCycleSection'

export default function Ingredients() {
  return (
    <main>
      <Section title="Supplement Facts" background="muted">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl border-2 border-brand-green/20 overflow-hidden">
            {/* Label Header */}
            <div className="bg-brand-green text-white px-6 py-4">
              <h3 className="text-2xl font-bold">Supplement Facts</h3>
              <p className="text-sm opacity-90 mt-1">Serving Size: 2 Capsules | Servings Per Container: 30</p>
            </div>
            
            {/* Facts Table */}
            <div className="p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-800">
                    <th className="text-left py-2 font-bold">Amount Per Serving</th>
                    <th className="text-right py-2 font-bold">% Daily Value*</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold">Berberine HCl</span>
                      <span className="text-gray-600 ml-2">500 mg</span>
                    </td>
                    <td className="text-right py-3">**</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold">Spermidine (from Wheat Germ Extract)</span>
                      <span className="text-gray-600 ml-2">10 mg</span>
                    </td>
                    <td className="text-right py-3">**</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold">Resveratrol (98% trans-resveratrol)</span>
                      <span className="text-gray-600 ml-2">250 mg</span>
                    </td>
                    <td className="text-right py-3">**</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold">Curcumin (from Turmeric Extract)</span>
                      <span className="text-gray-600 ml-2">200 mg</span>
                    </td>
                    <td className="text-right py-3">**</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold">Quercetin</span>
                      <span className="text-gray-600 ml-2">250 mg</span>
                    </td>
                    <td className="text-right py-3">**</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold">Sulforaphane (from Broccoli Extract)</span>
                      <span className="text-gray-600 ml-2">30 mg</span>
                    </td>
                    <td className="text-right py-3">**</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold">EGCG (from Green Tea Extract)</span>
                      <span className="text-gray-600 ml-2">200 mg</span>
                    </td>
                    <td className="text-right py-3">**</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <span className="font-semibold">DHA (from Algal Oil)</span>
                      <span className="text-gray-600 ml-2">300 mg</span>
                    </td>
                    <td className="text-right py-3">**</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-6 text-xs text-gray-600 space-y-1">
                <p>* Percent Daily Values are based on a 2,000 calorie diet.</p>
                <p>** Daily Value not established.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-brand-gray p-6 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Other Ingredients:</strong> Vegetable cellulose (capsule), rice flour, magnesium stearate (vegetable source).
            </p>
            <p className="text-xs text-gray-600 mt-3">
              <strong>Warning:</strong> Consult your healthcare provider before use if pregnant, nursing, or taking medications. Keep out of reach of children.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Ingredient Benefits">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-brand-green group-hover:text-brand-orange transition-colors">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Berberine</h3>
            <p className="text-gray-700 text-sm mb-3">Metabolic Reset</p>
            <p className="text-gray-600 text-xs">Activates AMPK, improves insulin sensitivity, supports healthy metabolism</p>
          </div>

          <div className="group p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-brand-green group-hover:text-brand-orange transition-colors">🔄</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Spermidine</h3>
            <p className="text-gray-700 text-sm mb-3">Autophagy Signaling</p>
            <p className="text-gray-600 text-xs">Triggers cellular recycling, promotes longevity pathways</p>
          </div>

          <div className="group p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-brand-green group-hover:text-brand-orange transition-colors">🧬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Resveratrol</h3>
            <p className="text-gray-700 text-sm mb-3">SIRT1 & RBM3</p>
            <p className="text-gray-600 text-xs">Activates longevity genes, induces cold shock proteins</p>
          </div>

          <div className="group p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-brand-green group-hover:text-brand-orange transition-colors">🌿</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Curcumin</h3>
            <p className="text-gray-700 text-sm mb-3">mTOR Moderation</p>
            <p className="text-gray-600 text-xs">Reduces inflammation, moderates growth pathways</p>
          </div>

          <div className="group p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-brand-green group-hover:text-brand-orange transition-colors">🛡️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quercetin</h3>
            <p className="text-gray-700 text-sm mb-3">Protein Recycling</p>
            <p className="text-gray-600 text-xs">Supports autophagy, powerful antioxidant protection</p>
          </div>

          <div className="group p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-brand-green group-hover:text-brand-orange transition-colors">🔥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sulforaphane</h3>
            <p className="text-gray-700 text-sm mb-3">Hsp72 & Nrf2</p>
            <p className="text-gray-600 text-xs">Activates heat shock proteins, cellular detoxification</p>
          </div>

          <div className="group p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-brand-green group-hover:text-brand-orange transition-colors">🍵</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">EGCG</h3>
            <p className="text-gray-700 text-sm mb-3">Antioxidant & Autophagy</p>
            <p className="text-gray-600 text-xs">Green tea compound, promotes cellular cleanup</p>
          </div>

          <div className="group p-6 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl hover:border-brand-orange/50 transition-all duration-300">
            <div className="text-4xl mb-4 text-brand-green group-hover:text-brand-orange transition-colors">❄️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">DHA</h3>
            <p className="text-gray-700 text-sm mb-3">Cold Shock Protein Support</p>
            <p className="text-gray-600 text-xs">Omega-3 for brain health, neuroprotection</p>
          </div>
        </div>
      </Section>

      <HowToCycleSection />

      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-brand-green mb-4">Quality Assurance</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-3xl mb-2">✓</div>
              <p className="font-semibold text-gray-900">GMP Certified</p>
              <p className="text-xs text-gray-600 mt-1">Manufactured in FDA-registered facility</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-3xl mb-2">🔬</div>
              <p className="font-semibold text-gray-900">Third-Party Tested</p>
              <p className="text-xs text-gray-600 mt-1">Verified for purity and potency</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-3xl mb-2">🌱</div>
              <p className="font-semibold text-gray-900">Premium Ingredients</p>
              <p className="text-xs text-gray-600 mt-1">Clinically studied compounds</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}


