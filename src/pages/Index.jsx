import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-8">
      <TopStory />
      <Separator />
      <SecondaryStories />
      <Separator />
      <OtherSections />
    </div>
  );
};

const TopStory = () => (
  <Card className="p-4">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">Top Story Headline</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-48 bg-gray-200 mb-4"></div>
      <p className="text-lg">
        This is a brief description of the top story. It provides a summary of
        the main points and entices the reader to click through to read more.
      </p>
    </CardContent>
  </Card>
);

const SecondaryStories = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Secondary Story 1</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-32 bg-gray-200 mb-4"></div>
        <p>
          Brief description of the secondary story. This section highlights
          another important news item.
        </p>
      </CardContent>
    </Card>
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Secondary Story 2</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-32 bg-gray-200 mb-4"></div>
        <p>
          Brief description of the secondary story. This section highlights
          another important news item.
        </p>
      </CardContent>
    </Card>
  </div>
);

const OtherSections = () => (
  <div className="space-y-8">
    <Section title="World" />
    <Section title="Business" />
    <Section title="Tech" />
    <Section title="Markets" />
    <Section title="Opinion" />
    <Section title="Life & Arts" />
  </div>
);

const Section = ({ title }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Story 1</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-24 bg-gray-200 mb-4"></div>
          <p>Brief description of the story.</p>
        </CardContent>
      </Card>
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Story 2</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-24 bg-gray-200 mb-4"></div>
          <p>Brief description of the story.</p>
        </CardContent>
      </Card>
      <Card className="p-4">
        <CardHeader>
          <CardTitle className="text-lg font-bold">Story 3</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-24 bg-gray-200 mb-4"></div>
          <p>Brief description of the story.</p>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default Index;