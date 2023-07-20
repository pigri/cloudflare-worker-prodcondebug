interface Env {
  readonly QUEUE: string;
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async queue(batch: object[], env: Env): Promise<void> {
    console.log(batch);
  }
};
