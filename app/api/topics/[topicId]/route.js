import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    const { topicId } = params;
    await connectMongoDB();

    await Topic.findByIdAndDelete(topicId);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}

export async function PUT(request, { params }) {
    const { topicId } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();

    await Topic.findByIdAndUpdate(topicId, { title, description });

    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { topicId } = params;
    
    await connectMongoDB();
    
    const topic = await Topic.findOne({ _id: topicId });

    return NextResponse.json({ topic }, { status: 200 });
}