module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "Disallow the use of moment library",
      },
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          if (node.source.value === "moment") {
            context.report({
              node,
              message: "Use of Moment is forbidden",
            });
          }
        },
        CallExpression(node) {
          if (
            node.callee.name === "require" &&
            node.arguments[0] &&
            node.arguments[0].value === "moment"
          ) {
            context.report({
              node,
              message: "Use of Moment is forbidden",
            });
          }
        },
      };
    },
  };