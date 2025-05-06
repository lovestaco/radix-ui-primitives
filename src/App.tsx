import "./App.css";
import MyForm from "./MyForm";
import * as Tooltip from "@radix-ui/react-tooltip";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function App() {
  return (
    <Tooltip.Provider>
      <>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div className="flex gap-4 mb-6">
          <PrimaryButton onClick={() => alert("Primary clicked!")}>
            Primary Button
          </PrimaryButton>
          <SecondaryButton onClick={() => alert("Secondary clicked!")}>
            Secondary Button
          </SecondaryButton>
        </div>
        <div className="flex flex-col gap-8 items-start">
          <MyForm
            title="User Registration"
            initialName=""
            initialRole="User"
            onSubmit={({ name, role }) =>
              alert(`User Registration\nName: ${name}\nRole: ${role}`)
            }
          />
          <MyForm
            title="Admin Registration"
            initialName="Admin Name"
            initialRole="Admin"
            onSubmit={({ name, role }) =>
              alert(`Admin Registration\nName: ${name}\nRole: ${role}`)
            }
          />
        </div>
      </>
    </Tooltip.Provider>
  );
}

export default App;
