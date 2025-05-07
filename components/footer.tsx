import  copyrightSign from "/public/assets/icons/copyrightSign.svg";
import Image from "next/image";

const footerLinks = [
  {
      title: "Cult Markets",
      links: [
          { name: "Explore NFTs", link: "/explore-nfts" },
          { name: "Explore Collections", link: "/explore-collections" },
          { name: "About", link: "/" },
      ],
  },
  {
      title: "My Profile",
      links: [
          { name: "Profile", link: "/my-profile" },
          { name: "Watchlist", link: "/my-profile" },
          { name: "My Collection", link: "/my-profile" },
          { name: "Settings", link: "/my-profile" },
      ],
  },
  {
      title: "Community",
      links: [
          { name: "Help Center", link: "/" },
          { name: "XHONEY Token", link: "/" },
          { name: "Suggest Feature", link: "/" },
          { name: "Subscribe", link: "/" },
      ],
  },
];

const Footer = () => {
  return (
    <footer className='sm:px-16 px-8 sm:pt-24 pt-12 pb-8 bg-black w-full'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          {/*
           <div className="text-2xl text-white font-semibold">Art<span className="text-purple text-xl font-semibold">Bit</span></div>
          */}
           <a href="/">
        <Image
                src="/assets/logo.svg"
                alt="Logo"
                width="200"
                height="200"
                />
                </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-gray-400 sm:max-w-sm'>
          Enter your email to get notified by Cult Markets for latest updates.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full transition hover:bg-purple cursor-pointer'>
                <Image src="/assets/icons/twitter.svg" alt="Twitter" width={24} height={24} />
              </div>
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full transition hover:bg-purple cursor-pointer'>
                <Image src="/assets/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </div>
              <div
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full transition hover:bg-purple cursor-pointer'>
                <Image src="/assets/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </div>
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <div className='text-xl leading-normal  mb-6 text-white'>
                {section.title}
              </div>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-gray-400 hover:text-purple'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-gray-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <Image
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;