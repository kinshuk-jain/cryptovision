// Register all apis here
import * as question from './question/questionAPI';
import * as timeline from './timeline/timelineAPI';

export function handleAPIs(router) {
  // apis for question creation, reading, updating and deletion
  // apis for answer posting, viewing, deletion and update

  // api version
  const apiVersion = 'v1';

  // returns homepage data
  router.get(`/api/${apiVersion}/getTimelineData`, timeline.getTimelineData);

  // api to ask a question
  router.post(`/api/${apiVersion}/submitQuestion`, question.submitQuestion);

  // api to fetch a question data
  router.get(`/api/${apiVersion}/getQuestion/:qID`, question.fetchQuestion);

  // api to submit answer
  router.post(`/api/${apiVersion}/submitAnswer/:qID`, question.submitAnswer);

  // api to edit answer
  router.put(`/api/${apiVersion}/editAnswer/:qID`, question.editAnswer);

  // api to delete answer
  router.delete(`/api/${apiVersion}/deleteAnswer/:qID`, question.deleteAnswer);

  // api for upvote/downvote
  router.post(`/api/${apiVersion}/:qID/answers/:aID/vote-:dec`, question.vote);
}
