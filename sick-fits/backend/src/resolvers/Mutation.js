const Mutation = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  },

  async deleteItem(parent, args, ctx, info) {
    const deleted = await ctx.db.mutation.deleteItem(
      {
        id: args.id
      },
      info
    );
    return deleted;
  }
};

module.exports = Mutation;
