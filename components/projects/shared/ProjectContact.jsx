'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ProjectContact({ data, language = 'id', officePhone }) {
  const getText = (obj) => {
    if (typeof obj === 'string') return obj
    return obj?.[language] || obj?.id || obj?.en || ''
  }

  const handleWhatsAppClick = (phone, name) => {
    const message = encodeURIComponent(
      language === 'id'
        ? `Halo ${name}, saya tertarik dengan ${data.name}. Mohon informasi lebih lanjut.`
        : `Hello ${name}, I'm interested in ${data.name}. Please provide more information.`
    )
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  const handleCallClick = (phone) => {
    window.location.href = `tel:${phone}`
  }

  const handleEmailClick = (email) => {
    const subject = encodeURIComponent(`Inquiry about ${data.name}`)
    const body = encodeURIComponent(
      language === 'id'
        ? `Halo,

Saya tertarik dengan ${data.name} dan ingin mendapatkan informasi lebih lanjut.

Terima kasih.`
        : `Hello,

I'm interested in ${data.name} and would like to get more information.

Thank you.`
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul langsung tanpa label "KONTAK" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            {language === 'id' ? 'Hubungi Tim Marketing' : 'Contact Marketing Team'}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            {language === 'id'
              ? 'Tim profesional kami siap membantu Anda menemukan hunian impian'
              : 'Our professional team is ready to help you find your dream home'}
          </p>

          {/* Office Contact - Prominent Button */}
          {officePhone && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex flex-col items-center gap-3"
            >
              <p className="text-sm text-slate-600">
                {language === 'id' ? 'Atau hubungi kantor kami:' : 'Or contact our office:'}
              </p>
              <Button
                onClick={() => handleCallClick(officePhone)}
                size="lg"
                className="px-8 py-6 text-base font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                {language === 'id' ? 'Hubungi Kami' : 'Contact Us'} - {officePhone}
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Marketing Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {data.marketingTeam.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-slate-200">
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm text-white/90">{getText(member.role)}</p>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {getText(member.specialty)}
                  </p>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    {/* WhatsApp */}
                    <Button
                      onClick={() => handleWhatsAppClick(member.whatsapp, member.name)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-semibold flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </Button>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        onClick={() => handleCallClick(member.phone)}
                        variant="outline"
                        className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg py-3 font-semibold flex items-center justify-center gap-2"
                      >
                        <Phone size={16} />
                        {language === 'id' ? 'Telepon' : 'Call'}
                      </Button>
                      <Button
                        onClick={() => handleEmailClick(member.email)}
                        variant="outline"
                        className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg py-3 font-semibold flex items-center justify-center gap-2"
                      >
                        <Mail size={16} />
                        Email
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}