"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Info } from "lucide-react"

const FormSchema = z.object({
  method: z
    .string({
      required_error: "Please select a method to display.",
    }),
    title: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    externalLink: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    fixedPrice: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    size: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    royalties: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    supply: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    collection: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
    blockchain: z.string().min(2, {
      message: "Title must be at least 2 characters.",
    }),
})

const CreateNFTForm = ({

}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      externalLink: "",
      description: "",
      fixedPrice: "",
      size: "",
      royalties: "",
      supply: "",
      collection: "",
      blockchain: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 md:w-full space-y-6 mt-6">
        

<FormField
          control={form.control}
          name="method"
          render={({ field }) => (
            <FormItem className="space-y-3">
               <FormLabel>Select Method<span className="text-purple">*</span></FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-y-1"
                >
                  <FormItem className="flex items-center  space-y-0">
                    <FormControl className="hidden">
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel className="bg-slate-100 rounded-full border-transparent     hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-4">
                      Fixed&nbsp;Rate
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl className="hidden">
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="bg-slate-100 rounded-full border-transparent     hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-4">
                      Time&nbsp;Auction
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl className="hidden">
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="bg-slate-100 rounded-full border-transparent     hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-4">Open&nbsp;For&nbsp;Bids</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title<span className="text-purple">*</span></FormLabel>
              <FormControl className="bg-slate-100 rounded-xl border-transparent     hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-5">
                <Input className="text-slate-400" placeholder="e.g: @markbasa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="externalLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>External Link<span className="text-purple">*</span></FormLabel>
              <FormControl className="bg-slate-100 rounded-xl border-transparent     hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-5">
                <Input className="text-slate-400" placeholder="e.g: @markbasa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

           <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Description <span className="text-purple">*</span></FormLabel>
              <FormControl className="bg-slate-100 rounded-xl border-transparent     hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-10">
                <Input className="text-slate-400" placeholder="e.g: An unique item created by AI" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex">

         <FormField
          control={form.control}
          name="fixedPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fixed Price<span className="text-purple">*</span></FormLabel>
              <FormControl className="bg-slate-100 rounded-xl border-transparent w-5/6 hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-5">
                <Input className="text-slate-400" placeholder="0.45 ETH" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 

          <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size<span className="text-slate-400">&nbsp;(Optional)</span></FormLabel>
              <FormControl className="bg-slate-100 rounded-xl border-transparent w-5/6 hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-5">
                <Input className="text-slate-400" placeholder="Width x height" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 

       </div>

       <div className="flex">

<FormField
 control={form.control}
 name="royalties"
 render={({ field }) => (
   <FormItem>
     <FormLabel className="flex">Royalties<span className="text-slate-400 -mt-1 ml-1"><Info size="20"/></span></FormLabel>
     <FormControl className="bg-slate-100 rounded-xl border-transparent w-5/6 hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-5">
       <Input className="text-slate-400" placeholder="Maximum 70%" {...field} />
     </FormControl>
     <FormMessage />
   </FormItem>
 )}
/> 

<FormField
 control={form.control}
 name="supply"
 render={({ field }) => (
   <FormItem>
     <FormLabel className="flex">Supply<span className="text-slate-400 -mt-1 ml-1"><Info size="20"/></span></FormLabel>
     <FormControl className="bg-slate-100 rounded-xl border-transparent w-5/6 hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-5">
       <Input className="text-slate-400" placeholder="1" {...field} />
     </FormControl>
     <FormMessage />
   </FormItem>
 )}
/> 
       </div>

             <FormField
          control={form.control}
          name="collection"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Collection<span className="text-purple">*</span></FormLabel>
              <FormDescription className="flex gap-1 text-slate-400">This is the collection where your NFT will appear. <Info size="20"/></FormDescription>
              <FormControl className="bg-slate-100 rounded-xl border-transparent hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-5">
                <Input className="text-slate-400" placeholder="e.g: https:/yoursite.io/123" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <hr />

        <FormField
          control={form.control}
          name="blockchain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Blockchain<span className="text-purple">*</span></FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormDescription className="flex gap-1 text-slate-400">
                This the network where your NFT will be stored. <Info size="20"/>
              </FormDescription>
                <FormControl className="bg-slate-100 rounded-xl border-transparent     hover:border-[2px] active:border-[2px] hover:border-purple active:border-purple p-5">
                  <SelectTrigger>
                    <SelectValue
                    placeholder="Select a network" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Ethereum">Ethereum</SelectItem>
                  <SelectItem value="Moonbeam">Moonbeam</SelectItem>
                  <SelectItem value="Astar">Astar</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="text-semibold bg-purple hover:bg-purple text-white rounded-full px-6" type="submit">Create NFT</Button>
      </form>
    </Form>
  )
}

export default CreateNFTForm;
