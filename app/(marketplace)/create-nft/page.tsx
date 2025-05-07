import CreateNFTForm from '@/components/forms/create-nft-form';
import EditProfileForm from '@/components/forms/edit-profile-form';
import { Button } from '@/components/ui/button';
import HeaderSection from '@/components/ui/header-section';
import { FileUp, Upload } from 'lucide-react';
import Image from 'next/image';

const EditProfilePage = () => {
  return (
    <div>
        <HeaderSection title="Create NFT" category='Home /' subtitle='Create NFT'/>
        <div className='flex flex-col md:flex-row md:px-10 justify-center'>

        <div className='mt-10 md:w-1/3 px-10 flex flex-col'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>Preview NFT</p>
            <p className='font-light text-sm text-slate-400'>Your NFT will look like this</p>
            <Button className='border-[2px] border-purple rounded-full text-purple hover:text-purple cursor-pointer mt-2 '>Image</Button>
          </div>
        </div>


        <div className='mt-10 px-10 flex flex-col'>
          <p className='font-bold'>Upload file</p>
          <p className='text-slate-400 text-sm font-light mt-2'> Drag or choose your file to upload</p>

            <div className='bg-slate-100 rounded-xl mt-8 md:mt-6 w-full flex flex-col items-center justify-center gap-6 py-10 cursor-pointer border-transparent     hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple'>
              <FileUp />
              <p className='text-slate-400'> PNG,GIF, WEBP, MP4 or MP3 (Max size: 100MB)</p>
              <Button className=' border-[2px] border-purple rounded-full text-purple hover:text-purple cursor-pointer px-6'>Upload</Button>
            </div>

           
    
            <CreateNFTForm />
           </div>
       
        </div>
    </div>
  )
}

export default EditProfilePage;