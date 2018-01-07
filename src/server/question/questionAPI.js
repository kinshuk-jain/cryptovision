export const submitQuestion = (req, res) => {
  res.json({
    response: 'a POST request for CREATING questions',
    body: req.body,
  });
};

export const fetchQuestion = (req, res) => {
  res.json({
    response: `a GET request for LOOKING at a special answer id: ${req.params
      .qID}`,
  });
};

export const submitAnswer = (req, res) => {
  res.json({
    response: 'a POST request for CREATING answers',
    question: req.params.qID,
    body: req.body,
  });
};

export const editAnswer = (req, res) => {
  res.json({
    response: 'a PUT request for EDITING answers',
    question: req.params.qID,
    answer: req.params.aID,
    body: req.body,
  });
};

export const deleteAnswer = (req, res) => {
  res.json({
    response: 'a DELETE request for DELETING answers',
    question: req.params.qID,
    answer: req.params.aID,
    body: req.body,
  });
};

export const vote = (req, res) => {
  res.json({
    response: 'a POST request for VOTING on answers',
    question: req.params.qID,
    answer: req.params.aID,
    vote: req.params.dec,
    body: req.body,
  });
};
