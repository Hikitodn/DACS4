import moment from "moment";

export const formatDate = () => {
  return moment().format("h:mm A");
};
