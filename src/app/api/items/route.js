import dbConnect from "@/lib/dbConnect";

// This function handles GET requests to the API route
export async function GET(req) {
  try {
    const items = await dbConnect("items").find({}).toArray();
    
    return Response.json({ items, count: items.length });
  } catch (error) {
    console.error('Error fetching items:', error);
    return Response.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}

// This function handles POST requests to the API route
export async function POST(req) {
  try {
    const postData = await req.json();
    const result = await dbConnect("items").insertOne(postData);

    return Response.json({ 
      result, 
      insertedId: result.insertedId,
      message: "Item created successfully" 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating item:', error);
    return Response.json({ error: 'Failed to create item' }, { status: 500 });
  }
}

