import { rest } from "msw";

export const handler = [
  rest.put("http://localhost:3001/counter/increment", async (req, res, ctx) => {
    const { value } = req.body;
    // console.log(req);
    // console.log(res);
    // console.log(ctx);
    // console.log(req.body.value.count);
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
];
