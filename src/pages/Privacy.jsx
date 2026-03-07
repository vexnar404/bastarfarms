import {motion} from 'framer-motion'

import headerbg from '../assets/page-header-bg.jpg'

function Privacy() {
  return (
    <div className='w-full overflow-x-hidden'>
        {/* Header Section */}
        <motion.section 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className='relative w-full h-auto bg-cover bg-center py-12 md:py-24' style={{ backgroundImage: `url(${headerbg})` }}
        >
            <motion.div 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className='text-white text-center px-4'
            >
                <h1 className='text-4xl md:text-6xl font-bold'>Privacy/Terms & Conditions</h1>
            </motion.div>
        </motion.section>

        <section className="max-w-5xl mx-auto py-16 px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#50a72c] font-caveat text-2xl md:text-3xl font-bold mb-6">
            Last Updated: 01:01:2025
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            At Bastar Farms, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website, products, and services.
          </p>

          {/* POLICY CONTENT */}
          <div className="space-y-10 text-gray-700">
            
            {/* 1 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">1. Information We Collect</h2>
              <p className="text-base md:text-lg leading-relaxed">
                We may collect the following types of information: <br/>
                • <strong>Personal Information:</strong> Name, email address, phone number, mailing address. <br/>
                • <strong>Non-Personal Information:</strong> IP address, browser type, device information, and browsing behavior through cookies and analytics tools. <br/>
                • <strong>Voluntary Information:</strong> Any information you provide through surveys, feedback forms, or customer support.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">2. How We Use Your Information</h2>
              <p className="text-base md:text-lg leading-relaxed">
                The information we collect is used for: <br/>
                • Providing customer support and responding to your inquiries. <br/>
                • Sending promotional communications, updates, and offers (with your consent). <br/>
                • Improving our products, website, and user experience through analytics. <br/>
                • Complying with legal obligations and ensuring the security of our systems.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">3. Sharing Your Information</h2>
              <p className="text-base md:text-lg leading-relaxed">
                We do not sell or rent your personal information. However, we may share your data with: <br/>
                • <strong>Service Providers:</strong> Third-party vendors who assist with payment processing, shipping, email communications, or analytics. <br/>
                • <strong>Legal Compliance:</strong> Authorities or regulators when required by law. <br/>
                • <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-base md:text-lg leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience. These may include: <br/>
                • Essential cookies for website functionality. <br/>
                • Analytics cookies to measure site performance. <br/>
                • Marketing cookies to deliver relevant advertisements. You can manage your cookie preferences through your browser settings.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">5. Your Rights</h2>
              <p className="text-base md:text-lg leading-relaxed">
                You have the right to: <br/>
                • Access, update, or delete your personal information. <br/>
                • Opt out of marketing communications at any time. <br/>
                • Restrict or object to the processing of your data in certain circumstances. <br/>
                • Request a copy of the data we hold about you. <br/>
                To exercise your rights, please contact us at <a href="mailto:bastarfarmsindia@gmail.com" className="text-[#50a72c] font-bold hover:underline">bastarfarmsindia@gmail.com</a>.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">6. Data Security</h2>
              <p className="text-base md:text-lg leading-relaxed">
                We implement industry-standard security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute data protection.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">7. Third-Party Links</h2>
              <p className="text-base md:text-lg leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices, so we encourage you to review their policies.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">8. Children's Privacy</h2>
              <p className="text-base md:text-lg leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect data from children.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">9. Changes to This Policy</h2>
              <p className="text-base md:text-lg leading-relaxed">
                We reserve the right to update this Privacy Policy at any time. Changes will be reflected on this page, and significant updates will be communicated to you.
              </p>
            </div>

            {/* 10 */}
            <div className="bg-[#f4f7f1] p-8 rounded-2xl border border-[#2a491d]/20">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a1f] mb-4">10. Contact Us</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or your personal information, please reach out to us:
              </p>
              <div className="space-y-2 text-base md:text-lg">
                <p><span className="font-bold text-[#1a3a1f]">Email:</span> <a href="mailto:bastarfarmsindia@gmail.com" className="hover:text-[#50a72c] transition-colors">bastarfarmsindia@gmail.com</a></p>
                <p><span className="font-bold text-[#1a3a1f]">Phone:</span> +91 8482 950500</p>
                <p><span className="font-bold text-[#1a3a1f]">Address:</span> Plot No 558 A, Chindgaon, TQ: Lohandiguda Dist:, Chhattisgarh 494010</p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Privacy