import Section from '../components/Section'

export default function Science() {
  return (
    <main className="pt-14 sm:pt-20 md:pt-24">
      <Section title="Science Overview">
        <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
          AutophaShield™ activates three key biological pathways that promote longevity and cellular health — without requiring fasting, extreme cold, or heat stress.
        </p>

        {/* 3-Column Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Column 1: Autophagy */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-brand-green to-brand-green/80 p-6 rounded-xl shadow-lg text-white text-center">
              <div className="text-5xl mb-3">🔄</div>
              <h3 className="font-bold text-2xl mb-2">Autophagy Activation</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-brand-green/20 shadow-lg">
              <h4 className="font-bold text-brand-green mb-3">Key Ingredients:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Berberine</strong> — AMPK activator</li>
                <li>• <strong>Curcumin</strong> — mTOR modulator</li>
                <li>• <strong>Spermidine</strong> — Direct autophagy trigger</li>
                <li>• <strong>Resveratrol</strong> — SIRT1 activation</li>
              </ul>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-600">
                  Triggers cellular recycling and repair mechanisms, removing damaged proteins and organelles.
                </p>
              </div>
            </div>
            <img
              src="/images/autophagy.png"
              alt="Autophagy Process"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Column 2: Heat Shock Proteins */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-brand-orange to-orange-600 p-6 rounded-xl shadow-lg text-white text-center">
              <div className="text-5xl mb-3">🔥</div>
              <h3 className="font-bold text-2xl mb-2">Heat Shock Proteins</h3>
              <p className="text-sm opacity-90">(Hsp72, Hsp27)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-brand-orange/20 shadow-lg">
              <h4 className="font-bold text-brand-orange mb-3">Key Ingredients:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Sulforaphane</strong> — Hsp72 inducer</li>
                <li>• <strong>Curcumin</strong> — HSP activation</li>
                <li>• <strong>Quercetin</strong> — Stress response</li>
              </ul>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-600">
                  Activates protective heat shock proteins for cellular stress resilience and protein folding quality control.
                </p>
              </div>
            </div>
            <img
              src="/images/heat-shock-proteins.png"
              alt="Heat Shock Proteins Mechanism"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>

          {/* Column 3: Cold Shock Proteins */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-lg text-white text-center">
              <div className="text-5xl mb-3">❄️</div>
              <h3 className="font-bold text-2xl mb-2">Cold Shock Proteins</h3>
              <p className="text-sm opacity-90">(RBM3, CIRP)</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-lg">
              <h4 className="font-bold text-blue-600 mb-3">Key Ingredients:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Resveratrol</strong> — RBM3 activation</li>
                <li>• <strong>DHA</strong> — Neuroprotection</li>
                <li>• <strong>SIRT1 activators</strong> — Cold mimetics</li>
              </ul>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-600">
                  Induces neuroprotective cold shock proteins that enhance brain resilience and neuroplasticity.
                </p>
              </div>
            </div>
            <img
              src="/images/cold-shock-proteins.png"
              alt="Cold Shock Proteins Mechanism"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Pathway Modulation Section */}
        <div className="bg-gradient-to-r from-brand-green/5 to-brand-green/10 p-8 lg:p-12 rounded-xl border border-brand-green/20">
          <h3 className="font-bold text-3xl text-brand-green mb-8 text-center">Pathway Modulation</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-all">
              <div className="text-5xl font-black text-green-600 mb-2">↑</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">AMPK</div>
              <p className="text-xs text-gray-600">Energy sensor activation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-all">
              <div className="text-5xl font-black text-green-600 mb-2">↑</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">SIRT1</div>
              <p className="text-xs text-gray-600">Longevity gene activation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-all">
              <div className="text-5xl font-black text-red-600 mb-2">↓</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">mTOR</div>
              <p className="text-xs text-gray-600">Growth pathway moderation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-all">
              <div className="text-5xl font-black text-green-600 mb-2">↑</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">Hsp72</div>
              <p className="text-xs text-gray-600">Protein quality control</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-1 transition-all">
              <div className="text-5xl font-black text-green-600 mb-2">↑</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">RBM3</div>
              <p className="text-xs text-gray-600">Neuroprotection boost</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Scientific Backing Section */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-brand-green mb-8 text-center">Scientific Backing</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-brand-orange text-3xl mb-3">📚</div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">200+ Peer-Reviewed Studies</h4>
              <p className="text-gray-700 text-sm">
                Each ingredient is backed by extensive scientific research on AMPK, mTOR, SIRT1, heat shock proteins, and cold shock proteins.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-brand-orange text-3xl mb-3">⚗️</div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Patent-Pending Formula</h4>
              <p className="text-gray-700 text-sm">
                Proprietary combination designed to simulate biological stress responses without physical hardship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-brand-orange text-3xl mb-3">🔬</div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Clinical Validation</h4>
              <p className="text-gray-700 text-sm">
                Lab partnerships in development for real-time biomarker validation and clinical trial preparation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-brand-orange text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">Precision Dosing</h4>
              <p className="text-gray-700 text-sm">
                Each compound dosed at clinically relevant levels based on published human studies and safety profiles.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}


