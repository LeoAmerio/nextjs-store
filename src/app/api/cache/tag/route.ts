import { revalidateTag } from 'next/cache';


export async function POST(request: Request) {
  const body = await request.json();
  const { tag, token } = body;

  if (!tag || !token)
    return Response.json({ error: 'Invalid request'}, { status: 400 });
  
  if (token !== token.CACHE_TOKEN)
    return Response.json({ error: 'Invalid token'}, { status: 401 });

  revalidateTag(tag);

  return Response.json({ success: true });

}