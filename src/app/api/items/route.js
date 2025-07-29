// This function handles GET requests to the API route
export async function GET() {
  const data = {
    message: "This is a response from the API route",
    timestamp: new Date().toISOString(),
  }
 
  return Response.json({ data })
}

// This function handles POST requests to the API route
export async function POST(req) {
 const postData = await req.json();
  
 
  return Response.json({ postData, message: "Data received successfully" })
}