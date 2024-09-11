import AppButton from "@/Components/Button";
import { ComboBox } from "@/Components/Combobox";
import { Badge } from "@/Components/ui/badge";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { X } from "lucide-react";
import React, { useState } from "react";

const options = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const BlogModal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleCategoryChange = (values: string[]) => {
    setSelectedCategory(values[0] || null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const newTags = inputValue
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag && !tags.includes(tag))
      .slice(0, 5 - tags.length); // Limit to 5 tags
    if (newTags.length > 0) {
      setTags((prev) => [...prev, ...newTags]);
      setInputValue("");
    }
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section>
      <div className="flex flex-col mb-6">
        <Label htmlFor="category" className="mb-1">
          Category
        </Label>
        <ComboBox
          options={options}
          multiple={false}
          onChange={handleCategoryChange}
          placeholder="Select category..."
        />
      </div>
      <div className="mb-6">
        <p>Thumbnail</p>
        <Label htmlFor="thumbnail">
          <div className="relative h-40">
            {imagePreview ? (
              <div className="relative h-full w-full">
                <img
                  src={imagePreview}
                  alt="Thumbnail Preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg duration-300 opacity-0 hover:opacity-100 cursor-pointer transition-opacity">
                  Click to change image
                </div>
              </div>
            ) : (
              <div className="bg-muted h-full flex items-center justify-center px-4 text-center font-normal cursor-pointer">
                Include a high-quality image in your story to make it more inviting to readers.
              </div>
            )}
          </div>
        </Label>
        <input
          type="file"
          hidden
          id="thumbnail"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="flex flex-col mb-6">
        <Label htmlFor="tags" className="mb-1">
          Tags
        </Label>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Add tags (up to 5)"
          className="mb-2 p-2 border border-gray-300 rounded"
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge className="flex items-center gap-2" key={tag}>
              {tag}
              <X
                className="cursor-pointer"
                onClick={() => removeTag(tag)}
                size={18}
              />
            </Badge>
          ))}
        </div>
      </div>
      <div className="text-end">
        <AppButton label="Cancel" variant="outline" className="me-2" />
        <AppButton label="Publish" />
      </div>
    </section>
  );
};

export default BlogModal;
