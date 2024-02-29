"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
    const router = useRouter();

    const handleDelete = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };
    
    return (
        <button onClick={handleDelete} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    )
}

export default DeleteButton