import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
  return (
    <div className="w-screen h-96 flex flex-col gap-3 items-center justify-center">
      <p className="text-3xl">Loading your map...</p>
      <FontAwesomeIcon className="text-4xl animate-spin" icon={faSpinner} />
    </div>
  );
}
