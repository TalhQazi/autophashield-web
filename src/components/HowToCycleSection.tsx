import Section from './Section'

export default function HowToCycleSection() {
  return (
    <Section title="🕒 How to Cycle AutophaShield™" background="muted">
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed animate-fadeIn">
          AutophaShield™ is designed to trigger powerful cellular cleanup and regeneration pathways — but like any hormetic stressor, timing matters. Use it in cycles to maximize results and avoid adaptation.
        </p>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-6 relative inline-block">
            <span className="relative z-10">Recommended Cycling Options:</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 to-yellow-100 transform -translate-y-1"></span>
          </h4>
          
          <div className="space-y-5 text-sm sm:text-base">
            <div className="group p-5 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 animate-slideUp delay-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300"></div>
                <h5 className="font-semibold text-gray-900 text-base">2x Weekly Protocol</h5>
              </div>
              <p className="text-gray-700 pl-6 transition-colors duration-300 group-hover:text-gray-900">
                Take every 3–4 days (e.g., Monday and Thursday). This maintains cellular stress signals without overwhelming the system.
              </p>
            </div>

            <div className="group p-5 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-100 animate-slideUp delay-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:scale-125 transition-transform duration-300"></div>
                <h5 className="font-semibold text-gray-900 text-base">3-Day Pulse (Biweekly)</h5>
              </div>
              <p className="text-gray-700 pl-6 transition-colors duration-300 group-hover:text-gray-900">
                Take 3 days in a row, followed by 11 days off. Mimics a short-term fasting or cold exposure reset.
              </p>
            </div>

            <div className="group p-5 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-100 animate-slideUp delay-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-purple-500 group-hover:scale-125 transition-transform duration-300"></div>
                <h5 className="font-semibold text-gray-900 text-base">Monthly Reset Protocol</h5>
              </div>
              <p className="text-gray-700 pl-6 transition-colors duration-300 group-hover:text-gray-900">
                Take daily for 5–7 consecutive days, once per month. Ideal for stacking with detox, fasting, or keto phases.
              </p>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-yellow-500 bg-gradient-to-r from-yellow-50 to-yellow-25 px-5 py-4 rounded-r-lg shadow-md hover:shadow-lg transition-all duration-300 animate-pulse-subtle">
          <div className="flex items-start gap-3">
            <div className="text-yellow-500 text-lg animate-bounce-subtle">⚠️</div>
            <div>
              <p className="font-semibold mb-2 text-yellow-900 text-sm sm:text-base">Not for daily continuous use.</p>
              <p className="text-yellow-800 text-xs sm:text-sm leading-relaxed">
                AutophaShield™ works best when used intermittently — just like exercise or fasting, the benefit comes from the recovery window.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.95;
          }
        }

        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideUp.delay-100 {
          animation-delay: 0.1s;
        }

        .animate-slideUp.delay-200 {
          animation-delay: 0.2s;
        }

        .animate-slideUp.delay-300 {
          animation-delay: 0.3s;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }

        .from-yellow-50 {
          --tw-gradient-from: #fffbeb;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 251, 235, 0));
        }

        .to-yellow-25 {
          --tw-gradient-to: rgba(255, 251, 235, 0.5);
        }

        .hover\:border-blue-100:hover {
          border-color: #dbeafe;
        }

        .hover\:border-yellow-100:hover {
          border-color: #fef3c7;
        }

        .hover\:border-purple-100:hover {
          border-color: #f3e8ff;
        }

        .shadow-lg {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
        }

        .hover\:shadow-xl:hover {
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1), 0 10px 15px -8px rgba(0, 0, 0, 0.03);
        }
      `}</style>
    </Section>
  )
}