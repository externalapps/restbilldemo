import React, { useState } from 'react';
import { quotationPlans } from '../data/menuData';
import { 
  Package, 
  Zap, 
  Check, 
  AlertTriangle, 
  FileText,
  Download
} from 'lucide-react';

const QuotationsPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    restaurant: '',
    preferredContact: 'email'
  });

  const planIcons = {
    basic: Package,
    medium: Zap,
    high: Package
  };

  const planColors = {
    basic: 'border-blue-200 bg-blue-50',
    medium: 'border-orange-200 bg-orange-50',
    high: 'border-purple-200 bg-purple-50'
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
    setShowConfirmation(true);
  };

  const confirmPlan = () => {
    setShowConfirmation(false);
    setShowContactForm(true);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send data to webhook service
      const webhookData = {
        plan: selectedPlan.name,
        restaurantName: contactInfo.restaurant,
        contactName: contactInfo.name,
        email: contactInfo.email,
        phone: contactInfo.phone,
        preferredContact: contactInfo.preferredContact,
        timestamp: new Date().toISOString(),
        totalInvestment: selectedPlan.totalCost,
        softwareCost: selectedPlan.cost,
        hardwareCost: selectedPlan.hardwareTotal
      };

      // Send to our Vercel API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      if (response.ok) {
        // Show success message
        const responseData = await response.json();
        alert(responseData.message || `Thank you ${contactInfo.name}! We have received your interest in the ${selectedPlan.name}.\n\nWe will contact you within 24 hours at ${contactInfo.preferredContact === 'email' ? contactInfo.email : contactInfo.phone} to discuss your requirements and schedule a consultation.\n\nYour selection has been saved and our team will prepare a detailed proposal for you.`);
        
        // Reset form
        setContactInfo({
          name: '',
          email: '',
          phone: '',
          restaurant: '',
          preferredContact: 'email'
        });
        setShowContactForm(false);
        setSelectedPlan(null);
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      alert('There was an error sending your information. Please try again or contact us directly.');
    }
  };

  const downloadProposal = (plan) => {
    // Create a proposal document content
    const proposalContent = `
RESTAURANT POS SYSTEM PROPOSAL
================================

Plan: ${plan.name}
Software Cost: ₹${plan.cost}
Hardware Required: ${plan.hardwareTotal}
Total Investment: ${plan.totalCost}

Hardware Requirements:
${plan.hardware.map(item => `• ${item.name} - ${item.price}
  Specs: ${item.specs}`).join('\n\n')}

Software Features:
${plan.software.map(feature => `• ${feature}`).join('\n')}

Next Steps:
1. Contact our sales team
2. Schedule consultation
3. Customize requirements
4. Sign agreement
5. Begin development

Contact: ceo@beyondxia.online
Phone: +91 9505009699
    `;

    // Download as text file
    const blob = new Blob([proposalContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${plan.name}_Proposal.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">BeyondX POS System Quotations</h1>
        <p className="text-gray-600">
          Choose the perfect POS solution for your restaurant
        </p>
      </div>

      {/* Comparative Study */}
      <div className="card p-6 mb-8 bg-green-50 border-green-200">
        <h3 className="text-xl font-bold text-green-800 mb-4 text-center">Comparative Study – Other Companies vs. Our Service</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-green-200">
                <th className="text-left py-3 px-4 font-semibold text-green-800">Factor</th>
                <th className="text-center py-3 px-4 font-semibold text-red-600">Other Companies</th>
                <th className="text-center py-3 px-4 font-semibold text-green-600">Our Software</th>
                <th className="text-center py-3 px-4 font-semibold text-blue-600">Why Client Saves with Us</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-green-100">
                <td className="py-3 px-4 font-medium text-green-800">Internet Dependence</td>
                <td className="text-center py-3 px-4 text-red-600">Needs 24×7 internet (extra ₹1,000–₹2,000/month for broadband + backup dongle).</td>
                <td className="text-center py-3 px-4 text-green-600">Works fully offline. Only power needed.</td>
                <td className="text-center py-3 px-4 text-blue-600">💰 Saves monthly internet costs + no downtime if internet fails.</td>
              </tr>
              <tr className="border-b border-green-100">
                <td className="py-3 px-4 font-medium text-green-800">Pricing Model</td>
                <td className="text-center py-3 px-4 text-red-600">Subscription (₹1,200–₹6,000/month) + setup fees.</td>
                <td className="text-center py-3 px-4 text-green-600">One-time software cost (lifetime).</td>
                <td className="text-center py-3 px-4 text-blue-600">💰 No recurring subscription — lifetime savings.</td>
              </tr>
              <tr className="border-b border-green-100">
                <td className="py-3 px-4 font-medium text-green-800">Maintenance</td>
                <td className="text-center py-3 px-4 text-red-600">Cloud/server issues → depend on vendor support.</td>
                <td className="text-center py-3 px-4 text-green-600">Simple local software, Excel-based backend → easy to maintain.</td>
                <td className="text-center py-3 px-4 text-blue-600">💰 Less dependency, owner can manage without AMC.</td>
              </tr>
              <tr className="border-b border-green-100">
                <td className="py-3 px-4 font-medium text-green-800">Hardware Costs</td>
                <td className="text-center py-3 px-4 text-red-600">Often lock-in with vendor hardware (branded POS devices).</td>
                <td className="text-center py-3 px-4 text-green-600">Uses normal PC + printer + optional display (from Amazon/Flipkart).</td>
                <td className="text-center py-3 px-4 text-blue-600">💰 Flexible hardware, buy cheap/reliable options, no lock-in.</td>
              </tr>
              <tr className="border-b border-green-100">
                <td className="py-3 px-4 font-medium text-green-800">GST & Menu Updates</td>
                <td className="text-center py-3 px-4 text-red-600">Need vendor support / online updates.</td>
                <td className="text-center py-3 px-4 text-green-600">Owner can add/delete items, edit GST easily in software.</td>
                <td className="text-center py-3 px-4 text-blue-600">💰 Saves service charges, avoids waiting time.</td>
              </tr>
              <tr className="border-b border-green-100">
                <td className="py-3 px-4 font-medium text-green-800">Kitchen Display</td>
                <td className="text-center py-3 px-4 text-red-600">Needs cloud sync or special hardware (expensive).</td>
                <td className="text-center py-3 px-4 text-green-600">Simple local display → direct link or router/bluetooth.</td>
                <td className="text-center py-3 px-4 text-blue-600">💰 Lower hardware + no internet costs.</td>
              </tr>
              <tr className="border-b border-green-100">
                <td className="py-3 px-4 font-medium text-green-800">Downtime Risk</td>
                <td className="text-center py-3 px-4 text-red-600">Internet/server down → billing stops.</td>
                <td className="text-center py-3 px-4 text-green-600">Works as long as power is on.</td>
                <td className="text-center py-3 px-4 text-blue-600">💰 Prevents revenue loss during downtime.</td>
              </tr>
              <tr className="border-b border-green-100">
                <td className="py-3 px-4 font-medium text-green-800">Training</td>
                <td className="text-center py-3 px-4 text-red-600">Complex dashboards. Need staff training.</td>
                <td className="text-center py-3 px-4 text-green-600">Simple, Excel-like system → staff can learn in 1–2 hours.</td>
                <td className="text-center py-3 px-4 text-blue-600">💰 Less training cost & faster staff replacement.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
          <h4 className="text-lg font-bold text-green-800 mb-3">🟢 Key Money-Saving Points for Client</h4>
          <ul className="space-y-2 text-green-700">
            <li>• <strong>One-time purchase</strong>, no subscription forever.</li>
            <li>• <strong>No AMC</strong> or high vendor support fees.</li>
            <li>• <strong>No dependency</strong> on internet bills or downtime.</li>
            <li>• <strong>Freedom to choose</strong> cheaper hardware from Amazon (not vendor-locked).</li>
            <li>• <strong>Owner can self-manage</strong> menu, GST, and reports → no extra payments.</li>
          </ul>
        </div>
      </div>

      {/* Important Notice */}
      <div className="card p-6 mb-8 bg-yellow-50 border-yellow-200">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
            <p className="text-yellow-700 mb-2">
              <strong>Hardware is NOT included in our service.</strong> Our quotations cover only software development, 
              installation, training, and support. Clients are responsible for purchasing hardware separately.
            </p>
            <p className="text-yellow-700 text-sm">
              We provide detailed hardware specifications and can recommend reliable suppliers for your hardware needs.
            </p>
          </div>
        </div>
      </div>

      {/* Plans Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {quotationPlans.map((plan) => {
          const Icon = planIcons[plan.id];
          return (
            <div
              key={plan.id}
              className={`card p-6 border-2 ${planColors[plan.id]} hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-sm">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{plan.description}</p>
                <div className="text-3xl font-bold text-primary-600 mb-1">₹{plan.cost}</div>
                <p className="text-sm text-gray-500">Software & Services</p>
              </div>

              {/* Hardware Requirements (Not Included) */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Package className="w-4 h-4 mr-2 text-red-600" />
                  Hardware Required (Purchase Separately)
                </h4>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                  <p className="text-sm text-red-700 font-medium mb-2">Total Hardware Cost: {plan.hardwareTotal}</p>
                  <div className="space-y-3">
                    {plan.hardware.map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-3 border border-red-100">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-red-800 text-sm">{item.name}</h5>
                          <span className="font-bold text-red-700 text-sm">{item.price}</span>
                        </div>
                        <p className="text-xs text-red-600 mb-2">{item.specs}</p>
                        <p className="text-xs text-red-600 mb-3">{item.description}</p>
                        <a 
                          href={item.amazonLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          <Package className="w-3 h-3 mr-1" />
                          Buy on Amazon →
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Software Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-primary-600" />
                  Software Features (Included)
                </h4>
                <ul className="space-y-2">
                  {plan.software.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Total Cost Breakdown */}
              <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Software & Services:</span>
                  <span className="font-medium">₹{plan.cost}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Hardware (Separate):</span>
                  <span className="font-medium">{plan.hardwareTotal}</span>
                </div>
                <div className="border-t border-gray-300 mt-2 pt-2 flex justify-between items-center font-bold text-lg">
                  <span>Total Investment:</span>
                  <span className="text-primary-600">{plan.totalCost}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handlePlanSelection(plan)}
                  className="w-full btn-primary py-3 text-lg font-semibold"
                >
                  Choose This Plan
                </button>
                <button
                  onClick={() => downloadProposal(plan)}
                  className="w-full btn-secondary py-2 flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Proposal
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Features Comparison Table */}
      <div className="card p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Features Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-blue-700">Basic Plan</th>
                <th className="text-center py-3 px-4 font-semibold text-orange-700">Professional Plan</th>
                <th className="text-center py-3 px-4 font-semibold text-purple-700">Enterprise Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Billing System</td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Menu Management</td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Table Selection</td>
                <td className="text-center py-3 px-4 text-gray-400">-</td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Kitchen Orders Display</td>
                <td className="text-center py-3 px-4 text-gray-400">-</td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Menu Item Add/Edit/Delete</td>
                <td className="text-center py-3 px-4 text-gray-400">-</td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Order History</td>
                <td className="text-center py-3 px-4 text-gray-400">-</td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Analytics & Projections</td>
                <td className="text-center py-3 px-4 text-gray-400">-</td>
                <td className="text-center py-3 px-4 text-gray-400">-</td>
                <td className="text-center py-3 px-4">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Support</td>
                <td className="text-center py-3 px-4 text-sm text-gray-600">Email</td>
                <td className="text-center py-3 px-4 text-sm text-gray-600">Phone + Training</td>
                <td className="text-center py-3 px-4 text-sm text-gray-600">Phone + Training</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Total Investment</td>
                <td className="text-center py-3 px-4 font-bold text-blue-700">₹1,10,197</td>
                <td className="text-center py-3 px-4 font-bold text-orange-700">₹1,72,197</td>
                <td className="text-center py-3 px-4 font-bold text-purple-700">₹3,23,996</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Additional Information */}
      <div className="card p-6 mt-6 bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">What's Included in Our Service</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>
            <p className="font-medium mb-2">Software Development:</p>
            <ul className="space-y-1">
              <li>• Custom POS application development</li>
              <li>• User interface customization</li>
              <li>• Offline desktop application</li>
              <li>• Source code ownership</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Implementation & Support:</p>
            <ul className="space-y-1">
              <li>• Installation and configuration</li>
              <li>• Staff training (1 session)</li>
              <li>• Basic technical support</li>
              <li>• Bug fixes for 3 months</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Confirm Plan Selection
              </h3>
              <p className="text-gray-600">
                You have selected the <strong>{selectedPlan.name}</strong>
              </p>
              <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Software & Services:</strong> ₹{selectedPlan.cost}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Hardware (Separate):</strong> {selectedPlan.hardwareTotal}
                </p>
                <p className="text-sm font-bold text-primary-600">
                  <strong>Total Investment:</strong> {selectedPlan.totalCost}
                </p>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="text-sm text-gray-600">
                <strong>Hardware Required:</strong> {selectedPlan.hardware.length} items
              </div>
              <div className="text-sm text-gray-600">
                <strong>Software Features:</strong> {selectedPlan.software.length} features
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={confirmPlan}
                className="flex-1 btn-primary"
              >
                Proceed to Contact
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal - IMPROVED LAYOUT */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Contact Information
              </h3>
              <p className="text-gray-600">
                Please provide your details to proceed with the <strong>{selectedPlan.name}</strong>
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo.restaurant}
                    onChange={(e) => setContactInfo({...contactInfo, restaurant: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your Restaurant Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your Full Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+91 9505009699"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Contact Method
                </label>
                <select
                  value={contactInfo.preferredContact}
                  onChange={(e) => setContactInfo({...contactInfo, preferredContact: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
              </div>

              <div className="flex space-x-3 pt-6">
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 btn-secondary py-3"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-primary py-3"
                >
                  Submit & Get Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationsPage;
