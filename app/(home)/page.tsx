"use client";
import Button from "@components/Button";

const HomePage = () => {
  return (
    <div>
      <Button onClick={() => alert("Button clicked!")}>Button</Button>
    </div>
  );
};

export default HomePage;
