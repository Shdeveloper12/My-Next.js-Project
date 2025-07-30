import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  try {
    const p = await params;
    console.log("Fetching item with ID:", p.id);
    
    const item = await dbConnect("items").findOne({ _id: new ObjectId(p.id) });
    if (!item) {
      return Response.json({ message: "Item not found" }, { status: 404 });
    }

    return Response.json({ item });
  } catch (error) {
    console.error('Error fetching item:', error);
    return Response.json({ error: 'Failed to fetch item' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const p = await params;
    
    const filter = { _id: new ObjectId(p.id) };
    const result = await dbConnect("items").deleteOne(filter);
    
    if (result.deletedCount === 0) {
      return Response.json({ message: "Item not found" }, { status: 404 });
    }

    return Response.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error('Error deleting item:', error);
    return Response.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  try {
    const p = await params;
    const postData = await req.json();
    
    const filter = { _id: new ObjectId(p.id) };
    const update = { $set: { ...postData } };
    const singleData = await dbConnect("items").updateOne(filter, update, {upsert: true});

    return Response.json({ singleData, message: "Data updated successfully" });
  } catch (error) {
    console.error('Error updating item:', error);
    return Response.json({ error: 'Failed to update item' }, { status: 500 });
  }
}