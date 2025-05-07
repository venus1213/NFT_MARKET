import EditProfileForm from '@/components/forms/edit-profile-form';
import { Button } from '@/components/ui/button';
import HeaderSection from '@/components/ui/header-section';
import Image from 'next/image';

const EditProfilePage = () => {
  return (
    <div>
        <HeaderSection title="Edit Profile" category='Home /' subtitle='Edit Profile'/>
        <div className='flex flex-col md:flex-row md:px-10'>
        <div className='flex mt-10 gap-8 px-10'>
          <Image
          className='rounded-full h-1/6 '
          src="/assets/icons/cult-bears.png"
          alt="Profile"
          width={120}
          height={120}
          />
          <div className='flex flex-col gap-2'>
            <p className='font-bold'>Profile Photo</p>
            <p className='font-light text-sm text-slate-400'>We recommend an image of at least 400x400. Gifs work too 🙌</p>
            <Button className='border-[2px] border-purple rounded-full text-purple hover:text-purple cursor-pointer mt-2 '>Upload</Button>
          </div>
        </div>

        <div className='mt-10  px-10 flex flex-col'>
          <p className='font-medium'>Choose your Cover Image</p>
          <div className='flex gap-4'>

            <div className='bg-slate-100 rounded-xl mt-8 md:mt-6 w-1/3 flex flex-col items-center justify-center'>
              <Button className=' border-[2px] border-purple rounded-full text-purple hover:text-purple cursor-pointer'>Upload</Button>
            </div>

            <div className='w-1/3'>
            <Image 
            src="/assets/creatorbackground-3.webp"
            alt="Cover Template 1"
            width="200"
            height="200"
            className='cursor-pointer rounded-xl mt-8 md:mt-6'
            />
            </div>

            <div className='w-1/3'>
            <Image 
            src="/assets/creatorbackground-3.webp"
            alt="Cover Template 1"
            width="200"
            height="200"
            className='cursor-pointer rounded-xl w-full mt-8 md:mt-6'
            />
            </div>
            </div>
            <EditProfileForm />
           </div>
       
        </div>
    </div>
  )
}

export default EditProfilePage;