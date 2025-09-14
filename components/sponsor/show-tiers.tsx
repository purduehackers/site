export function ShowTiers(): JSX.Element {
  const handleTierClick = () => {
    window.open(
      'https://hcb.hackclub.com/donations/start/phack-fall-2025',
      '_blank'
    );
  };

  const tiers = [
    {
      title: 'Donor',
      price: 500,
      description: 'Get your brand in front of people',
      features: [
        'Engineers and recruiters are invited to the Show',
        'Logo on event material, promotions, and website',
        'Company merch/material on shared resource table'
      ],
      recommended: false
    },
    {
      title: 'Sponsor',
      price: 1000,
      description: 'Direct student engagement',
      features: [
        'Everything in Donor tier',
        'Small dedicated table space',
        'One Instagram post about company',
        'List of projects demoed at our Checkpoints, and the students who built them',
        'Single Hack Night sponsorship included',
        '20% discount on sponsoring additional events for school year'
      ],
      recommended: true
    },
    {
      title: 'Partner',
      price: 2000,
      description: 'Premium placement and more perks',
      features: [
        'Everything in Sponsor tier',
        'Premium table placement',
        'One Instagram reel about company',
        'Physical and digital copy of journal with projects built by our members over the summer',
        'Directly fund a student project',
        'Hack Month sponsorship included',
        '40% discount on sponsoring additional events for school year'
      ],
      recommended: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-6 max-w-6xl mx-auto print:max-w-full">
      {tiers.map(tier => (
        <div
          key={tier.title}
          onClick={handleTierClick}
          className={`font-main h-full cursor-pointer transition-transform duration-200 ease-in-out hover:scale-95 ${
            tier.recommended
              ? 'bg-gradient-to-br from-amber-400 to-amber-400 via-amber-200 relative transform scale-105 print:scale-100'
              : 'bg-amber-300'
          } rounded-sm border-2 border-black flex flex-col gap-4 print:gap-2 p-4 print:p-2 break-inside-avoid shadow-blocks-sm`}
        >
          {tier.recommended ? (
            <div className="absolute -top-2 -right-3 transform rotate-12 print:rotate-[35deg] print:translate-x-4 print:translate-y-2 bg-white border-2 border-black px-1 rounded-sm">
              <p className="text-base print:text-sm">Recommended</p>
            </div>
          ) : null}

          <div className="text-center">
            <h2 className="text-3xl print:text-2xl font-bold mb-2">
              {tier.title}
            </h2>
            <div className="mb-3">
              <span className="text-gray-700 text-2xl print:text-lg font-mono print:font-mono">
                ${tier.price.toLocaleString('en-US')}
              </span>
            </div>
            <p className="text-lg print:text-sm mb-4">{tier.description}</p>
          </div>

          <div className="flex-grow">
            <ul className="space-y-3">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-black mt-1 flex-shrink-0">•</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
