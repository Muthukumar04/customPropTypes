import { Button } from "./Button";

function App() {
  return (
    <>
      <Button
        type={{
          booleanKey: true,
          numberKey: 1,
          objectKey: {},
          shapeKey: {
            type: "Prop",
          },
        }}
      />
    </>
  );
}

export default App;
