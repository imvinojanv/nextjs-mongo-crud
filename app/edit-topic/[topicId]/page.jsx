import EditTopicForm from "@/components/edit-topic-form";

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const EditTopic = async ({ params }) => {
    const { topicId } = params;
    const { topic } = await getTopicById(topicId);
    const { title, description } = topic;

    return <EditTopicForm id={topicId} title={title} description={description} />;
}

export default EditTopic