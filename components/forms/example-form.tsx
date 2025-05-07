"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bio: z.string().min(2, {
    message: "Bio must be at least 2 characters.",
  }),
  twitter: z.string().min(2, {
    message: "Twitter must be at least 2 characters.",
  }),
  discord: z.string().min(2, {
    message: "Discord must be at least 2 characters.",
  }),
})

export function ExampleForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      bio: "",
      twitter: "",
      discord: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username<span className="text-purple">*</span></FormLabel>
              <FormControl className="bg-slate-100 rounded-xl border-none p-5">
                <Input className="text-slate-400" placeholder="e.g:@markbasa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

           <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Short Bio <span className="text-purple">*</span></FormLabel>
              <FormControl className="bg-slate-100 rounded-xl border-none p-10">
                <Input className="text-slate-400" placeholder="e.g:I'm an NFT collector and trader" {...field} />
              </FormControl>
              <hr className="py-2"/>

              <FormLabel className="font-semibold text-lg">
                Social Links
              </FormLabel>

              <FormDescription className="text-slate-400">
                Add your existing social links to build a stronger reputation
              </FormDescription>
              <FormMessage />
            </FormItem>
              )}
            />
                 <FormField
          control={form.control}
          name="twitter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Twitter<span className="text-purple">*</span></FormLabel>
              <FormControl className="bg-slate-100 rounded-xl border-none p-5">
                <Input className="text-slate-400" placeholder="e.g:@markbasa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
             <FormField
          control={form.control}
          name="discord"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discord<span className="text-purple">*</span></FormLabel>
              <FormControl className="bg-slate-100 rounded-xl border-none p-5">
                <Input className="text-slate-400" placeholder="e.g:@markbasa" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="text-semibold bg-purple hover:bg-purple text-white rounded-full px-6" type="submit">Save Settings</Button>
      </form>
    </Form>
  )
}

export default ExampleForm;
