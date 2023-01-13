exports.getAccount = (req, res, next) => {
  // db operation
  res.json({
    id: 123,
    name: "Sourav",
    role: "Software Dev",
  });
};

exports.postAccount = (req, res, next) => {
  const name = req.body.name;
  const role = req.body.role;
  // db operation
  const data = {
    id: Math.random(),
    name: name,
    role: role,
  };
  res.json(data);
};
