import { ComboBox } from "@/Components/Combobox";
import { Badge } from "@/Components/ui/badge";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useAppSelector } from "@/Utils/hooks/appHooks";
import { FormikProps } from "formik";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { blogSelector } from "../redux/selector";

interface BlogModalProps {
  formik: FormikProps<any>;
}

const BlogModal: React.FC<BlogModalProps> = ({ formik }) => {
  const { categories: categoryList } = useAppSelector(blogSelector)
  const categoryOptions = categoryList.map((category: { id: string; name: string }) => ({
    value: category.id,
    label: category.name,
  }));
  const {
    values: { categories, tags, thumbnail },
    setFieldValue,
    errors,
    touched,
  } = formik;

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (thumbnail) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(thumbnail);
    } else {
      setImagePreview(null);
    }
  }, [thumbnail]);

  const handleCategoryChange = (values: string[]) => {
    setFieldValue("categories", values);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("tagInput", event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    const newTags = formik.values.tagInput
      .split(",")
      .map((tag: string) => tag.trim())
      .filter((tag: string) => tag && !tags.includes(tag))
      .slice(0, 5 - tags.length); // Limit to 5 tags
    if (newTags.length > 0) {
      setFieldValue("tags", [...tags, ...newTags]);
      setFieldValue("tagInput", "");
    }
  };

  const removeTag = (tag: string) => {
    setFieldValue("tags", tags.filter((t: string) => t !== tag));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFieldValue("thumbnail", file);
    }
  };
  return (
    <section>
      {/* Categories Field */}
      <div className="flex flex-col mb-6">
        <Label htmlFor="category" className="mb-1">
          Category
        </Label>
        <ComboBox
          options={categoryOptions}
          multiple={true}
          onChange={handleCategoryChange}
          value={categories}
          name="categories"
        />
       
      </div>

      {/* Thumbnail Field */}
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
        {touched.thumbnail && typeof errors.thumbnail === "string" && (
          <div className="text-red-500">{errors.thumbnail}</div>
        )}
      </div>

      {/* Tags Field */}
      <div className="flex flex-col mb-6">
        <Label htmlFor="tags" className="mb-1">
          Tags
        </Label>
        <Input
          type="text"
          value={formik.values.tagInput || ""}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Add tags (up to 5)"
        />
        {touched.tags && typeof errors.tags === "string" && (
          <div className="text-red-500">{errors.tags}</div>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag: string) => (
            <Badge className="flex items-center gap-2 justify-between rounded-sm" key={tag}>
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
    </section>
  );
};

export default BlogModal;
