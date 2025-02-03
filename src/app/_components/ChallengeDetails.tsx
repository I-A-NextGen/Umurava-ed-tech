import { TfiEmail } from "react-icons/tfi";
import { GoBriefcase } from "react-icons/go";
import { FaRegCalendar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";

export function ChallengeDetails({email,category,Duration,Prize} : {email?:string,category?:string,Duration?:string,Prize?:string}) {
    return (
        <div className="flex flex-col gap-4 rounded-xl my-4 min-h-fit">
            <div className="flex flex-row gap-4">
                <span className="p-6 text-umurava rounded-full bg-umurava/20"><TfiEmail/></span>
                <div className="flex flex-col gap-2">
                    <h6 className="text-umuravablack text-lg">{(email || "") ?? "talent@umurava.africa"}</h6>
                    <span className="text-lg">Contact Email</span>
                </div>
                
            </div>
            <div className="flex flex-row gap-4">
                <span className="p-6 text-umurava rounded-full bg-umurava/20"><GoBriefcase /></span>
                <div className="flex flex-col gap-2">
                    <h6 className="text-umuravablack text-lg">{(category || "") ?? "Web design"}</h6>
                    <span className="text-lg">Challenge Category</span>
                </div>
                
            </div>
            <div className="flex flex-row gap-4">
                <span className="p-6 text-umurava rounded-full bg-umurava/20"><FaRegCalendar /></span>
                <div className="flex flex-col gap-2">
                    <h6 className="text-umuravablack text-lg">{(Duration || "") ?? "7 Days"}</h6>
                    <span className="text-lg">Duration</span>
                </div>
                
            </div>
            <div className="flex flex-row gap-4">
                <span className="p-6 text-umurava rounded-full bg-umurava/20"><MdAttachMoney /></span>
                <div className="flex flex-col gap-2">
                    <h6 className="text-umuravablack text-lg">{(Prize || "") ?? "$150 - $400"}</h6>
                    <span className="text-lg">Money Prize</span>
                </div>
                
            </div>

        </div>
    )
}