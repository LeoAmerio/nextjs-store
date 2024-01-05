import { revalidatePath } from 'next/cache';


export async function POST(request: Request) {
  const body = await request.json();
  const { path, token } = body;

  if (!path || !token)
    return Response.json({ error: 'Invalid request'}, { status: 400 });
  
  if (token !== token.CACHE_TOKEN)
    return Response.json({ error: 'Invalid token'}, { status: 401 });

  revalidatePath(path);

  return Response.json({ success: true });

}