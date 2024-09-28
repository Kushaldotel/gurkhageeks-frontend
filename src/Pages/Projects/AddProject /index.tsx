import {
  ArrowLeft,
  Image,
  Video,
  Type,
  Link2,
  FileText,
  Music,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Card, CardContent } from "@/Components/ui/card";
import { Link } from "react-router-dom";

export default function AddProject() {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <Link to="/">
        <Button variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </Link>
      <h1 className="text-2xl font-bold">Add a new portfolio project</h1>
      <p className="text-sm text-muted-foreground">
        All fields are required unless otherwise indicated.
      </p>
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="project-title"
              className="block text-sm font-medium"
            >
              Project title
            </label>
            <Input
              id="project-title"
              placeholder="Enter a brief but descriptive title"
            />
            <p className="text-xs text-muted-foreground text-right">
              70 characters left
            </p>
          </div>
          <div className="space-y-2">
            <label htmlFor="your-role" className="block text-sm font-medium">
              Your role (optional)
            </label>
            <Input
              id="your-role"
              placeholder="e.g., Front-end engineer or Marketing analyst"
            />
            <p className="text-xs text-muted-foreground text-right">
              100 characters left
            </p>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="project-description"
              className="block text-sm font-medium"
            >
              Project description
            </label>
            <Textarea
              id="project-description"
              placeholder="Briefly describe the project's goals, your solution and the impact you made here"
              rows={4}
            />
            <p className="text-xs text-muted-foreground text-right">
              600 characters left
            </p>
          </div>
          <div className="space-y-2">
            <label htmlFor="skills" className="block text-sm font-medium">
              Skills and deliverables
            </label>
            <Input
              id="skills"
              placeholder="Type to add skills relevant to this project"
            />
            <p className="text-xs text-muted-foreground text-right">
              5 skills left
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center items-center h-[400px] border-2 border-dashed rounded-lg">
                <div className="text-center">
                  <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <Button variant="outline" size="icon">
                      <Image className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Type className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Link2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Music className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Add content</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2 flex justify-between items-center pt-4">
          <Button variant="outline">Save as draft</Button>
          <Button>Next: Preview</Button>
        </div>
      </form>
    </div>
  );
}
