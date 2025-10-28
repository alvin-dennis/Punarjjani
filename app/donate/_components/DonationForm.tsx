"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type DonationType = "one-time" | "monthly" | "yearly";

const donationFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(100, { message: "Name must not exceed 100 characters" })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Name can only contain letters and spaces",
      }),

    email: z
      .string()
      .email({ message: "Please enter a valid email address" })
      .min(5, { message: "Email is required" }),

    phone: z
      .string()
      .regex(/^(\+91[\s]?)?[0-9]{10}$/, {
        message: "Please enter a valid 10-digit phone number",
      })
      .min(10, { message: "Phone number must be 10 digits" }),

    panNumber: z
      .string()
      .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, {
        message: "Invalid PAN format. Use format: ABCDE1234F",
      })
      .length(10, { message: "PAN must be exactly 10 characters" }),

    isOrganisation: z.boolean(),

    organisationName: z.string().optional(),

    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),

    donationAmount: z
      .number()
      .min(1, { message: "Please select or enter a donation amount" })
      .positive({ message: "Donation amount must be positive" }),

    donationType: z.enum(["one-time", "monthly", "yearly"]),
  })
  .refine(
    (data) => {
      if (
        data.isOrganisation &&
        (!data.organisationName || data.organisationName.trim() === "")
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Organisation name is required when paying as an organisation",
      path: ["organisationName"],
    }
  );

type DonationFormData = z.infer<typeof donationFormSchema>;

export default function DonationForm() {
  const [mounted, setMounted] = useState(false);
  const [donationType, setDonationType] = useState<DonationType>("one-time");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      panNumber: "",
      isOrganisation: false,
      organisationName: "",
      termsAccepted: false,
      donationAmount: 0,
      donationType: "one-time",
    },
  });

  const getDonationAmounts = (type: DonationType) => {
    switch (type) {
      case "monthly":
        return [
          { id: "amount-500", label: "₹500", amount: 500 },
          { id: "amount-1000", label: "₹1000", amount: 1000 },
          { id: "amount-2000", label: "₹2000", amount: 2000 },
          { id: "amount-5000", label: "₹5000", amount: 5000 },
          { id: "amount-custom", label: "Custom Amount", isCustom: true },
        ];
      case "yearly":
        return [
          { id: "amount-2000", label: "₹2000", amount: 2000 },
          { id: "amount-3000", label: "₹3000", amount: 3000 },
          { id: "amount-5000", label: "₹5000", amount: 5000 },
          { id: "amount-10000", label: "₹10,000", amount: 10000 },
          { id: "amount-custom", label: "Custom Amount", isCustom: true },
        ];
      case "one-time":
      default:
        return [
          { id: "amount-300", label: "₹300", amount: 300 },
          { id: "amount-500", label: "₹500", amount: 500 },
          { id: "amount-1000", label: "₹1000", amount: 1000 },
          { id: "amount-2000", label: "₹2000", amount: 2000 },
          { id: "amount-custom", label: "Custom Amount", isCustom: true },
        ];
    }
  };

  const donationAmounts = getDonationAmounts(donationType);

  const isOrganisation = watch("isOrganisation");
  const totalAmount = watch("donationAmount") || 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setSelectedAmount("");
    setCustomAmount("");
    setValue("donationAmount", 0, { shouldValidate: true });
    setValue("donationType", donationType, { shouldValidate: true });
  }, [donationType, setValue]);

  const handleAmountChange = (optionId: string, amount?: number) => {
    setSelectedAmount(optionId);
    if (amount) {
      setValue("donationAmount", amount, { shouldValidate: true });
      setCustomAmount("");
    }
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseFloat(value) || 0;
    setValue("donationAmount", numValue, { shouldValidate: true });
  };

  const submitDonationForm = async (data: any) => {
    return new Promise((resolve) => {
      console.log("Submitting donation data:", data);
      setTimeout(resolve, 1000);
    });
  };

  const onSubmit = async (data: DonationFormData) => {
    try {
      toast.loading("Processing your donation...", { id: "donation-loading" });

      await submitDonationForm({
        amount: data.donationAmount,
        name: data.name,
        email: data.email,
        mobile: data.phone,
        pan: data.panNumber,
        donationType: data.donationType,
        isOrganisation: data.isOrganisation,
        organisationName: data.organisationName,
      });

      toast.dismiss("donation-loading");
    } catch (error) {
      toast.dismiss("donation-loading");
      console.error("Donation submission error:", error);
    }
  };

  const renderDonationForm = (tabType: string) => (
    <TabsContent value={tabType} className="space-y-8 mt-8">
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-black tracking-tight">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-600">
              Full Name <span className="text-primary">*</span>
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              {...register("name")}
              className={`h-11 bg-white  border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email Address <span className="text-black">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              {...register("email")}
              className={`h-11 bg-white  border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-gray-600"
            >
              Phone Number <span className="text-primary">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              {...register("phone")}
              className={`h-11 bg-white  border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="pan" className="text-sm font-medium text-gray-600">
              PAN Number
            </Label>
            <Input
              id="pan"
              type="text"
              placeholder="ABCDE1234F"
              {...register("panNumber", {
                onChange: (e) => {
                  e.target.value = e.target.value.toUpperCase();
                },
              })}
              maxLength={10}
              className={`h-11 bg-white  border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all ${
                errors.panNumber ? "border-red-500" : ""
              }`}
            />
            {errors.panNumber && (
              <p className="text-xs text-red-500 mt-1">
                {errors.panNumber.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-3 pt-2">
          <input
            type="checkbox"
            id="isOrganisation"
            {...register("isOrganisation")}
            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all cursor-pointer"
          />
          <Label
            htmlFor="isOrganisation"
            className="text-sm font-medium text-gray-600 cursor-pointer"
          >
            I&apos;m paying as an organisation
          </Label>
        </div>

        {isOrganisation && (
          <div className="space-y-2 animate-in fade-in duration-200">
            <Label
              htmlFor="organisationName"
              className="text-sm font-medium text-gray-600"
            >
              Organisation Name <span className="text-primary">*</span>
            </Label>
            <Input
              id="organisationName"
              type="text"
              placeholder="Enter organisation name"
              {...register("organisationName")}
              className={`h-11 bg-white  border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-all ${
                errors.organisationName ? "border-red-500" : ""
              }`}
            />
            {errors.organisationName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.organisationName.message}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="space-y-6 pt-4">
        <h3 className="text-lg font-medium text-black tracking-tight">
          Select Amount
        </h3>

        <RadioGroup
          value={selectedAmount}
          onValueChange={(v) => {
            const option = donationAmounts.find((o) => o.id === v);
            if (option?.isCustom) {
              setSelectedAmount(v);
              if (customAmount) {
                setValue("donationAmount", parseFloat(customAmount) || 0, {
                  shouldValidate: true,
                });
              }
            } else {
              handleAmountChange(v, option?.amount);
            }
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {donationAmounts.slice(0, 4).map((option) => (
              <Label
                key={option.id}
                htmlFor={option.id}
                className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedAmount === option.id
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-gray-600/20 hover:border-primary/50"
                }`}
              >
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="sr-only"
                />
                <span
                  className={`font-semibold text-base ${
                    selectedAmount === option.id
                      ? "bg-transparent"
                      : "text-black"
                  }`}
                >
                  {option.label}
                </span>
              </Label>
            ))}
          </div>

          <div className="mt-4">
            <Label
              htmlFor={donationAmounts[4].id}
              className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                selectedAmount === donationAmounts[4].id
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : "border-primary hover:border-primary/50"
              }`}
            >
              <RadioGroupItem
                value={donationAmounts[4].id}
                id={donationAmounts[4].id}
                className="mt-1"
              />
              <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="font-medium text-black min-w-fit">
                  Custom Amount
                </span>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => {
                    handleCustomAmountChange(e.target.value);
                    setSelectedAmount(donationAmounts[4].id);
                  }}
                  onClick={() => setSelectedAmount(donationAmounts[4].id)}
                  className="flex-1 h-10 border-gray-600/20 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </TabsContent>
  );

  if (!mounted) {
    return (
      <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col max-h-[calc(100vh-10rem)] overflow-hidden">
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 sm:py-10 min-h-0">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-gray-900 tracking-tight">
              Make a Donation
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Support our mission to empower students through education
            </p>
          </div>
          <div className="flex items-center justify-center py-20">
            <div className="animate-pulse text-gray-400">Loading form...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-lg border border-gray-600/20 shadow-sm flex flex-col max-h-[calc(100vh-10rem)] overflow-hidden">
      <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 sm:py-10 min-h-0">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-black tracking-tight">
            Make a Donation
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Support our mission to restore health and hope for those in need
          </p>
        </div>

        <Tabs
          value={donationType}
          onValueChange={(v) => setDonationType(v as DonationType)}
        >
          <TabsList className="inline-flex h-11 items-center justify-center rounded-lg bg-gray-300/20 p-1 text-gray-600 mb-2">
            <TabsTrigger
              value="one-time"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-primary/50 data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              One Time
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-primary/50 data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all data-[state=active]:bg-primary/50 data-[state=active]:text-white data-[state=active]:shadow-sm"
            >
              Yearly
            </TabsTrigger>
          </TabsList>

          {renderDonationForm("one-time")}
          {renderDonationForm("monthly")}
          {renderDonationForm("yearly")}
        </Tabs>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-t border-gray-200 bg-white  px-6 sm:px-10 py-6">
          <div className="flex flex-col gap-5">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="termsAccepted"
                {...register("termsAccepted")}
                className="w-4 h-4 mt-0.5 text-primary border-gray-300 rounded focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-all cursor-pointer"
              />
              <div className="flex-1">
                <Label
                  htmlFor="termsAccepted"
                  className="text-xs sm:text-sm text-gray-600 cursor-pointer leading-relaxed"
                >
                  I agree to the
                  <Link
                    href="/termsandconditions"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Terms and Conditions
                  </Link>
                  ,
                  <Link
                    href="/privacypolicy"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  and
                  <Link
                    href="/refundpolicy"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    Refund Policy
                  </Link>
                </Label>
                {errors.termsAccepted && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.termsAccepted.message}
                  </p>
                )}
              </div>
            </div>

            {errors.donationAmount && (
              <p className="text-xs text-red-500">
                {errors.donationAmount.message}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Donation Amount</p>
                <p className="text-3xl sm:text-4xl font-semibold text-primary tracking-tight">
                  ₹{totalAmount.toLocaleString("en-IN")}
                </p>
              </div>
              <Button
                type="submit"
                variant="default"
                className="sm:w-auto h-12 px-8 font-medium text-base shadow-sm hover:shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isValid || totalAmount === 0}
              >
                Continue to Payment
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
