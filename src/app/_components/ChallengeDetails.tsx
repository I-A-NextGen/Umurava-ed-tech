import { TfiEmail } from "react-icons/tfi";
import { GoBriefcase } from "react-icons/go";
import { FaRegCalendar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";

export function ChallengeDetails({
  email,
  category,
  Duration,
  Prize,
}: {
  email?: string;
  category?: string;
  Duration?: string;
  Prize?: string;
}) {
  return (
    <div className="my-4 flex min-h-fit flex-col gap-5 rounded-xl">
      <div className="flex flex-row items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-umurava/20 text-umurava">
          <TfiEmail />
        </span>
        <div>
          <h6 className="text-umuravablack text-lg leading-5">
            {email || "Not available"}
          </h6>
          <span className="text-[.9rem] text-gray-500">Contact Email</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-umurava/20 text-umurava">
          <GoBriefcase />
        </span>
        <div>
          <h6 className="text-umuravablack text-lg leading-5">
            {category || "Not available"}
          </h6>
          <span className="text-[.9rem] text-gray-500">Challenge Category</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-umurava/20 text-umurava">
          <FaRegCalendar />
        </span>
        <div>
          <h6 className="text-umuravablack text-lg leading-5">
            {Duration || "Not available"}
          </h6>
          <span className="text-[.9rem] text-gray-500">Duration</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-umurava/20 text-umurava">
          <MdAttachMoney />
        </span>
        <div>
          <h6 className="text-umuravablack text-lg leading-5">
            {Prize || "Not available"}
          </h6>
          <span className="text-[.9rem] text-gray-500">Money Prize</span>
        </div>
      </div>
    </div>
  );
}
