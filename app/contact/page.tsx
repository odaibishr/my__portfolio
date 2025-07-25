'use client';
import SectionHeader from "@/components/sectionHeader";
import { useRef } from "react";
import MainButton from "@/components/mainButton";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters long",
    }),
    email: z.string().email({
        message: "Invalid email address",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters long",
    }),
})

export default function ContactPage() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const form = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
    })

    const onSubmit = (data: z.infer<typeof ContactSchema>) => {
        console.log(data)
    }
    return (
        <section ref={sectionRef} className="container md:h-[calc(100vh-3rem)] flex flex-col items-center justify-center py-20">
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                <SectionHeader title="Get in touch" subtitle="I'm always open to discussing new projects, so feel free to reach out to me." triggerRef={sectionRef} heading="Contact with me" />

                <div className="container bg-card rounded-2xl border border-border p-10">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
                            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="w-full md:w-1/2">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl className="mt-1 rounded-[10px] h-10 border border-border">
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl className="mt-1 rounded-[10px] h-10 border border-border">
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl className="mt-1 rounded-[10px] h-10 border border-border">
                                            <Textarea placeholder="Message" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full md:w-auto">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}