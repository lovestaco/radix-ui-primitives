import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useState } from "react";

export default function MyForm({
  title = "My Form",
  initialName = "",
  initialRole = "User",
  onSubmit = (data: { name: string; role: string }) => {},
}: {
  title?: string;
  initialName?: string;
  initialRole?: string;
  onSubmit?: (data: { name: string; role: string }) => void;
}) {
  const [name, setName] = useState(initialName);
  const [role, setRole] = useState(initialRole);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition-colors">
          Open Form
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
          <Dialog.Title className="text-2xl font-bold mb-4">
            {title}
          </Dialog.Title>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit({ name, role });
            }}
            className="space-y-4"
          >
            <div>
              <label className="block">
                <span className="text-gray-700">Name:</span>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 h-12 pl-4"
                    />
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="right"
                      className="bg-gray-900 text-white px-3 py-1.5 rounded text-sm"
                    >
                      Type your full name
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-gray-700">Role:</span>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button
                      type="button"
                      className="mt-1 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-12 flex items-center justify-between w-full"
                    >
                      <span>{role}</span>
                      <svg
                        className="ml-2 w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content className="bg-white rounded-md shadow-lg border border-gray-200 py-1 min-w-[var(--radix-dropdown-menu-trigger-width)]">
                      <DropdownMenu.Item
                        onSelect={() => setRole("User")}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
                      >
                        User
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        onSelect={() => setRole("Admin")}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
                      >
                        Admin
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </label>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
              aria-label="Close"
            >
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
