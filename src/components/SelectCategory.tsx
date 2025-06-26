"use client";

import React from "react";
import categories from "@/app/lib/data/catetgories.json";
import { ArtistCategory } from "@/store/types/category";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const typedCategories: ArtistCategory[] = categories;

const SelectCategory = ({ onChange }: { onChange?: (value: string) => void }) => {
  return (
    <Select onValueChange={(val) => onChange?.(val)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {typedCategories.map((cat) => (
            <SelectItem key={cat.slug} value={cat.category}>
              {cat.category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
