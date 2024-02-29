import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

import DeleteButton from "@/components/delete-button";

const TopicsList = () => {
    return (
        <div
            // key={t._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
            <div>
                <h2 className="font-bold text-2xl">t.title</h2>
                <div>t.description</div>
            </div>

            <div className="flex gap-2">
                <DeleteButton id={"id"} />
                <Link href={`/edit-topic/44552`}>
                    <HiPencilAlt size={24} />
                </Link>
            </div>
        </div>
    )
}

export default TopicsList