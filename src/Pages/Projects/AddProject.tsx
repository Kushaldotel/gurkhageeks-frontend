import { useState } from "react";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [demolink, setDemolink] = useState("");
  const [repolink, setRepolink] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ title, description, technologies, demolink, repolink });
  };

  return (
    <div className="py-6">
      <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-10 bg-white border border-gray-200 shadow-md rounded-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Add New Project</h1>
          <p className="text-gray-600">
            Fill out the details for your new project.
          </p>
        </div>
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid gap-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-700"
              >
                Project Title
              </label>
              <input
                id="title"
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter project title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2 col-span-full">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Project Description
              </label>
              <textarea
                id="description"
                rows={8}
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="Describe your project"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="technologies"
                className="text-sm font-medium text-gray-700"
              >
                Technologies Used
              </label>
              <input
                id="technologies"
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="List the technologies used"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <label
                htmlFor="screenshots"
                className="text-sm font-medium text-gray-700"
              >
                Screenshots
              </label>
              <input
                id="screenshots"
                type="file"
                multiple
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="demo"
                className="text-sm font-medium text-gray-700"
              >
                Demo Link
              </label>
              <input
                id="demo"
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the demo link"
                value={demolink}
                onChange={(e) => setDemolink(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="repo"
                className="text-sm font-medium text-gray-700"
              >
                Repository Link
              </label>
              <input
                id="repo"
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the repository link"
                value={repolink}
                onChange={(e) => setRepolink(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800"
              type="submit"
            >
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
