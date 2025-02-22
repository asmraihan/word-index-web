"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export const Step2Schema = z.object({
  role: z.enum([
    "Manager",
    "Admin",
  ]),
});

const role = [
    "Manager",
    "Admin",
];

interface StepTwoProps {
  onNext: (data: z.infer<typeof Step2Schema>) => void;
  onBack: () => void;
  formData: any;
}

const StepTwo = ({ onNext, onBack , formData}: StepTwoProps) => {
  const form = useForm<z.infer<typeof Step2Schema>>({
    resolver: zodResolver(Step2Schema),
    defaultValues : formData,
  });

  const onSubmit = (
    values: z.infer<typeof Step2Schema>
  ) => {
    onNext(values);
  };
  return (
    <div>
      <h3 className="text-3xl from-bold">
       Your role
      </h3>
      <p className="text-gray-500 text-sm mt-3">
        👋 Let's start with a little bit of information
      </p>
      <div className="mt-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>
                    What is your role?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      {role.map((level) => (
                        <FormItem
                          key={level}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={level} />
                          </FormControl>
                          <FormLabel>{level}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button onClick={onBack} variant="secondary">
                Back
              </Button>
              <Button type="submit">Continue</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default StepTwo;
