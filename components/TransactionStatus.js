import { Fragment, useRef, useState } from "react";
import { Loading } from "@nextui-org/react";
import { Dialog, Transition } from "@headlessui/react";

export default function TransactionStatus({}) {
  const [open, setOpen] = useState(true);

  // To prevent closing of the dialog
  function handleClose() {
    setOpen(true);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[99999] inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom py-6 bg-gray-800 border border-gray-700 rounded-2xl text-center overflow-hidden shadow-xl transform transition-all md:w-[35%] sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="animate-pulse mx-auto w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-emerald-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Processing Transaction</h3>
              
              <div className="px-4 py-4 items-center justify-center sm:px-6 sm:flex sm:flex-col">
                <div className="mb-4">
                  <Loading size="lg" color="success">Processing</Loading>
                </div>
                <div className="w-full max-w-xs bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 animate-progress"></div>
                </div>
              </div>

              <p className="px-4 py-2 text-gray-400 items-center text-sm justify-center sm:px-6">
                Please wait while your transaction is being processed on the blockchain. This typically takes less than 15 seconds.
              </p>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}