
interface Queue<Body = any> {
  send(message: Body): Promise<void>;
}

interface Env {
  readonly QUEUE: Queue;
}


export default <ExportedHandler<Env>>{
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    await env.QUEUE.send('Hello World!');
    return new Response('OK', { status: 200 });
  }
}
