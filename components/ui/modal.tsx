import { useState, ReactNode } from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode; // This will be used to pass any content (form, info, etc.)
}

export const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="relative z-900"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Reduce the transparency of the background overlay */}
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-90 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-gradient-to-b from-gray-900 via-gray-800/80 to-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              {/* Flex container to align icon and title */}
              <div className="sm:flex sm:items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                {/* Flex-grow to allow text to occupy available space */}
                <div className="ml-4 flex-grow">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-100"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                </div>
              </div>
              <div className="mt-2">{children}</div>
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
