"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Main } from '@/components/main'
import { useToast } from '@/hooks/use-toast'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { AddWord } from '@/server/actions/add-word'
import { WordSchema } from '@/types/word-schema'
import { useAction } from 'next-safe-action/hooks'

export default function CreateWordPage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof WordSchema>>({
    resolver: zodResolver(WordSchema),
    defaultValues: {
      word: "",
      translation: "",
      sentence: "",
      category: "general",
      createdAt: new Date().toISOString(),
    },
  })

  const { execute, status } = useAction(AddWord, {
    onSuccess(data) {
      console.log(data)
      if (data.data?.error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: data.data.error,
        })
      } else {
        toast({
          variant: "default",
          title: "Word added successfully!",
        })
      }
    },
  })

  const onSubmit = (values: z.infer<typeof WordSchema>) => {
    console.log("values")
    execute(values)
  }

  return (
    <Main fixed>
      <div className="bg-white px-4 w-full mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Add New Word
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="word"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Word</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter the word" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="translation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Translation</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter the translation" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sentence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Sentence</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Enter a sentence" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="noun">Noun</SelectItem>
                      <SelectItem value="verb">Verb</SelectItem>
                      <SelectItem value="adjective">Adjective</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              {status === "executing" ? "Adding..." : "Add Word"}
            </Button>
          </form>
        </Form>
      </div>
    </Main>
  )
}