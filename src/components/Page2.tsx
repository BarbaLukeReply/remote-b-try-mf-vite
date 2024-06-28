import { Button } from "@barbalukereply/storybooktrycomponentlib"
const Page2 = () => {

  return (
    <div className="flex items-center justify-center flex-grow bg-red-500 bg-opacity-50">
      <h1>Remote Component B</h1>
      <Button text="Button from storybook remote lib in github" />
    </div>
  );
};

export default Page2;
