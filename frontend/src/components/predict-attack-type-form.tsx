"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, MoveRight } from "lucide-react";

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
import { Button } from "@/components/ui/button";
import { AttackDataType, attackDataTypeSchema } from "@/lib/validation";
import { PredictedAttackType } from "./predicted-attack-type";
import { sampleAttackData } from "@/lib/constants";
import { toast } from "sonner";

export const PredictAttackTypeForm = () => {
  const form = useForm<AttackDataType>({
    resolver: zodResolver(attackDataTypeSchema),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState<AttackDataType | null>(null);
  const [attackType, setAttackType] = useState<string | null>(null);

  async function onSubmit(values: AttackDataType) {
    console.log(values);
    try {
      console.log(JSON.stringify(values));
      const fetchAttackType = await fetch(
        "http://localhost:8000/api/predict-attack-type",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const attackType = await fetchAttackType.json();
      setAttackType(attackType.attack_type);
      setFormValues(values);
      setIsOpen(true);
      const defaultValues = Object.keys(values).reduce(
        (acc: { [key: string]: string }, key) => {
          acc[key] = "";
          return acc;
        },
        {}
      );
      form.reset(defaultValues);
    } catch (e) {
      toast.error("Error in submitting the form");
      console.log(e);
    }
  }

  const handleFillSampleData = () => {
    // Gets a random sample from sampleAttackData
    const randomIndex = Math.floor(Math.random() * sampleAttackData.length);
    const randomSample = sampleAttackData[randomIndex];

    form.reset(randomSample); // Resets the form with the random sample
  };

  const formWatch = form.watch();
  const isFormEmpty = Object.values(formWatch).every((value) => !value);
  const isFormValid = !isFormEmpty && form.formState.isValid;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="flex space-x-4 w-full">
          <FormField
            control={form.control}
            name="messageID"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Message ID
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 261691.0"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>Unique message identifier</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sender_1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Sender (Message 1)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 85.8"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>First message sender ID</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sendtime_1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Sendtime 1
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 25204.00935"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>First message timestamp</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="pos_x1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Position X (First Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 5560.0"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  X-coordinate at first timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pos_y1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Position Y (First Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 5820.0"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Y-coordinate at first timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pos_z1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Position Z (First Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 1.895"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Z-coordinate at first timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="spd_x1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Speed-X (First Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 2.663433"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Speed at x-axis during the first timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="spd_y1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Speed-Y (First Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 31.64035733459577"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Speed at y-axis during the first timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="spd_z1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Speed-Z (First Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 0.0"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Speed at z-axis during the first timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="sender_2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Sender (Message 2)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 2"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>Second message sender ID</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sendtime_2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Sendtime (Message 2)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 2"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>Second message timestamp</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="pos_x2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Position X (Second Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 2"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  X-coordinate at second timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pos_y2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Position Y (Second Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 2"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Y-coordinate at second timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pos_z2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Position Z (Second Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 2"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Z-coordinate at second timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="spd_x2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Speed-X (Second Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 2"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Speed at x-axis during the second timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="spd_y2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Speed-Y (Second Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 2"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Speed at y-axis during the second timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="spd_z2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold text-black">
                  Speed-Z (Second Timestamp)
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Eg. 2"
                    {...field}
                    className="h-[50px] w-full rounded-md text-black transition-all dark:text-white"
                  />
                </FormControl>
                <FormDescription>
                  Speed at z-axis during the second timestamp
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <Button
            className="z-10 w-[150px] space-x-3 self-end px-7 py-6 text-sm"
            type="button"
            onClick={handleFillSampleData}
          >
            Fill Sample Data
          </Button>
          <PredictedAttackType
            attackData={formValues || sampleAttackData[0]}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            attackType={attackType}
          />
          <Button
            className="z-10 w-[150px] space-x-3 self-end px-7 py-6 text-sm"
            disabled={form.formState.isSubmitting || !isFormValid}
            onClick={form.handleSubmit(onSubmit)}
          >
            <span>Attack Type</span>

            {form.formState.isSubmitting ? (
              <LoaderCircle className="animate-spin" size={20} />
            ) : (
              <MoveRight size={20} />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
