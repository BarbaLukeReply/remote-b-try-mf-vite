import { Button } from "@barbalukereply/storybooktrycomponentlib"
const Page2 = () => {

  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-green-500 bg-opacity-50 space-y-4 p-4">
      <h1>Remote Component B</h1>
      <Button text="Button from storybook remote lib in github" primary />
    </div>
  );
};

export default Page2;