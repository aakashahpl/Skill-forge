"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SingUp = () => {



    const formSchema = z.object({
        email: z.string().email({
            message: "Invalid email format.",
        }),
        password: z.string().min(2, {
            message: "Password must be at least 8 characters long.",
        }),
    });


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });


    const handleFormData = async (data: any) => {
        async function postData() {
            try {
                // Request body
                console.log(data);
                const requestBody = {
                    username: data.email,
                    password: data.password,
                };

                // Request headers
                const headers = {
                    "Content-Type": "application/json",
                    // Authorization: "Bearer YourAccessTokenHere",
                };

                const response = await axios.post(
                    "http://localhost:3001/user/login",
                    requestBody,
                    { headers }
                );

           
                console.log("Response:", response.data);
            } catch (error:any) {
           
                console.error("Error:", error.response.data);
            }
        }

        // console.log(data);
        postData();
    };
    return (
        <div className=" flex-1 w-full flex justify-center items-start mt-10">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleFormData)}
                    className="space-y-1 flex flex-col w-2/3"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Your Email Address"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel></FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Your Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        style={{
                            marginTop: "2rem",
                        }}
                        variant={"default"}
                        type="submit"
                    >
                        <div className=" font-bold text-md text-white ">
                            Continue
                        </div>
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default SingUp;
