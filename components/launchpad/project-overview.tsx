"use client";

import { ExternalLink, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import FOUNDER from "@/public/assets/founder.jpg";
import { useWalletClient } from 'wagmi';
import { explorers, getExplorerUrl } from '@/utils/chainHelpers';

interface Milestone {
  percentage: string
  title: string
}

interface TeamMember {
  name: string
  role: string
  image: string
  twitter: string
}

const milestones: Milestone[] = [
  { "percentage": "10%", "title": "Community Launch: Cult Bears DAO launched, NFT collection minted on Moonbeam and Astar EVM" },
  { "percentage": "25%", "title": "XHONEY OFT Launch: Native token introduced with cross-chain support on 8 chains via LayerZero" },
  { "percentage": "40%", "title": "ONFT Migration: Enabled seamless cross-chain NFT compatibility through LayerZero" },
  { "percentage": "60%", "title": "NFT Marketplace Launch: Omnichain trading platform for ONFTs, OFTs, and AI Agents" },
  { "percentage": "75%", "title": "Cult Verse Development: P2E NFT card game design and mechanics in progress" },
  { "percentage": "90%", "title": "DAO Governance & Staking: Voting system and Cult Bear staking in final stages" },
  { "percentage": "100%", "title": "Cult Verse Game Launch: Complete P2E game release with ongoing ecosystem updates" }
]

const teamMembers: TeamMember[] = [
  {
    name: "Resortinsider",
    role: "Founder",
    image: FOUNDER.src,
    twitter: "https://x.com/resortinsider"
  },
]

export default function ProjectOverview() {

    const walletClient = useWalletClient();
    const chainIdFromWallet = walletClient?.data?.chain?.id;
    const EXPLORER_URL = chainIdFromWallet
    ? getExplorerUrl(chainIdFromWallet)
    : explorers.BASE_SEPOLIA;
  
  
  return (
    <div className="min-h-screen bg-[#1a1b1f] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
      <Tabs defaultValue="overview" className="w-full">
          <TabsList className="flex justify-start border-b border-gray-700/70 w-full mb-8 -pl-">
            <TabsTrigger 
              value="overview" 
              className="relative px-4 py-3 text-sm data-[state=active]:text-white text-gray-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-purple after:transition-transform after:scale-x-0 data-[state=active]:after:scale-x-100"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="team"
              className="relative px-4 py-3 text-sm data-[state=active]:text-white text-gray-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-purple after:transition-transform after:scale-x-0 data-[state=active]:after:scale-x-100"
            >
              Team
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="grid md:grid-cols-2 gap-12 pb-8 md:pb-0">
            {/* Left Column - Project Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold mb-4">Cult Bears DAO</h1>
                <div className="flex gap-4">
                <Button 
                variant="outline"
                className="text-xs bg-[#2a2b30]/80 border-none hover:bg-[#2a2b30] flex items-center"
                asChild
                aria-label="Open Contract 0xb1a40746dc35d00ECE291895716D7f20Cb747f14 in a new tab"
                >
                <a
                href={`${EXPLORER_URL}token/0xb1a40746dc35d00ECE291895716D7f20Cb747f14`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
                >
                Contract 0xb1...7f14 
                <ExternalLink className="w-3 h-3 ml-2" />
                </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="px-3 bg-[#2a2b30]/80 border-none hover:bg-[#2a2b30]"
                  asChild
                  >
                  <a
                  href="https://discord.com/invite/HjGGfMR7Ux" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                  >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  </a>
                  </Button>
                  <Button 
                  variant="outline" 
                  className="px-3 bg-[#2a2b30]/80 border-none hover:bg-[#2a2b30]"
                  asChild
                  >
                  <a
                  href="https://twitter.com/cultbearsdao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                  >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  </a>
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">About Us</h2>
                  <p className="text-gray-400 leading-relaxed">
                  Cult Bears DAO is the first omnichain NFT community, driving cross-chain exploration and continuous innovation in web3. 
                  Built on LayerZero's ONFT721 standard, Cult Bears seamlessly move across supported blockchains, breaking barriers between networks. 
                  Our community-first DAO empowers members to shape the project's future through governance and exclusive benefits.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Utility</h2>
                  <p className="text-gray-400 leading-relaxed">
                    Owning a Cult Bear provides direct access to our DAO, future airdrops, and participation in Cult Verse, our upcoming P2E NFT Card Game. 
                    Each ONFT represents a unique character with distinct traits and pets that offer in-game advantages. 
                    Players can challenge rivals, conquer forests, and earn valuable resources, making Cult Bears both a digital collectible and a gateway to engaging web3 experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Vision Timeline */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Vision</h2>
              <div className="relative">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-purple/80 z-0" />
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="rounded-full bg-purple p-1 z-10">
                        <Check className="w-4 h-4 z-10" />
                      </div>
                      <div>
                        <div className="font-semibold">{milestone.percentage}</div>
                        <div className="text-gray-400">{milestone.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="team">
            <div className="relative">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Meet the team</h2>
                <Button variant="secondary" className="bg-[#2a2b30]/80 hover:bg-[#2a2b30]">
                  Resortinsider
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-[#1e1f24] rounded-lg overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold mb-1">{member.name}</h3>
                      <p className="text-pink-500 text-sm mb-3">{member.role}</p>
                      <a 
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}