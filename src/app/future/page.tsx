export default function Future() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Future Development
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Roadmap Item 1 */}
        <div className="bg-[#1a1b2e] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-[#39FF14]">Q2 2024</h3>
          <ul className="space-y-3 text-gray-300">
            <li>• Launch of core protocol</li>
            <li>• Initial liquidity pools</li>
            <li>• Basic swap functionality</li>
            <li>• Security audits</li>
          </ul>
        </div>

        {/* Roadmap Item 2 */}
        <div className="bg-[#1a1b2e] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-[#39FF14]">Q3 2024</h3>
          <ul className="space-y-3 text-gray-300">
            <li>• Advanced trading features</li>
            <li>• Cross-chain integration</li>
            <li>• Governance token launch</li>
            <li>• Community incentives</li>
          </ul>
        </div>

        {/* Roadmap Item 3 */}
        <div className="bg-[#1a1b2e] p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-[#39FF14]">Q4 2024</h3>
          <ul className="space-y-3 text-gray-300">
            <li>• Yield farming</li>
            <li>• DAO implementation</li>
            <li>• Mobile app launch</li>
            <li>• Partnership expansion</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 