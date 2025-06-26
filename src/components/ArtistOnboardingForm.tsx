"use client";

import { useForm } from "react-hook-form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import SelectCategory from "@/components/SelectCategory";
import { addOnboardedArtist } from "@/store/onboardingSlice";
import categories from "@/app/lib/data/catetgories.json";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Artist } from "@/store/types/artist";
import { RootState } from "@/store/store";

const ArtistOnboardForm = () => {
  const { register, handleSubmit, reset, setValue, watch } = useForm<Artist>();
  const onboardedArtists = useSelector((state: RootState) => state.onboarding.onboardedArtists);



  const [,setSelectedCategory] = useState<string>("");
  const [availableSubcategories, setAvailableSubcategories] = useState<string[]>([]);

  const onSubmit = (data: Artist) => {
    dispatch(
      addOnboardedArtist({
        id: Date.now().toString(), // or uuid
        name: data.name,
        bio: data.bio,
        image: data.image,
        location: data.location,
        category: data.category,
        subCategory: data.subCategory || [],
        priceRange: "5000-10000",
        rating: 0,
        languagesSpoken: [],
      })
    );
    reset();
    alert("Artist onboarded successfully!");
  };

  useEffect(() => {
  console.log("Onboarded Artists:", onboardedArtists);
}, [onboardedArtists]);
  const dispatch = useDispatch();

  // Watch for selected category and update available subcategories
  const watchCategory = watch("category");

  useEffect(() => {
    const categoryObj = categories.find((cat) => cat.category === watchCategory);
    setAvailableSubcategories(categoryObj?.subCategories || []);
  }, [watchCategory]);
  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <Accordion type="single" collapsible defaultValue="personalInfo">
        <AccordionItem value="personalInfo">
          <AccordionTrigger>Personal Information</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <Input placeholder="Full Name" {...register("name")} />
            <Input placeholder="Artist Bio" {...register("bio")} />
            <Input placeholder="Profile Image URL" {...register("image")} />
            <Input placeholder="Location" {...register("location")} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="professionalInfo">
          <AccordionTrigger>Professional Information</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <SelectCategory
              onChange={(val) => {
                setValue("category", val);
                setSelectedCategory(val);
                setValue("subCategory", []); // reset subcategory on category change
              }}
            />

            {availableSubcategories.length > 0 && (
              <div>
                <label className="text-sm font-medium mb-1 block">Subcategory</label>
                <Select onValueChange={(val) => setValue("subCategory", [val])}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSubcategories.map((sub) => (
                      <SelectItem key={sub} value={sub}>
                        {sub}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Onboard Artist
      </button>
    </form>
  );
};

export default ArtistOnboardForm;
