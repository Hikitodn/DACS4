import moment from "moment";

export const formatDate = (timestamp: moment.MomentInput) => {
  return moment(timestamp).format("h:mm A");
};
