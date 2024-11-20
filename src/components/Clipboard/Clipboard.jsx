import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { IoIosCopy } from "react-icons/io";
import { toast } from "react-toastify"; // Import toast for notifications

export default function Clipboard({ text, onCopy }) {
  const [copyStatus, setCopyStatus] = useState(false);
  const [buttonColor, setButtonColor] = useState("bg-blue-500"); // Button color state
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Button disable state

  const handleCopy = () => {
    setCopyStatus(true);
    setButtonColor("bg-green-500"); // Change button color to green on copy
    setIsButtonDisabled(true); // Disable the button to prevent multiple clicks
    if (onCopy) onCopy(); // Callback for additional actions

    // Show toast notification
    toast.success("Text copied to clipboard!", {
      position: toast.POSITION.BOTTOM_RIGHT, // Customize position
      autoClose: 2000, // Auto close after 2 seconds
    });

    setTimeout(() => {
      setCopyStatus(false);
      setButtonColor("bg-blue-500"); // Revert button color after 2 seconds
      setIsButtonDisabled(false); // Re-enable button after 2 seconds
    }, 2000);
  };

  return (
    <div>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <button
          className={`flex items-center px-4 py-2 ${buttonColor} text-white rounded-lg hover:bg-blue-600 transition`}
          disabled={isButtonDisabled} // Disable button if in copying state
          aria-label="Copy text to clipboard" // Accessibility improvement
        >
          <IoIosCopy className="mr-2 text-lg" />
          {copyStatus ? "Copied!" : "Copy to Clipboard"}
        </button>
      </CopyToClipboard>
      {copyStatus && (
        <p className="mt-2 text-sm text-green-600 font-medium">
          Text copied to clipboard!
        </p>
      )}
    </div>
  );
}
