
import Image from 'next/image';
import { motion } from "framer-motion"
import { Wallet, Store, Tag } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: Wallet,
    title: "Connect your Wallet",
    description: "Connect with MetaMask, Coinbase Wallet, Phantom or WalletConnect",
  },
  {
    icon: Store,
    title: "Create your NFT Store",
    description: "Set up your store with custom branding and details",
  },
  {
    icon: Tag,
    title: "Start Selling NFTs",
    description: "List your NFTs and start earning crypto",
  },
]

const GetStarted = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Get Started in 3 steps</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative bg-white rounded-xl h-full transition-transform hover:scale-105">
                <CardContent className="pt-6">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="rounded-full bg-purple p-3 text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm font-normal text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GetStarted;