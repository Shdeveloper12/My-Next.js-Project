export async function GET(request, { params }) {
  const { id } = await params;
  console.log("Fetching data for item ID:", id);


    return Response.json({ id });
 
}