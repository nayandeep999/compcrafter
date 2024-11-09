import Sidebar from "../components/(shared)/Sidebar";

export default function page() {
  return (
    <div className="container flex justify-center items-center w-full mx-auto">
      <div className="flex w-full py-4 mt-16">
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
        <div className="mx-auto sm:mx-10 flex-col items-start max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
          {/* Title and Description */}
          <h1 className="text-2xl font-bold mb-2">Introduction</h1>
          <p className="mb-4 text-muted-foreground">
            Learn React by building components from scratch. Each example
            includes interactive demos and resources to help you master the
            essentials and beyond.
          </p>
          <div className="flex flex-col items-start mt-8 gap-8 text-gray-100">
            <h2 className="text-md font-medium">
              CompCrafter is more than a component library—it&apos;s a resource
              for learning and mastering React.
            </h2>
            <h2 className="text-md font-semibold">
              What makes CompCrafter different?
            </h2>
            <h2 className="text-md font-medium">
              You can install it via npm, but every component is also available
              for direct copy-paste.
            </h2>
            <h2 className="text-md font-medium">
              Customize each piece to fit your project and learn the ins and
              outs of React along the way.
            </h2>
            <h2 className="text-md font-medium">
              Whether you&apos;re building your own library or sharpening your
              React skills, CompCrafter is here to support your journey.
            </h2>
            <h2 className="text-md font-medium italic">
              Use this as a reference to build your own component libraries.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
